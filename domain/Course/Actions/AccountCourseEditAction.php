<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use App\Classes\PaymentGatewaySupport;

class AccountCourseEditAction extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,course');
    }


    public function __invoke(Account $account, Course $course)
    {
        $instructors = $account->instructors;
        $course->load(['users']);

        $payment_gateway = $account->paymentGateway ? $account->paymentGateway->only(['active', 'gateway', 'currency']) : null;
        $payment_gateway = $payment_gateway && isset(PaymentGatewaySupport::GATEWAYS[$payment_gateway['gateway']]) ? $payment_gateway : null;
        
        $currencies = $account->paymentGateway ?  $account->paymentGateway->currencies : [];

        return Inertia::render('Domain/Course/Pages/CourseEdit', compact('account', 'course', 'instructors', 'payment_gateway', 'currencies'));
    }

}
