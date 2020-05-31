<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountCourseCreateAction extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function __invoke(Account $account)
    {
        return Inertia::render('Domain/Course/Pages/CourseCreate', compact('account'));
    }

}
