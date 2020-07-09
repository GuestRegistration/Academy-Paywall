<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Domain\Course\Requests\CourseSaveRequest;

class AccountCourseUpdateAction extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,course');

    }

    public function __invoke(CourseSaveRequest $request, Account $account, Course $course)
    {
        if($course->started){
            return redirect()->back()->with('error', 'You can no longer edit this course because it has started');
        }
        $course->update($request->updateData());
        $course->users()->sync(json_decode($request->get('instructors')));
        return redirect()->route('account.course.show', [$account->username, $course->slug])->with('success', $course->title." updated successfully");
    }

}
