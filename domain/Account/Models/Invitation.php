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

    protected $casts = [
        'credentials' => 'array'
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }


}
