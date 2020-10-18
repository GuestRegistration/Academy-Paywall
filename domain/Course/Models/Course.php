<?php

namespace Domain\Course\Models;

use App\User;
use App\Classes\UUID;
use App\Traits\HasLocalDates;
use Domain\Account\Models\Account;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use UUID, HasLocalDates, SoftDeletes;

    const MIN_DESCRIPTION_CHARACTER = 120;
    
    protected $fillable = [
        'account_id', 'title', 'description', 'price', 'cover_image', 'published_at', 'slug',
        'preview_video', 'start_at', 'end_at', 'course_type', 'send_instructions', 'instructions'
    ];

    protected $dates = [
        'start_at',
        'end_at',
        'published_at',
    ];

    protected $appends = [
        'is_published', 'published_time', 'snippet',
        'start_date', 'end_date', 'started', 'ended', 'ongoing',
        'raw_dates', 'payment', 'course_duration', 'status_time'
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function students(){
        return $this->hasMany(Student::class);
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }

    public function getCoverImageAttribute($value){
        return $value ?? asset('images/default-course-cover.jpg');
    }

    public function getIsPublishedAttribute(){
        return !($this->published_at == null);
    }

    public function getStartDateAttribute(){
        return optional($this->localize('start_at', $this->account->user->timezone))->format('F d, Y h:i a');
    }

    public function getEndDateAttribute(){
        return optional($this->localize('end_at', $this->account->user->timezone))->format('F d, Y h:i a');
    }

    public function getTimeDiffDuration($start, $end){
        $diff = $start->diff($end);
        $duration = '';
        if($diff->y > 0){
            $duration .= "{$diff->y}yr.";
        } 
        if($diff->m > 0) {
            $duration = \str_replace('.', ', ', $duration);
            $duration .= "{$diff->m}mth.";
        }
        if($diff->d > 0) {
            $duration = \str_replace('.', ', ', $duration);
            $duration .= "{$diff->d}d.";
        }
        if($diff->h > 0) {
            $duration = \str_replace('.', ', ', $duration);
            $duration .= "{$diff->h}hr.";
        }
        if($diff->i > 0) {
            $duration = \str_replace('.', ', ', $duration);
            $duration .= "{$diff->i}min."; 
        }

        return $duration;
    }
    
    public function getCourseDurationAttribute(){
        return $this->getTimeDiffDuration($this->start_at, $this->end_at);
    }


    public function getRawDatesAttribute(){
        return [
            'start' => [
                'date' => optional($this->localize('start_at', $this->account->user->timezone))->format('Y-m-d'),
                'time' =>  optional($this->localize('start_at', $this->account->user->timezone))->format('H:i'),
                'timestamp' => $this->start_at->timestamp
            ],
            'end' => [
                'date' => optional($this->localize('end_at', $this->account->user->timezone))->format('Y-m-d'),
                'time' =>  optional($this->localize('end_at', $this->account->user->timezone))->format('H:i'),
                'timestamp' => $this->end_at->timestamp
            ]
        ];
    }

    public function getStartedAttribute(){
        return $this->localize('start_at', $this->account->user->timezone) < $this->localTimeNow() ;
    }

    public function getEndedAttribute(){
        return $this->localize('end_at', $this->account->user->timezone) < $this->localTimeNow() ;
    }

    public function getOngoingAttribute(){
        return ($this->started && !$this->ended);
    }

    public function getStatusTimeAttribute(){
        if(!$this->started)
        {
            return 'Starting '.$this->start_at->diffForHumans();
        }
        if($this->ongoing)
        {
            return 'Started '.$this->start_at->diffForHumans().', Ending '.$this->end_at->diffForHumans();
        }
        if($this->ended){
            return 'Ended '.$this->end_at->diffForHumans();
        }
        return $this->getTimeDiffDuration($this->start_at, $this->end_at);
    }

    public function getPublishedTimeAttribute(){
        return optional($this->published_at)->format('d F, Y');
    }

    public function getSnippetAttribute(){
        $length = self::MIN_DESCRIPTION_CHARACTER;
        $description = \strip_tags($this->description);
        return strlen($description)  > $length ? \substr($description, 0, 200).'..' : $description;
    }

    public function getPaymentAttribute(){
        return [
            'require' => $this->price ? true : false,
            'currency' => optional($this->account->paymentGateway)->currency,
            'gateway' =>  optional($this->account->paymentGateway)->gateway,
            'gateway_active' =>  optional($this->account->paymentGateway)->active,
            'gateway_clear' =>  optional($this->account->paymentGateway)->credentials_complete,
        ];
    }

    public function scopePast($query){
        return $query->whereDate('end_at', '<', now());
    }

    public function scopeOngoing($query){
        return $query->whereDate('end_at', '>=', now());
    }

    public function scopeUpcoming($query){
        return $query->whereDate('start_at', '>', now());
    }
}
