<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use App\Http\Controllers\Controller;

class CourseShowAction extends Controller
{

    public function __invoke(Course $course)
    {
        return Inertia::render('Domain/Course/Pages/CourseShow', compact('course'));
    }

}
