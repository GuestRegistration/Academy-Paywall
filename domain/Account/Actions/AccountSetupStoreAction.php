<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Domain\Account\Requests\AccountUpdateRequest;

class AccountSetupStoreAction extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function __invoke(AccountUpdateRequest $request)
    {
        if($this->user()->account){
            $this->user()->account->update($request->data());
        }else{
            $this->user()->account()->create($request->data());
        }

        $this->user()->load('account');
        
        return redirect()->route('account.show', $this->user()->account->username)->with('success', 'Account updated');
    }

}
