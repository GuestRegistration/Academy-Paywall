<?php

namespace Domain\Account\Models;

use App\User;
use App\Classes\UUID;
use Domain\Course\Models\Course;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use UUID;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'phone', 'username', 'bio',
        'facebook_url', 'twitter_url', 'instagram_url', 'linkedin_url', 
        'youtube_url', 'website', 'avatar', 'cover_image', 'theme_color'
    ];

    protected $essentials = [
        'name', 'email', 'phone', 'username',
    ];

    protected $appends = [
        'at_username', 'profile_complete'
    ];

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

    public function getThemeColorAttribute($value){
        return $value ?? '#3F51B5';
    }

    public function getCoverImageAttribute($value){
        return $value ?? asset('images/default-account-cover.jpg');
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function courses(){
        return $this->hasMany(Course::class);
    }
}
