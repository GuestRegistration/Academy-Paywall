<?php

namespace Domain\Account\Actions;

use Stripe\OAuth;
use Stripe\Stripe;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Account\Models\Account;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class AccountStripeConnectCallbackAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function __invoke(Request $request)
    {
        DB::beginTransaction();
        try {
                $account = auth()->user()->account;
                if($request->query('error') == 'access_denied') return redirect()->route('account.payment.gateway', $account->username)->with('error', 'Access denied for Stripe');
                $authCode = $request->query('code');
                if(!$authCode)  return redirect()->route('account.payment.gateway', $account->username)->with('error', 'Authorization failed');
                
                Stripe::setApiKey(config('services.stripe.secret_key'));
        
                $response = OAuth::token([
                    'grant_type' => 'authorization_code',
                    'code' => $authCode,
                ]);
        
                $gateway =  $account->paymentGateway;
                $data = [
                    'gateway' => 'stripe',
                    'currency' => Cache::get($account->getKey().'-stripe-currency'),
                    'active' => 1,
                    'credentials' => encrypt(json_encode([
                        'stripe_user_id' => $response->stripe_user_id
                        ])),
                    ];
        
                $gateway ? $gateway->update($data) : $account->paymentGateway()->create($data);
        
                Cache::forget($account->getKey().'-stripe-currency');

                DB::commit();
            } catch (Exception $e) {

                DB::rollBack();

                echo "Error connecting connecting Stripe";
                die();
            }

        
        return redirect()->route('account.payment.gateway', $account->username)->with('success', 'Stripe connected');
    }

}
