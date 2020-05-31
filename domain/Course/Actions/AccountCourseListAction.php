<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountCourseListAction extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function __invoke(Account $account)
    {
        $courses = $account->courses()->paginate();
        return response($courses);
    }

}
