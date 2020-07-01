<?php

namespace Domain\User\Actions;

use Inertia\Inertia;
use Domain\User\Models\Profile;
use App\Http\Controllers\Controller;

class ProfileEditAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,profile');
    }


    public function __invoke(Profile $profile)
    {
        return Inertia::render('Domain/User/Pages/ProfileEdit', compact('profile'));
    }

}
