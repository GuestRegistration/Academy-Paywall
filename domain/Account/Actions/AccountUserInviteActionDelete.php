<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountUserInviteActionDelete extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(Request $request, Account $account)
    {
        $this->validate($request, [
            'invitations' => ['array', 'min: 1'],
            'invitations.*' =>['required', 'exists:invitations,id'],
        ]);

        $invitations = $account->invitations()->whereIn('id', $request->get('invitations'))->get();
        
        $invitations->each(function($invitation){
            $invitation->delete();
        });
        
        return redirect()->back()->with('status', $invitations->count()." ".Str::plural('invitation', $invitations->count())." deleted");
    }

}
