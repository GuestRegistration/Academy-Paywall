<?php

namespace App\Http\Controllers;

use Stripe\Charge;
use Stripe\Stripe;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function __invoke(){
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        $charge = Charge::create([
            'amount' => 100,
            'currency' => 'usd',
            'description' => 'Subscription fee',
            'source' => $request->get('stripe_token')
        ]);
    }
}
