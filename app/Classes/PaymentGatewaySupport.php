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
            'image' => 'images/paystack.png',
            'credentials' => [
                'Public Key',
            ],
        ],
        'stripe' => [
            'name' => 'Stripe',
            'image' => 'images/stripe.png',
            'credentials' => [
                // 'Publishable Key',
                // 'Secret Key'
                'Stripe User Id'
            ],
        ],
    ];

    /**
     * 
     * supported currencies
     * 
     */
    const CURRENCIES = [
        'CAD' => [
            'stripe'
        ],
        'EUR' => [
            'stripe'
        ],
        'NGN' => [
            'paystack',
        ],
        'USD' => [
            'stripe'
        ]

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