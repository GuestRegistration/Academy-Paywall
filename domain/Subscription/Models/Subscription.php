<?php

namespace Domain\Subscription\Models;

use App\Classes\UUID;
use Domain\Account\Models\Account;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use UUID;
    
    protected $fillable = [
        'account_id', 'subscription_plan_id', 'payment_id', 'start_at', 'end_at'
    ];

    protected $appends = ['expired', 'expiring_time'];

    protected $dates = [
        'start_at', 'end_at',
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function subscriptionPlan(){
        return $this->belongsTo(subscriptionPlan::class);
    }

    public function payment(){
        return $this->belongsTo(Payment::class);
    }

    public function getExpiredAttribute(){
        return now() > $this->end_at ? true : false;
    }

    public function getStartTimetribute(){
        return $this->start_at->format('d F, Y h:i a');
    }

    public function getEndTimeAttribute(){
        return $this->end_at->format('d F, Y h:i a');
    }

    public function getExpiringTimeAttribute(){
       return now()->diffInDays($this->end_at);
    }

}
