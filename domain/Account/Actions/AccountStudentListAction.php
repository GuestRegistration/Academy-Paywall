<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountStudentListAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }

    public function __invoke(Account $account)
    {
        $students = collect([]);

        foreach ($account->courses as $course)
        {
            $students = $students->merge($course->students()->with('course')->get());
        }

        return Inertia::render('Domain/Course/Pages/StudentList', compact('account', 'students'));
    }

}
