<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'phone', 'signin_token', 'signin_token_expires_at', 'last_login_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'signin_token_expires_at' => 'datetime',
    ];

    protected $appends = [
        'name'
    ];

    public function getNameAttribute(){
        return $this->first_name." ".$this->last_name;
    }

    public function getInitialsAttribute()
    {
        return Str::upper(
            substr($this->first_name, 0, 1). substr($this->last_name, 0, 1)
        );
    }

    public function getProfileCompleteAttribute(){
        $profile = $this;
        return 
            collect($this->fillable)->every(function($info) use($profile){
                return $profile->$info !== null;
            });
    }

}
