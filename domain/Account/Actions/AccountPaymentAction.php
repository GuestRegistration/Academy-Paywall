<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use App\Classes\PaymentGatewaySupport;

class AccountPaymentAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(Account $account)
    {
        $gateway = $account->paymentGateway;
        $currencies = collect(array_keys(PaymentGatewaySupport::CURRENCIES))->map(function($currency){
           return [
                'currency' => $currency,
                'gateways' => collect(PaymentGatewaySupport::CURRENCIES[$currency])->map(function($gateway){
                    return [
                        'label' => PaymentGatewaySupport::GATEWAYS[$gateway]['name'],
                        'name' => $gateway, 
                        'credentials' => PaymentGatewaySupport::credentials($gateway)
                    ];
                    })
                ]; 
            });

        return Inertia::render('Domain/Account/Pages/AccountPayment', compact('account', 'gateway', 'currencies'));
    }

}
