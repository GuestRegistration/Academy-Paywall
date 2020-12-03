<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountCourseEnrollAction extends Controller
{

    public function __construct()
    {

    }

    public function __invoke(Account $account, Course $course)
    {
       $course->load('users.profile');
       $payment_gateway =  $account->paymentGateway;
       if(optional($payment_gateway)->gateway == 'stripe'){
        $payment_gateway->publishable_key = config('services.stripe.publishable_key');
       }

        return Inertia::render('Domain/Course/Pages/CourseEnroll', compact('account', 'course', 'payment_gateway'))
                        ->withViewData([
                            'title' => $course->title,
                            'description' => strip_tags($course->description),
                            'image' => $course->cover_image,
                        ]);
    }

}
