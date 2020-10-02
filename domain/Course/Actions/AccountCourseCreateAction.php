<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use App\Classes\PaymentGatewaySupport;
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

        // if(!$account->is_unlimited && !$account->courses_slot) return \redirect()->back()->with('error', 'Courses limit reached');

        $account->load('subscription.payment');
        $payg = SubscriptionPlan::PLAN_PAYG;
        $stripe_pk = env('STRIPE_PK');
        $instructors = $account->instructors;
        $payment = Cache::has($account->getKey().'-payg') ? Payment::find(Cache::get($account->getKey().'-payg')) : null;

        $payment_gateway = $account->paymentGateway ? $account->paymentGateway->only(['active', 'gateway', 'currency']) : null;

        $payment_gateway = $payment_gateway && isset(PaymentGatewaySupport::GATEWAYS[$payment_gateway['gateway']]) ? $payment_gateway : null;

        return Inertia::render('Domain/Course/Pages/CourseCreate', compact('account', 'payg', 'stripe_pk', 'payment', 'instructors', 'payment_gateway'));
    }

}
