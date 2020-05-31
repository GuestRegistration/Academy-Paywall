<?php

namespace Domain\Auth\Actions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AccountSetupAction extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function __invoke()
    {
        $account = $this->user()->account;
        $new_account = true;
        return Inertia::render('Domain/Account/Pages/AccountEdit', compact('account', 'new_account'));
    }
}
