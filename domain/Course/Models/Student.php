<?php

namespace App;

namespace Domain\Course\Models;

use App\Classes\UUID;
use Illuminate\Database\Eloquent\Model;
use Domain\Account\Models\PaymentGateway;

class Student extends Model
{
  use UUID;

  protected $fillable = [
      'first_name', 'last_name', 'email', 'phone', 'course_id', 'payment_ref', 'payment_gateway_id'
  ];

  protected $appends = [
    'fullname', 'registered_time', 'registered_time_diff'
  ];

  public function course(){
      return $this->belongsTo(Course::class);
  }
  
  public function paymentGateway(){
    return $this->belongsTo(PaymentGateway::class);
  }

  public function getFullnameAttribute(){
    return "$this->first_name $this->last_name";
  }

  public function getRegisteredTimeAttribute(){
    return $this->created_at->format('D d F, Y h:m a');
  }

  public function getRegisteredTimeDiffAttribute(){
    return $this->created_at->diffForHumans();
  }

}
