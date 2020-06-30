<?php

namespace Domain\User\Policies;

use App\User;
use Domain\User\Models\Profile;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProfilePolicy
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

    public function access(User $user, Profile $profile)
    {
        return $user->profile->getKey() === $profile->getKey();
    }

}
