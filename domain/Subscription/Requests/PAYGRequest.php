<?php

namespace Domain\Subscription\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Domain\Subscription\Models\SubscriptionPlan;

class PAYGRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'token' => ['required'],
        ];
    }

    public function data(){
        return [
            'amount' => SubscriptionPlan::PLAN_PAYG['amount'] * 100,
            'currency' => SubscriptionPlan::PLAN_PAYG['currency'],
            'description' => "Payment for adding a new course by ".$this->route('account')->name." ".now()->format('d/m/Y h:i:s a'),
            'source' => $this->token,
            'receipt_email' => $this->route('account')->email,
        ];
    }
}
