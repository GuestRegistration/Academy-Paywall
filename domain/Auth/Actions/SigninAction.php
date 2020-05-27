<?php

namespace Domain\Auth\Actions;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Domain\Auth\Requests\SignInRequest;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class SigninAction extends Controller
{
    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * @param SignInRequest $request
     */
    public function __invoke(Request $request, $token)
    {
        if (!$request->hasValidSignature()) {
           return redirect()->route('signin')->with('error', 'That signin link is no more valid');
        }
        $user = User::where('signin_token', $token)->first();
        if(!$user) return redirect()->route('signin')->with('error', 'That signin link is not valid');

        if($user->signin_token_expires_at->getTimestamp() < now()->getTimestamp()) redirect()->route('signin')->with('error', 'That signin link has expired');

        Auth::login($user, true);

        return redirect()->route('home');
    }

    /**
     * @param Request $request
     * @param User $user
     */
    protected function authenticated(Request $request, $user)
    {
        $user->last_login_at = now();
        $user->save();
    }

}
