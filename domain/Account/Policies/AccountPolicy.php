<?php

namespace Domain\Account\Policies;

use App\User;
use Domain\Account\Models\Account;
use Illuminate\Auth\Access\HandlesAuthorization;

class AccountPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function access(User $user, Account $account)
    {
        return $user->account->getKey() === $account->getKey();
    }

}
