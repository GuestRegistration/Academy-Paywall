<?php
namespace Domain\User\Models;

use App\User;
use App\Classes\UUID;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use UUID;
    
    protected $fillable = [
        'user_id', 'first_name', 'last_name', 'username', 'email', 'phone', 'bio', 'avatar'
    ];

    protected $appends = [
        'profile_complete', 'at_username', 'fullname', 'initials'
    ];

    protected $essentials = [
        'first_name','last_name', 'email', 'phone', 'username',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function getProfileCompleteAttribute(){
        $profile = $this;
        return 
            collect($this->essentials)->every(function($info) use($profile){
                return $profile->$info !== null;
            });
    }

    public function getAtUsernameAttribute($value){
        return "@$this->username";
    }

    public function getFullnameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function getInitialsAttribute()
    {
        return Str::upper(
            substr($this->first_name, 0, 1). substr($this->last_name, 0, 1)
        );
    }

    public function getAvatarAttribute($value){
        return $value && $value !== 'null' ? $value : null;
    }


}
