<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use App\Http\Controllers\Controller;
use Domain\Course\Requests\CourseSaveRequest;

class CourseStoreAction extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function __invoke(CourseSaveRequest $request)
    {
        $course = $this->user()->courses()->create($request->data());

        return redirect()->route('account.courses')->with('success', $course->title." saved successfully");
    }

}
