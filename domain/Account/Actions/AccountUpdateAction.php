<?php

namespace Domain\Account\Actions;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Domain\Account\Requests\AccountUpdateRequest;

class AccountUpdateAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function __invoke(AccountUpdateRequest $request)
    {
        $account = Auth::user();
        $account->update($request->only([
            'first_name', 'last_name', 'email', 'phone'
        ]));

        return redirect()->back()->with('success', 'Account updated');
    }

}
