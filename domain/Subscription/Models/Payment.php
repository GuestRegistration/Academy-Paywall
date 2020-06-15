<?php

namespace Domain\Subscription\Models;

use App\Classes\UUID;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use UUID;

    protected $fillable = [
        'account_id', 'amount', 'currency', 'gateway', 'transaction_ref'
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function subscription(){
        return $this->belongsTo(Subscription::class);
    }
}
