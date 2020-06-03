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

  public function course(){
      return $this->belongsTo(Course::class);
  }
  
  public function paymentGateway(){
    return $this->belongsTo(PaymentGateway::class);
  }
}
