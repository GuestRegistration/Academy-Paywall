<?php

namespace Domain\Subscription\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Domain\Subscription\Models\SubscriptionPlan;

class AccountSubscriptionPageAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(Account $account)
    {
        $account->load('subscription');
        $plans = SubscriptionPlan::all();
        $payg = SubscriptionPlan::PLAN_PAYG;
        $stripe_pk = env('STRIPE_PK');

        return Inertia::render('Domain/Account/Pages/AccountSubscription', compact('account', 'plans', 'payg', 'stripe_pk'));
    }

}
