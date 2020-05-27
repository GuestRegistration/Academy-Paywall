<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AccountShowAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function __invoke()
    {
        $account = Auth::user();
        return Inertia::render('Domain/Account/Pages/AccountShow', compact('account'));
    }

}
