<?php

namespace Domain\Account\Models;

use App\User;
use App\Classes\UUID;
use Domain\Course\Models\Course;
use Domain\Subscription\Models\Payment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Domain\Subscription\Models\Subscription;
use Domain\Subscription\Models\SubscriptionPlan;

class Account extends Model
{
    use UUID, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'phone', 'username', 'bio',
        'facebook_url', 'twitter_url', 'instagram_url', 'linkedin_url', 
        'youtube_url', 'website', 'avatar', 'cover_image', 'theme_color',
        'caption', 'subcaption', 'show_caption', 'google_tag_manager', 'gtm_events'
    ];

    protected $essentials = [
        'name', 'email', 'phone', 'username',
    ];

    protected $appends = [
        'at_username', 'profile_complete', 'is_unlimited', 'is_payg', 'users_slot', 'courses_slot',
        'has_free_course_slot'
    ];

    protected $casts = [
        'gtm_events' => 'array'
    ];

    public function getProfileCompleteAttribute(){
        $profile = $this;
        return 
            collect($this->essentials)->every(function($info) use($profile){
                return $profile->$info !== null;
            });
    }

    public function getFacebookUrlAttribute($value)
    {
        return $value == 'null' ? null : $value;
    }
    public function getInstagramUrlAttribute($value)
    {
        return $value == 'null' ? null : $value;
    }
    public function getTwitterUrlAttribute($value)
    {
        return $value == 'null' ? null : $value;
    }
    public function getLinkedinUrlAttribute($value)
    {
        return $value == 'null' ? null : $value;
    }
    public function getYoutubeUrlAttribute($value)
    {
        return $value == 'null' ? null : $value;
    }
    public function getWebsiteAttribute($value)
    {
        return $value == 'null' ? null : $value;
    }
    public function getBioAttribute($value)
    {
        return $value == 'null' ? null : $value;
    }


    public function getAtUsernameAttribute($value){
        return "@$this->username";
    }

    public function getThemeColorAttribute($value){
        return $value ?? config('custom.default_theme_color');
    }

    public function getCoverImageAttribute($value){
        return $value && $value !== 'null' ? $value : asset('images/default-account-cover.png');
    }

    public function getAvatarAttribute($value){
        return $value && $value !== 'null' ? $value : null;
    }

    public function getUsersSlotAttribute()
    {
        if(!$this->subscription) return 0;

        if($this->is_unlimited) return 'unlimited';

        return $this->subscription->subscriptionPlan->max_users - ($this->users->count() + $this->invitations->count());
    }

    public function getCoursesSlotAttribute()
    {
        if(!$this->subscription) return 0;

        if($this->is_unlimited) return 'unlimited';

        return $this->subscription->subscriptionPlan->max_courses - $this->courses()->withTrashed()->count();
    }

    public function getIsUnlimitedAttribute(){
        $unlimited_plan = SubscriptionPlan::unlimited();
        return $this->subscription && $unlimited_plan && $this->subscription->subscription_plan_id == $unlimited_plan->id;
    }

    public function getIsPaygAttribute(){        
        if(!$this->subscription) return true;

        return $this->subscription && $this->subscription->expired ? true : false;
    }

    public function getInstructorsAttribute(){
        return collect([$this->user->load(['profile'])])->merge($this->users()->with(['profile'])->get())->filter(function($user){
            return $user->profile !== null;
        });
    }

    public function getHasFreeCourseSlotAttribute()
    {
        return $this->courses_slot == 0 && $this->courses()->withTrashed()->count() == 0 ? true : false;
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

    public function paymentGateway(){
        return $this->hasOne(PaymentGateway::class);
    }

    public function subscription(){
        return $this->hasOne(Subscription::class);
    }

    public function payments(){
        return $this->hasMany(Payment::class);
    }

    public function invitations(){
        return $this->hasMany(Invitation::class);
    }
    
}
