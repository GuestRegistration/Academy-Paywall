<?php

namespace App;

namespace Domain\Course\Models;

use App\Classes\UUID;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
  use UUID;

  protected $fillable = [
      'first_name', 'last_name', 'email', 'phone', 'course_id',
  ];

  public function course(){
      return $this->belongsTo(Course::class);
  }
  
}
