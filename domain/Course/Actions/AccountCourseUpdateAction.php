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

        $course->update($request->updateData());

        return redirect()->route('account.course.show', [$account->username, $course->slug])->with('success', $course->title." updated successfully");
    }

}
