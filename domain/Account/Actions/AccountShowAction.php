<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountShowAction extends Controller
{

    public function __construct()
    {
        // $this->middleware('inertia-conflict');
    }

    public function __invoke(Request $request, Account $account)
    {
        $courses = $account->courses()->with('users.profile');

        $current_courses = $account->courses()->with('users.profile')->ongoing()->latest()->paginate(10);
        $past_courses =  $account->courses()->with('users.profile')->past()->latest()->get();
        $instructors = $account->instructors;

        return Inertia::render('Domain/Account/Pages/AccountShow', compact('account', 'current_courses',  'past_courses', 'instructors'))
                    ->withViewData([
                        'title' => $account->name,
                        'description' => $account->bio,
                        'image' => $account->avatar,
                        'color' => $account->theme_color
                    ]);
    }

}
