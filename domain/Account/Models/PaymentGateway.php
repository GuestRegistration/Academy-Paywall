<?php

namespace Domain\Account\Models;

use App\Classes\UUID;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class PaymentGateway extends Model
{
    use UUID;

    const GATEWAYS = [
        'paystack' => [
            'name' => 'Paystack',
            'credentials' => [
                'Public key',
            ],
        ],

    ];

    public static function getCredentials($gateway){
        if(!isset(self::GATEWAYS[$gateway])) return [];

        $gateway = self::GATEWAYS[$gateway];

       return array_map(function($cred){
            return [
                'name' => $cred,
                'slug' => str_replace('-', '_', Str::slug($cred)),
            ];
        }, $gateway['credentials']);
    }

    protected $fillable = [
        'account_id', 'gateway', 'active', 'credentials', 
    ];

    protected $casts = [
        'credentials' => 'array'
    ];

    protected $appends = [
        'credentials_complete'
    ];

    protected $hidden = [
        // 'credentials'
    ];


    public function getCredentialsCompleteAttribute(){
        $complete = true;
        if(!isset(self::GATEWAYS[$this->gateway])) return false;

        $neededCredentials = self::getCredentials($this->gateway);
        $submittedCredentials = $this->credentials;
        foreach($neededCredentials as $cred){

            if(!isset($submittedCredentials[$cred['slug']]) || $submittedCredentials[$cred['slug']] == null || $submittedCredentials[$cred['slug']] == ''){
                $complete = false;
            }
        }
        return $complete;
    }


}
