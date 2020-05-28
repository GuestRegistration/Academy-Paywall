<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class CourseCreateAction extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function __invoke()
    {
        return Inertia::render('Domain/Course/Pages/CourseCreate');
    }

}
