<?php

namespace Domain\Auth\Actions;

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
        $this->user()->account->update($request->data());
        return redirect()->route('account.show', $this->user()->account->username)->with('success', 'Account updated');
    }

}
