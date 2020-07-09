<?php

namespace Domain\Account\Requests;

use Illuminate\Validation\Rule;
use App\Classes\PaymentGatewaySupport;
use Illuminate\Foundation\Http\FormRequest;

class AccountPaymentGatewaySaveRequest extends FormRequest
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
        $rules = [
                'currency' => ['required', Rule::in(array_keys(PaymentGatewaySupport::CURRENCIES))],
                'gateway' => $this->currency ? ['required', Rule::in(PaymentGatewaySupport::CURRENCIES[$this->currency])] : [],
                'credentials' => ['required', 'array']
            ];
            foreach($this->credentialKeys() as $key){
                $rules["credentials.{$key}"] = [Rule::requiredIf($this->active)];
            }
        return  $rules;       
    }


    public function data()
    {

        return $this->merge([
            'active' => (Bool) $this->active,
        ])->only([
            'currency', 'gateway', 'active', 'credentials'
        ]);
    }

    protected function credentialKeys(){
        return collect(PaymentGatewaySupport::credentials($this->gateway))->pluck('slug');
    }

}
