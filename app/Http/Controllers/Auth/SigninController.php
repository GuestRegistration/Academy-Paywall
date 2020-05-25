<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignInRequest;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class SigninController extends Controller
{
    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * @param SignInRequest $request
     */
    public function __invoke(SignInRequest $request)
    {
        
    }

    /**
     * @param Request $request
     * @param User $user
     */
    protected function authenticated(Request $request, $user)
    {
        // $user->last_login_at = now();
        // $user->save();
    }

}
