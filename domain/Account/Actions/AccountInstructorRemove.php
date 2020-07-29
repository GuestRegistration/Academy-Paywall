<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountInstructorRemove extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(Request $request, Account $account)
    {
        $this->validate($request, [
            'users' => ['array', 'min: 1'],
        ]);

        $users = \collect($account->users)->map(function($user){
            return $user->getKey();
        })->toArray();

        $account->users()->sync(array_diff($users, $request->get('users')));
        
        return redirect()->back()->with('status', count($request->get('users'))." Instructor removed");
    }

}
