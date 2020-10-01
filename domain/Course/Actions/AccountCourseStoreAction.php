<?php

namespace Domain\Course\Actions;

use Exception;
use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Domain\Course\Events\CourseCreated;
use Domain\Course\Requests\CourseSaveRequest;

class AccountCourseStoreAction extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }

    public function __invoke(CourseSaveRequest $request, Account $account)
    {
        if(!$account->is_unlimited && !$account->courses_slot) return \redirect()->back()->with('error', 'Courses limit reached');
        
        DB::beginTransaction();
        try {

            $course = $account->courses()->create($request->storeData());
            $course->users()->attach(json_decode($request->get('instructors')));
    
            event(new CourseCreated($course));
            
            if(Cache::has($account->getKey().'-payg')){
                Cache::forget($account->getKey().'-payg');
            }

            DB::commit();
        }catch (Exception $exception) {
        DB::rollBack();

        throw $exception;
        } 
        
        return redirect()->route('account.show', $account->username)->with('success', $course->title." saved successfully");
    }

}
