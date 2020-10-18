<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class CourseSearchAction extends Controller
{
    public $model;
    
    public function __construct(Course $model)
    {
        $this->model = $model;
    }


    public function __invoke(Request $request, Account $account)
    {
        $search = $request->get('search');

        if($account->id){
            $courses = $account->courses()->get();
        }else{
            $courses = $this->model->get();
        }
        return response($courses);
    }

}
