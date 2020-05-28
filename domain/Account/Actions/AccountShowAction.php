<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AccountShowAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function __invoke()
    {
        $account = $this->user();
        return Inertia::render('Domain/Account/Pages/AccountShow', compact('account'));
    }

}
