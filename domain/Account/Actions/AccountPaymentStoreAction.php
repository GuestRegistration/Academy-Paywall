<?php

namespace Domain\Account\Actions;

use Stripe\OAuth;
use Stripe\Stripe;
use Inertia\Inertia;
use Domain\Account\Models\Account;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Domain\Account\Requests\AccountPaymentGatewaySaveRequest;

class AccountPaymentStoreAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(AccountPaymentGatewaySaveRequest $request, Account $account)
    {
        $gateway = $account->paymentGateway;
        $stripe_user_id = null;

        DB::beginTransaction();
        try {
            if($gateway){
                if($gateway->gateway == 'stripe' && $request->gateway !== 'stripe'){
                    $stripe_user_id = $gateway->credentials->stripe_user_id;
                }
            }
    
            $gateway ? $gateway->update($request->data()) : $account->paymentGateway()->create($request->data());
    
            if($stripe_user_id){
                Stripe::setApiKey(config('services.stripe.secret_key'));
                OAuth::deauthorize([
                    'client_id' => config('services.stripe.client_id'),
                    'stripe_user_id' => $stripe_user_id,
                ]);
            }
            DB::commit();
        }catch (Exception $exception) {
            DB::rollBack();

            throw $exception;
        } 

       
        
        

        return redirect()->back()->with('success', 'Payment gateway saved');
    }

}
