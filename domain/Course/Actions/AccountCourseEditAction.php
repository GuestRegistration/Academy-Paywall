<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountCourseEditAction extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,course');
    }


    public function __invoke(Account $account, Course $course)
    {
        return Inertia::render('Domain/Course/Pages/CourseCreate', compact('account', 'course'));
    }

}
