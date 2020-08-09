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

        $accountUsers = $account->users->pluck('id')->toArray();

        $account->users()->sync(array_diff($accountUsers, $request->get('users')));

        // Detach from all courses in the the account
        collect($request->get('users'))->each(function($user)use($account){
            $affiliatedCourses = $account->courses->filter(function($course) use($user){
                return $course->users()->find($user);
            })->values()
            ->each(function($course) use($user){
                $course->users()->sync(array_diff($course->users->pluck('id')->toArray(), [$user]));
            });
        });

        
        return redirect()->back()->with('status', count($request->get('users'))." Instructor removed");
    }

}
