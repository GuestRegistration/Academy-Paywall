<?php

namespace Domain\Account\Actions;

use Stripe\OAuth;
use Stripe\Stripe;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Account\Models\Account;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AccountStripeDisconnectAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(Request $request, Account $account)
    {
        DB::beginTransaction();
        try {
            $gateway = $account->paymentGateway;

            Stripe::setApiKey(config('services.stripe.secret_key'));
            OAuth::deauthorize([
                'client_id' => config('services.stripe.client_id'),
                'stripe_user_id' => $gateway->credentials->stripe_user_id,
            ]);

            $gateway->update([
                'active' => false,
                'credentials' => ""
            ]);

            DB::commit();
        } catch (Exception $e) {

            DB::rollBack();

            throw $exception;
        }

        return redirect()->route('account.payment.gateway', $account->username)->with('success', 'Stripe disconnected');
        
    }

}
