<?php

namespace Domain\Course\Models;

use App\User;
use App\Classes\UUID;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use UUID;

    protected $fillable = [
        'title', 'description', 'price', 'cover_image', 'user_id', 'published_at'
    ];

    protected $dates = [
        'published_at',
    ];

    protected $appends = [
        'is_published', 'published_time',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function getCoverImageAttribute($value){
        if(!$value) return asset('storage/course/default.jpg');

        return asset($value);
    }

    public function getIsPublishedAttribute(){
        return !($this->published_at == null);
    }

    public function getPublishedTimeAttribute(){
        return optional($this->published_at)->format('d F, Y');
    }
}
