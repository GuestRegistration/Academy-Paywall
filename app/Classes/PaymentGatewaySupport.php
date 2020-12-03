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
            'link' => 'https://paystack.com',
            'instructions' => 'Obtain your public key <a href="https://dashboard.paystack.com/#/settings/developer" target="_blank">here</a>',
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
            'link' => 'https://midtrans.com',
            'instructions' => 'Obtain your client and server key <a href="https://dashboard.midtrans.com/settings/config_info" target="_blank">here</a>',
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
            'link' => 'https://stripe.com',
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

        'paypal' => [
            'name' => 'PayPal',
            'image' => 'images/paypal.png',
            'link' => 'https://paypal.com',
            'instructions' => 'Create an App and get your client ID <a href="https://developer.paypal.com/developer/applications/" target="_blank">here</a> for your environment',
            'credentials' => [
                'Environment',
                'Client ID'
            ],
            'countries' => [
                'AD' => 'Andorra',
                'AR' => 'Argentina',
                'BS' => 'Bahamas',
                'BH' => 'Bahrain',
                'BM' => 'Bermuda',
                'BW' => 'Botswana',
                'KY' => 'Cayman Islands',
                'CL' => 'Chile',
                'CN' => 'China',
                'CO' => 'Colombia',
                'CR' => 'Costa Rica',
                'HR' => 'Croatia',
                'DO' => 'Dominican Republic',
                'EC' => 'Ecuador',
                'SV' => 'El Salvador',
                'FO' => 'Faroe Islands',
                'GE' => 'Georgia',
                'GL' => 'Greenland',
                'GT' => 'Guatemala',
                'HN' => 'Honduras',
                'IS' => 'Iceland',
                'IN' => 'India',
                'ID' => 'Indonesia',
                'IL' => 'Israel',
                'JM' => 'Jamaica',
                'JP' => 'Japan',
                'JO' => 'Jordan',
                'KZ' => 'Kazakhstan',
                'KE' => 'Kenya',
                'KW' => 'Kuwait',
                'LS' => 'Lesotho',
                'MY' => 'Malaysia',
                'MU' => 'Mauritius',
                'MX' => 'Mexico',
                'MD' => 'Moldova',
                'MC' => 'Monaco',
                'MA' => 'Morocco',
                'MZ' => 'Mozambique',
                'OM' => 'Oman',
                'NZ' => 'New Zealand',
                'NI' => 'Nicaragua',
                'NO' => 'Norway',
                'PA' => 'Panama',
                'PE' => 'Peru',
                'PH' => 'Philippines',
                'QA' => 'Qatar',
                'SA' => 'Saudi Arabia',
                'SN' => 'Senegal',
                'RS' => 'Serbia',
                'ZA' => 'South Africa',
                'TW' => 'Taiwan',
                'TH' => 'Thailand',
                'AE' => 'United Arab Emirates',
                'UY' => 'Uruguay',
                'VE' => 'Venezuela',
                'VN' => 'Viet Nam'
            ],
            'currencies' => [
                'AUD',
                'CAD',
                'CZK',
                'DKK',
                'EUR',
                'HKD',
                'HUF',
                'ILS',
                'JPY',
                'MXN',
                'NOK',
                'NZD',
                'PHP',
                'PLN',
                'GBP',
                'RUB',
                'SGD',
                'SEK',
                'CHF',
                'TWD',
                'THB',
                'TRY',
                'USD',
            ]
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