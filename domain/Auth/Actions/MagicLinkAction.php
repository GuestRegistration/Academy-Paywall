<?php

namespace Domain\Auth\Actions;

use App\User;
use App\Http\Controllers\Controller;
use Domain\Auth\Requests\SignInRequest;
use Domain\Auth\Notifications\NewSignin;
use Illuminate\Support\Facades\Notification;

class MagicLinkAction extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * @param SignInRequest $request
     */
    public function __invoke(SignInRequest $request, User $model)
    {
        $email = $request->get('email');
        $token = sha1($email.time());

        $user = $model::where('email', $email)->first();
        $user = $user ? $user : new User;
        $user->fill([
            'email' => $email,
            'signin_token' => $token,
            'signin_token_expires_at' => now()->addMinutes(2)
        ])->save();

        Notification::send($user, new NewSignin($user));

        return redirect()->back()->with('success', "Magic link has been sent to $email . Follow the link to sign in");
    }

}
