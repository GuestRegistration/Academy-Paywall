<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountCourseDeleteAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }

    public function __invoke(Account $account, Course $course)
    {
        $course->delete();
        return redirect()->route('account.course.list', $account->username)->with('success', 'Course deleted');
    }                                                                                                            

}
