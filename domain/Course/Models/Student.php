<?php

namespace Domain\Course\Models;

use App\Classes\UUID;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
  use UUID;

  protected $fillable = [
      'first_name', 'last_name', 'email', 'phone', 'course_id', 'payment_ref', 'payment_gateway_id',
      'payment_gateway', 'currency', 'amount'
  ];

  protected $appends = [
    'fullname', 'registered_time', 'registered_time_diff'
  ];

  public function course(){
      return $this->belongsTo(Course::class);
  }
  
  public function getFullnameAttribute(){
    return "$this->first_name $this->last_name";
  }

  public function getRegisteredTimeAttribute(){
    return $this->created_at->format('D d F, Y h:i a');
  }

  public function getRegisteredTimeDiffAttribute(){
    return $this->created_at->diffForHumans();
  }

}
