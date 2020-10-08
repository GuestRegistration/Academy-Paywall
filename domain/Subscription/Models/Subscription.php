<?php

namespace Domain\Subscription\Models;

use App\Classes\UUID;
use App\Traits\HasLocalDates;
use Domain\Account\Models\Account;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use UUID, HasLocalDates ;
    
    protected $fillable = [
        'account_id', 'subscription_plan_id', 'payment_id', 'start_at', 'end_at'
    ];

    protected $appends = ['expired', 'start_time', 'end_time', 'expiring_time'];

    protected $dates = [
        'start_at', 'end_at',
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function subscriptionPlan(){
        return $this->belongsTo(SubscriptionPlan::class);
    }

    public function payment(){
        return $this->belongsTo(Payment::class);
    }

    public function getExpiredAttribute(){
        return $this->localTimeNow() > $this->localize('end_at') ? true : false;
    }

    public function getStartTimeAttribute(){
        return $this->localize('start_at')->format('d F, Y h:i a');
    }

    public function getEndTimeAttribute(){
        return $this->localize('end_at')->format('d F, Y h:i a');
    }

    public function getExpiringTimeAttribute(){
       return $this->localTimeNow()->diffInDays($this->localize('end_at'));
    }

}
