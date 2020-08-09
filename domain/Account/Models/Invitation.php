<?php

namespace Domain\Account\Models;

use App\Classes\UUID;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invitation extends Model
{
    use UUID, Notifiable, SoftDeletes;

   

    protected $fillable = [
        'account_id', 'email'
    ];

    protected $appends = ['sent_time'];

    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function getSentTimeAttribute()
    {
        return "{$this->created_at->format('d/m/Y h:i a')}, {$this->created_at->diffForHumans()}";
    }

}
