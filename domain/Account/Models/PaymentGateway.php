<?php

namespace Domain\Account\Models;

use App\Classes\UUID;
use App\Classes\PaymentGatewaySupport;
use Illuminate\Database\Eloquent\Model;

class PaymentGateway extends Model
{
    use UUID;

    protected $fillable = [
        'account_id', 'country', 'gateway', 'active', 'credentials', 
    ];

    protected $appends = [
        'credentials_complete'
    ];

    protected $hidden = [
        // 'credentials'
    ];


    public function getCredentialsAttribute($value)
    {
        return $value ? json_decode(decrypt($value)) : (object) [];
    }

    public function getCredentialsCompleteAttribute(){
        $complete = true;
        if(!isset(PaymentGatewaySupport::GATEWAYS[$this->gateway])) return false;

        $neededCredentials = PaymentGatewaySupport::credentials($this->gateway);
    
        $submittedCredentials = (array) $this->credentials;
        foreach($neededCredentials as $cred){
            if(!isset($submittedCredentials[$cred['slug']]) || $submittedCredentials[$cred['slug']] == null || $submittedCredentials[$cred['slug']] == ''){
                $complete = false;
            }
        }
        return $complete;
    }

    public function getCurrenciesAttribute()
    {
        return PaymentGatewaySupport::GATEWAYS[$this->gateway]['currencies'];
    }

}
