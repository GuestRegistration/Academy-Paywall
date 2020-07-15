<?php

namespace Domain\Course\Models;

use App\User;
use App\Classes\UUID;
use Domain\Account\Models\Account;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use UUID;

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
        'raw_dates', 'payment', 'course_duration'
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
        return optional($this->start_at)->format('F d, Y h:i a');
    }

    public function getEndDateAttribute(){
        return optional($this->end_at)->format('F d, Y h:i a');
    }

    public function getCourseDurationAttribute(){
        $diff = $this->start_at->diff($this->end_at);
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

    public function getRawDatesAttribute(){
        return [
            'start' => [
                'date' => optional($this->start_at)->format('Y-m-d'),
                'time' =>  optional($this->start_at)->format('h:i'),
            ],
            'end' => [
                'date' => optional($this->end_at)->format('Y-m-d'),
                'time' =>  optional($this->end_at)->format('h:i'),
            ]
        ];
    }

    public function getStartedAttribute(){
        return $this->start_at < now() ;
    }

    public function getEndedAttribute(){
        return $this->end_at < now() ;
    }

    public function getOngoingAttribute(){
        return ($this->started && !$this->ended);
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
            'currency' => $this->account->paymentGateway->currency,
            'gateway' => $this->account->paymentGateway->gateway,
            'gateway_active' => $this->account->paymentGateway->active,
            'gateway_clear' => $this->account->paymentGateway->credentials_complete,
        ];
    }


}
