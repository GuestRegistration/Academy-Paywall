<?php

namespace Domain\Account\Models;

use App\User;
use App\Classes\UUID;
use Domain\Course\Models\Course;
use Domain\Subscription\Models\Payment;
use Illuminate\Database\Eloquent\Model;
use Domain\Subscription\Models\Subscription;
use Domain\Subscription\Models\SubscriptionPlan;

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
        'youtube_url', 'website', 'avatar', 'cover_image', 'theme_color',
        'caption', 'subcaption', 'show_caption'
    ];

    protected $essentials = [
        'name', 'email', 'phone', 'username',
    ];

    protected $appends = [
        'at_username', 'profile_complete', 'is_unlimited'
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

    public function getIsUnlimitedAttribute(){
        $unlimited_plan = SubscriptionPlan::unlimited();
        return $this->subscription && $unlimited_plan && $this->subscription->subscription_plan_id == $unlimited_plan->id;
    }

    public function getInstructorsAttribute(){
        return collect([$this->user->load(['profile'])])->merge($this->users()->with(['profile'])->get());
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }

    public function courses(){
        return $this->hasMany(Course::class);
    }

    public function paymentGateways(){
        return $this->hasMany(PaymentGateway::class);
    }

    public function subscription(){
        return $this->hasOne(Subscription::class);
    }

    public function payments(){
        return $this->hasMany(Payment::class);
    }
    
}
