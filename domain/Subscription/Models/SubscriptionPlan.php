<?php

namespace Domain\Subscription\Models;

use App\Classes\UUID;
use Domain\Account\Models\Account;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    use UUID;

    const PLAN_PAYG = [
            'name' => 'Pay As You Go',
            'amount' => 1,
            'currency' => 'USD',
            'month_duration' => null,
            'description' => 'Each course cost 1 USD'
    ];

    const PLAN_PROFESSIONAL = [
            'name' => 'Bundle',
            'amount' => 100,
            'currency' => 'USD',
            'month_duration' => 12,
            'description' => 'Enjoy unlimited courses for 12 months'
        ];

    const PLAN_UNLIMITED = [
            'name' => 'Enterprise',
            'amount' => 0,
            'currency' => 'USD',
            'month_duration' => null,
            'description' => "You do not need to worry about subscription. You are already covered"
        ];

    
    protected $fillable = [
        'name', 'description', 'month_duration', 'amount', 'currency'
    ];

    public static function unlimited(){
       return self::where('name', self::PLAN_UNLIMITED['name'])->first();
    }

    public function accounts(){
        return $this->hasMany(Account::class);
    }

    public function scopeRegularPlans($query){
        return $query->where('name', '!=', self::PLAN_UNLIMITED['name']);
    }

    public function subscriptions(){
        return $this->hasMany(Subscription::class);
    }
}
