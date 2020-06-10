<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountShowAction extends Controller
{

    public function __construct()
    {

    }

    public function __invoke(Account $account)
    {
        $courses = $account->courses()->latest()->paginate();
        return Inertia::render('Domain/Account/Pages/AccountShow', compact('account', 'courses'));
    }

}
