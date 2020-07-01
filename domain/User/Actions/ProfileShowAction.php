<?php

namespace Domain\User\Actions;

use Inertia\Inertia;
use Domain\User\Models\Profile;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class ProfileShowAction extends Controller
{

    public function __invoke(Profile $profile)
    {
        $courses = $profile->user->courses()->with('account')->paginate();
        $affiliations = \collect([]);
        if($profile->user->account){
            $affiliations->push($profile->user->account);
        }
        $affiliations =  $affiliations->merge($profile->user->accounts);
        return Inertia::render('Domain/User/Pages/ProfileShow', compact('profile', 'courses', 'affiliations'));
    }

}
