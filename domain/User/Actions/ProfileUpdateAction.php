<?php

namespace Domain\User\Actions;

use Inertia\Inertia;
use Domain\User\Models\Profile;
use App\Http\Controllers\Controller;
use Domain\User\Requests\ProfileUpdateRequest;

class ProfileUpdateAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,profile');
    }


    public function __invoke(ProfileUpdateRequest $request, Profile $profile)
    {
        $profile->update($request->data());
        $profile->user->update($request->only('email'));

        return redirect()->route('profile.edit', $profile->username)->with('success', 'Profile updated');
    }

}
