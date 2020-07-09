<?php
namespace App\Classes;

use Illuminate\Support\Str;

class PaymentGatewaySupport {

    /**
     * 
     * Integrated gateways
     * 
     */
    const GATEWAYS = [
        'paystack' => [
            'name' => 'Paystack',
            'credentials' => [
                'Public Key',
            ],
        ],
    ];

    /**
     * 
     * supported currencies
     * 
     */
    const CURRENCIES = [
        'NGN' => [
            'paystack',
            'stripe'
        ],
        'USD' => []

    ];

    /**
     * 
     * Get credentials required for a gateway
     * 
     * @param string $gateway
     * @return array
     * 
     */
    public static function credentials($gateway){
        if(!isset(self::GATEWAYS[$gateway])) return [];

        $gateway = self::GATEWAYS[$gateway];

       return array_map(function($cred){
            return [
                'name' => $cred,
                'slug' => str_replace('-', '_', Str::slug($cred)),
            ];
        }, $gateway['credentials']);
    }

}