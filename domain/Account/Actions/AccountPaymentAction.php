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
        $gateway = $gateway && isset(PaymentGatewaySupport::GATEWAYS[$gateway->gateway]) ? $gateway : null;

        // $currencies = collect(array_keys(PaymentGatewaySupport::CURRENCIES))->map(function($currency){
        //    return [
        //         'currency' => $currency,
        //         'gateways' => collect(PaymentGatewaySupport::CURRENCIES[$currency])->map(function($gateway){
        //             return [
        //                 'label' => PaymentGatewaySupport::GATEWAYS[$gateway]['name'],
        //                 'name' => $gateway, 
        //                 'image' => asset(PaymentGatewaySupport::GATEWAYS[$gateway]['image']),
        //                 'credentials' => PaymentGatewaySupport::credentials($gateway)
        //             ];
        //             })
        //         ]; 
        //     });

        $gateways = PaymentGatewaySupport::GATEWAYS;
        $countries = [];
        foreach ($gateways as $key => $_gateway) {
            foreach ($_gateway['countries'] as $code => $country) {
                if(\array_key_exists($code, $countries)){
                    array_push($countries[$code]['gateways'], $this->getGateway($key));
                }else{
                    $countries[$code] = [
                        'name' => $country,
                        'gateways' => [ $this->getGateway($key) ],
                    ];
                }
            }
        }
        \ksort($countries);

        return Inertia::render('Domain/Account/Pages/AccountPayment', compact('account', 'gateway', 'countries'));
    }

    private function getGateway($gateway){
        return [
            'label' => PaymentGatewaySupport::GATEWAYS[$gateway]['name'],
            'name' => $gateway, 
            'image' => asset(PaymentGatewaySupport::GATEWAYS[$gateway]['image']),
            'credentials' => PaymentGatewaySupport::credentials($gateway),
            'instructions' => isset(PaymentGatewaySupport::GATEWAYS[$gateway]['instructions']) ? PaymentGatewaySupport::GATEWAYS[$gateway]['instructions'] : null
        ];
    }

}
