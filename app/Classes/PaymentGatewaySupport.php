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
            'countries' => [
                'NG' => 'Nigeria'
            ],
            'currencies' => [
                'NGN', 'GHS', 'ZAR'
            ]
        ],

        'midtrans' => [
            'name' => 'Midtrans',
            'image' => 'images/midtrans.png',
            'credentials' => [
                'Client Key',
                'Server Key'
            ],
            'countries' => [
                'ID' => 'Indonesia'
            ],
            'currencies' => [
                'IDR'
            ]
        ],  

        'stripe' => [
            'name' => 'Stripe',
            'image' => 'images/stripe.png',
            'credentials' => [
                'Stripe User Id'
            ],
            'countries' => [
                'AU' => 'Australia',
                'AT' => 'Austria',
                'BE' => 'Belgium',
                'BR' => 'Brazil',
                'BG' => 'Bulgaria',
                'CA' => 'Canada',
                'CY' => 'Cyprus',
                'CZ' => 'Czech Republic',
                'DK' => 'Denmark',
                'EE' => 'Estonia',
                'FI' => 'Finland',
                'FR' => 'France',
                'DE' => 'Germany',
                'GR' => 'Greece',
                'HK' => 'Hong Kong',
                'HU' => 'Hungary',
                'IN' =>'India',
                'IE' => 'Ireland',
                'IT' => 'Italy',
                'JP' => 'Japan',
                'LV' => 'Latvia',
                'LT' => 'Lithuania',
                'LU' => 'Luxembourg',
                'MY' => 'Malaysia',
                'MT' => 'Malta',
                'MX' => 'Mexico',
                'NL' => 'Netherland',
                'NZ' => 'New Zealand',
                'NO' => 'Norway',
                'PL' => 'Poland',
                'PT' => 'Portugal',
                'RO' => 'Romania',
                'SG' => 'Singapore',
                'SK' => 'Slovakia',
                'SL' => 'Slovenia',
                'ES' => 'Spain',
                'SE' => 'Sweden',
                'CH' => 'Switzerland',
                'GB' => 'United Kingdom',
                'US' => 'United States'
            ],
            'currencies' => 'all'
        ],
    ];
    /**
     * 
     * supported currencies
     * 
     */
    // const CURRENCIES = [
    //     'CAD' => [
    //         'stripe'
    //     ],
    //     'EUR' => [
    //         'stripe'
    //     ],
    //     'NGN' => [
    //         'paystack',
    //     ],
    //     'USD' => [
    //         'stripe'
    //     ]

    // ];


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