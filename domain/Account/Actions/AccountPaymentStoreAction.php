<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
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
        $gateway =  $account->paymentGateway;
        
        $gateway ? $gateway->update($request->data()) : $account->paymentGateway()->create($request->data());

        return redirect()->back()->with('success', 'Payment gateway saved');
    }

}
