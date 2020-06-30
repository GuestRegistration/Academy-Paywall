<?php
namespace Domain\User\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'user_id', 'first_name', 'last_name', 'username', 'email', 'phone', 'bio', 'avatar'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
