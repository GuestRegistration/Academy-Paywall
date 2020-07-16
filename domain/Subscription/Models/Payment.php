<?php

namespace Domain\Subscription\Models;

use App\Classes\UUID;
use App\Traits\HasLocalDates;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use UUID, HasLocalDates ;

    protected $fillable = [
        'account_id', 'amount', 'currency', 'gateway', 'transaction_ref'
    ];

    protected $appends = [
        'time'
    ];

    public function getTimeAttribute(){
        return $this->localize('created_at')->format('d F, Y h:i a');
    }
    
    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function subscription(){
        return $this->belongsTo(Subscription::class);
    }
}
