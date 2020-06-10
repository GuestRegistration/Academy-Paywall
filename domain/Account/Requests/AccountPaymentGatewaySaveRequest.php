<?php

namespace Domain\Account\Requests;

use App\Classes\FileUpload;
use Illuminate\Validation\Rule;
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
        return [];
    }

    public function data(){
        return $this->merge([
            'active' => (Bool) $this->active,
            'account_id' => $this->route('account')->getKey()
        ])->only([
            'account_id','gateway', 'active', 'credentials'
        ]);
    }
}
