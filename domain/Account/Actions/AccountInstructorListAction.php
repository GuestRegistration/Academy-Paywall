<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountInstructorListAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }

    public function __invoke(Account $account)
    {
        $instructors = $account->users;

        return Inertia::render('Domain/Account/Pages/InstructorList', compact('account', 'instructors'));
    }

}
