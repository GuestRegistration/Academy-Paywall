<?php

namespace Domain\Account\Actions;

use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Domain\Account\Requests\AccountUpdateRequest;

class AccountUpdateAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function __invoke(AccountUpdateRequest $request, Account $account)
    {
        $account->update($request->data());

        return redirect()->route('account.edit', $account->username)->with('success', 'Account updated');
    }

}
