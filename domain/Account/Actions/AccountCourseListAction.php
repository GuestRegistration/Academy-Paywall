<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountCourseListAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }

    public function __invoke(Account $account)
    {
        $courses = $account->courses()->latest()->get();

        return Inertia::render('Domain/Course/Pages/CourseList', compact('account', 'courses'));
    }                                                                                                            

}
