<?php

namespace Domain\Subscription\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Domain\Subscription\Models\SubscriptionPlan;

class SubscriptionRequest extends FormRequest
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
            'plan' => ['required', 'exists:subscription_plans,id'],
        ];
    }

    public function data(){
        $plan = SubscriptionPlan::find($this->plan);

        return [
            'amount' => $plan->amount * 100,
            'currency' => $plan->currency,
            'description' => "Payment for AcadaApp $plan->name subscription",
            'source' => $this->token,
            'receipt_email' => $this->route('account')->email,
        ];
    }
}
