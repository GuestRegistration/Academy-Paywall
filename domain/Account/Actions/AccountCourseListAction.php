<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountCourseListAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }

    public function __invoke(Request $request, Account $account)
    {
        $filter = $request->get('filter', 'ongoing');
        switch($filter){
            case 'past':
                $courses = $account->courses()->past()->latest()->paginate()->appends($request->query());
            break;
            case 'ongoing':
                $courses = $account->courses()->ongoing()->latest()->paginate()->appends($request->query());
            break;
            case 'upcoming':
                $courses = $account->courses()->upcoming()->latest()->paginate()->appends($request->query());
            break;
        }

        return Inertia::render('Domain/Course/Pages/CourseList', compact('account', 'courses', 'filter'));
    }                                                                                                            

}
