<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Domain\Course\Requests\CourseRegisterRequest;

class AccountCourseRegisterAction extends Controller
{
    
    public function __construct()
    {

    }

    public function __invoke(CourseRegisterRequest $request, Account $account, Course $course)
    {
        if(!$request->get('for_real')) return true;
        
        $student = $course->students()->create($request->data());

        return $request->get('raw') ? response($student) : redirect()->back()->with('success', "Enrollment successful");
    }

}
