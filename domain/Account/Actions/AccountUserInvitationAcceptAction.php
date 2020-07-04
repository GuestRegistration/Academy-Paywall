<?php

namespace Domain\Account\Actions;

use App\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Domain\Account\Models\Invitation;
use Domain\Auth\Events\Authenticated;

class AccountUserInvitationAcceptAction extends Controller
{

    public function __construct()
    {

    }

    public function __invoke(Request $request, Account $account, Invitation $invitation)
    {
        if (!$request->hasValidSignature()) {
            abort(401);
        }
        
        if(Auth::check()){
            $user = Auth::user();
        }else{
            $user = User::firstOrCreate([
                'email' => $invitation->email
            ]);
            Auth::guard()->login($user);
            event(new Authenticated($user));
        }

        if($account->users()->find($user->getKey()) || $user->is($account->user)) return redirect()->route('account.show', ['account' => $account->username])->with('info', "You are already affiliated to {$account->name}");
        $account->users()->attach($user->getKey());
        $invitation->delete();

        $user->load('profile');
        return  $user->profile->profile_complete ? 
                redirect()->route('account.show', ['account' => $account->username])->with('success', "You are now affiliated to {$account->name}.") : 
                redirect()->route('profile.edit.alt', $user->profile->getKey())->with('success', "You are now affiliated to {$account->name}. Kindly complete your profile");
    }

}
