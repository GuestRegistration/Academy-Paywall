<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Domain\Account\Models\PaymentGateway;

class AccountPaymentAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(Account $account)
    {
        $gateways = [];

        $allMyGateways = $account->paymentGateways;

        foreach (PaymentGateway::GATEWAYS as $key => $gateway) {
            array_push($gateways, [
                'gateway_name' => $gateway['name'],
                'gateway' => $key,
                'credentials' => PaymentGateway::getCredentials($key),
                'data' => $allMyGateways->where('gateway', $key)->first() ??  ['credentials' => (object) []],
            ]);
        }

        return Inertia::render('Domain/Account/Pages/AccountPayment', compact('account', 'gateways'));
    }

}
