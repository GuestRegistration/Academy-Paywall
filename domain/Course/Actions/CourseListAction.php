<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Course\Models\Course;
use App\Http\Controllers\Controller;

class CourseListAction extends Controller
{
    public $model;
    
    public function __construct(Course $model)
    {
        $this->model = $model;
    }


    public function __invoke(Request $request)
    {
        $courses = $this->model->with('account')->paginate();
        return response($courses);
    }

}
