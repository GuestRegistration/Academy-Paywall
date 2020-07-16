<?php

namespace App;

use App\Classes\UUID;
use Domain\User\Models\Profile;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use UUID, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['email', 'signin_token', 'last_login_at', 'signin_token_expires_at', 'timezone'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'signin_token', 'signin_token_expires_at', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'signin_token_expires_at' => 'datetime',
    ];

    public function account(){
        return $this->hasOne(Account::class);
    }

    public function accounts(){
        return $this->belongsToMany(Account::class);
    }

    public function courses(){
        return $this->belongsToMany(Course::class);
    }

    public function profile(){
        return $this->hasOne(Profile::class);
    }
    
}
