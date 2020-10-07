<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountCourseShowAction extends Controller
{

    public function __construct()
    {

    }

    public function __invoke(Account $account, Course $course)
    {
        $course->load('users.profile');

        $course->users->each(function($user) use($account, $course){
            if(!$account->users()->find($user->getKey()) && !$user->is($account->user)){
                $course->users()->sync(array_diff($course->users->pluck('id')->toArray(), [$user->getKey()]));
            }
        });

        return Inertia::render('Domain/Course/Pages/CourseShow', compact('account', 'course'))
                        ->withViewData([
                            'title' => $course->title,
                            'description' => strip_tags($course->description),
                            'image' => $course->cover_image,
                        ]);

    }

}
