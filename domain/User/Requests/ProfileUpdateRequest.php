<?php

namespace Domain\User\Requests;

use App\Classes\FileUpload;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateRequest extends FormRequest
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
            'first_name' => ['required'],
            'last_name' => ['required'],
            'email' => ['required', 'email', 'string', Rule::unique('profiles')->ignore(optional($this->user()->profile)->id)],
            'phone' => ['required', Rule::unique('profiles')->ignore(optional($this->user()->profile)->id)],
            'username' => ['required', Rule::unique('profiles')->ignore(optional($this->user()->profile)->id)],
        ];
    }

    public function data(){
        return $this->only([
            'first_name', 'last_name', 'email', 'phone', 'username', 'bio', 
        ]) + [
            'avatar' => FileUpload::storeFile($this, 'avatar', 'profile/avatar'),
        ];
    }
}
