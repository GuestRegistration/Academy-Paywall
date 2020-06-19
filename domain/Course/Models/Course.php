<?php

namespace Domain\Course\Models;

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
        'raw_dates',
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function students(){
        return $this->hasMany(Student::class);
    }

    public function getCoverImageAttribute($value){
        return $value ?? asset('images/default-course-cover.jpg');
    }

    public function getIsPublishedAttribute(){
        return !($this->published_at == null);
    }

    public function getStartDateAttribute(){
        return optional($this->start_at)->format('F d, Y');
    }

    public function getRawDatesAttribute(){
        return [
            'start' =>  optional($this->start_at)->format('Y-m-d'),
            'end' =>  optional($this->end_at)->format('Y-m-d'),
        ];
    }

    public function getEndDateAttribute(){
        return optional($this->end_at)->format('F d, Y');
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
        return strlen($this->description)  > $length ? \substr($this->description, 0, 200).'..' : $this->description;
    }
}
