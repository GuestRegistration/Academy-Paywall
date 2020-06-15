<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Domain\Subscription\Models\Payment;
use Domain\Subscription\Models\SubscriptionPlan;

class AccountCourseCreateAction extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(Account $account)
    {
        $account->load('subscription.payment');
        $payg = SubscriptionPlan::PLAN_PAYG;
        $stripe_pk = env('STRIPE_PK');
        
        $payment = Cache::has($account->getKey().'-payg') ? Payment::find(Cache::get($account->getKey().'-payg')) : null;

        return Inertia::render('Domain/Course/Pages/CourseCreate', compact('account', 'payg', 'stripe_pk', 'payment'));
    }

}
