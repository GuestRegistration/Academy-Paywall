<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AccountSetupAction extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function __invoke()
    {
        if($this->user()->account){
            return redirect()->route('account.show', $this->user()->account->username);
        }
        
        $new_account = true;
        return Inertia::render('Domain/Account/Pages/AccountEdit', compact('new_account'));
    }
}
