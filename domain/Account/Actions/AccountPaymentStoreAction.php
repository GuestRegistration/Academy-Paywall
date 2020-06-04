<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Domain\Account\Models\PaymentGateway;
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
        $existingGateway = $account->paymentGateways()->where('gateway', $request->get('gateway'))->first();
        $gateway = $existingGateway ? $existingGateway : new PaymentGateway;
        $gateway->fill($request->data())->save();
        
        return response($gateway);
    }

}
