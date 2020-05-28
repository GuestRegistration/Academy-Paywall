<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use App\Http\Controllers\Controller;

class AccountCoursesAction extends Controller
{

    public $model;

    public function __construct(Course $model)
    {
        $this->model = $model;
        $this->middleware('auth');
    }


    public function __invoke()
    {
        $courses = $this->model->with('user')
                    ->where('user_id', $this->user()->getKey())
                    ->paginate();
        return Inertia::render('Domain/Course/Pages/CourseList', compact('courses'));
    }

}
