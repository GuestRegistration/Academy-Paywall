<?php

namespace Domain\Subscription\Actions;

use Exception;
use Stripe\Charge;
use Stripe\Stripe;
use Inertia\Inertia;
use Domain\Account\Models\Account;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Domain\Subscription\Models\Subscription;
use Domain\Subscription\Models\SubscriptionPlan;
use Domain\Subscription\Requests\SubscriptionRequest;

class SubscriptionAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(SubscriptionRequest $request, Account $account)
    {
        Stripe::setApiKey(config('services.stripe.secret_key'));
        $charge = Charge::create($request->data());
        
        if($charge){
            DB::beginTransaction();
            try {
                $plan = SubscriptionPlan::find($request->get('plan'));

                $payment = $account->payments()->create([
                    'amount' => $charge->amount/100,
                    'currency' => $charge->currency,
                    'gateway' => 'stripe',
                    'transaction_ref' => $charge->id,
                ]);

                $subscription = $account->subscription ?? new Subscription;
                
                $subscription->fill([
                    'account_id' => $account->getKey(),
                    'subscription_plan_id' => $plan->getKey(),
                    'payment_id' => $payment->getKey(),
                    'start_at' => now(),
                    'end_at' => now()->addMonths($plan->month_duration),
                ]);
                $subscription->save();
                DB::commit();
            }catch (Exception $exception) {
                DB::rollBack();

                throw $exception;
            }        
            return response([
                'subscription' => $subscription
            ]);
        } 
        return response([
            'charge' => $charge
        ]);
    }

}
