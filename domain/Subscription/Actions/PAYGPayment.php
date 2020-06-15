<?php

namespace Domain\Subscription\Actions;

use Stripe\Charge;
use Stripe\Stripe;
use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Domain\Subscription\Requests\PAYGRequest;

class PAYGPayment extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(PAYGRequest $request, Account $account)
    {
        Stripe::setApiKey(env('STRIPE_SK'));
        $charge = Charge::create($request->data());
        
        if($charge){
            $payment = $account->payments()->create([
                'amount' => $charge->amount/100,
                'currency' => $charge->currency,
                'gateway' => 'stripe',
                'transaction_ref' => $charge->id,
            ]);
            
            // cache the payment id
            Cache::add($account->getKey().'-payg', $payment->getKey());

            return response([
                'payment' => $payment
            ]);
        }

        return response([
            'charge' => $charge
        ]);
    }

}
