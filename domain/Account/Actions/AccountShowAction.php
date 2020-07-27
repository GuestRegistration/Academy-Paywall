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

    }

    public function __invoke(Request $request, Account $account)
    {
        $status = $request->query('course', 'ongoing');
        $courses = $account->courses()->with('users.profile');
        switch($status){
            case 'past':
                $courses = $courses->whereDate('end_at', '<', now());
            break;
            case 'upcoming':
                $courses = $courses->whereDate('start_at', '>', now());
            break;
            default: 
            $courses = $courses->whereDate('start_at', '<', now())->whereDate('end_at', '>', now());
        break;
        }

        $courses = $courses->latest()->paginate();
        $instructors = $account->users()->with('profile')->get();

        return Inertia::render('Domain/Account/Pages/AccountShow', compact('account', 'courses', 'status', 'instructors'));
    }

}
