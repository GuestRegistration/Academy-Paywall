<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use Domain\Account\Notifications\UserInvitationToAccount;

class AccountUserInviteAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(Request $request, Account $account)
    {
        $this->validate($request, [
            'emails' => ['array', 'min: 1'],
            'emails.*' =>['email'],
        ]);
        $emailsToInvite = collect($request->get('emails', []))->map(function($email) use($account){
            return [
                'email' => $email !== Auth::user()->email && !$account->users()->where('email', $email)->exists() && !$account->invitations()->where('email', $email)->exists() ? $email : null
            ];
        })
        ->whereNotNull('email');

        if($emailsToInvite->count() > $acount->users_slot) return redirect()->back()->with('error', 'Cannot send invitations');

        $invitations = $account->invitations()->createMany($emailsToInvite);
        
        Notification::send($invitations, new UserInvitationToAccount);
        
        return redirect()->back()->with('status', $invitations->count()." ".Str::plural('invitation', $invitations->count())." sent");
    }

}
