<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Midtrans\Config;
use Midtrans\CoreApi;
use Illuminate\Http\Request;
use Domain\Course\Models\Course;
use App\Http\Controllers\Controller;

class CourseMidtransChargeAction extends Controller
{    

    public function __invoke(Request $request, Course $course)
    {        
        $this->validate($request, [
            'token' => ['required'],
            'server_key' => ['required'],
            'first_name' => ['required'],
            'last_name' => ['required'],
            'phone' => ['required'],
            'email' => ['required'],
        ]);

        $params = [
            'transaction_details' => [
                'order_id' => uniqid('mid-')."-".time(),
                'gross_amount' => $course->price,
            ],
            'payment_type' => 'credit_card',
            'credit_card'  => [
                'token_id'      => $request->get('token'),
                'authentication'=> true,
            ],
            'customer_details' => $request->only(['first_name', 'last_name', 'phone', 'email']),
        ];

        Config::$serverKey = $request->get('server_key');
        $response = CoreApi::charge($params);
        
        return response([
            'charge' => $response
        ]);
    }

}
