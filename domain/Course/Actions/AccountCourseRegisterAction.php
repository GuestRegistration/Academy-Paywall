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
        dd($request->data());
        
        $course->students()->create($request->data());

        return redirect()->back()->with('success', "Enrollment successful");
    }

}
