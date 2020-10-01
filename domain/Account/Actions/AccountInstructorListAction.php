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
        $account->load(['subscription.subscriptionPlan']);
        $instructors = $account->instructors;
        $invitations = $account->invitations()->latest()->get();
        
        return Inertia::render('Domain/Account/Pages/AccountInstructorList', compact('account', 'instructors', 'invitations'));
    }

}
