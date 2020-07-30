<?php

namespace Domain\Course\Actions;

use Stripe\Charge;
use Stripe\Stripe;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Course\Models\Course;
use App\Http\Controllers\Controller;

class CourseStripeChargeAction extends Controller
{    

    public function __invoke(Request $request, Course $course)
    {        
        $this->validate($request, [
            'token' => ['required'],
            'secret_key' => ['required'],
            'receipt_email' => ['required']
        ]);

        $data = $request->merge([
            'amount' => $course->price * 100,
            'description' => "Course fee for {$course->title}",
            'source' => $request->get('token'),
            'currency' => $course->payment['currency'],
        ])->only([
            'amount', 'currency', 'description', 'source', 'receipt_email'
        ]);
        
        Stripe::setApiKey($request->get('secret_key'));
        $charge = Charge::create($data);

        return response([
            'charge' => $charge
        ]);
    }

}
