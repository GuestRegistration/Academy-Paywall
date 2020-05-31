<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountEditAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function __invoke(Account $account)
    {
        return Inertia::render('Domain/Account/Pages/AccountEdit', compact('account'));
    }

}
