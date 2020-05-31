<?php

namespace Domain\Course\Models;

use App\Classes\UUID;
use Domain\Account\Models\Account;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use UUID;

    protected $fillable = [
        'account_id', 'title', 'description', 'price', 'cover_image', 'published_at', 'slug'
    ];

    protected $dates = [
        'published_at',
    ];

    protected $appends = [
        'is_published', 'published_time', 'snippet'
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function getCoverImageAttribute($value){
        return $value ?? asset('images/default-course-cover.jpg');
    }

    public function getIsPublishedAttribute(){
        return !($this->published_at == null);
    }

    public function getPublishedTimeAttribute(){
        return optional($this->published_at)->format('d F, Y');
    }

    public function getSnippetAttribute(){
        $length = 200;
        return strlen($this->description)  > $length ? \substr($this->description, 0, 200).'..' : $this->description;
    }
}
