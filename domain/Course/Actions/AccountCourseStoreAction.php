<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
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
        $course = $account->courses()->create($request->storeData());

        return redirect()->route('account.show', $account->username)->with('success', $course->title." saved successfully");
    }

}
