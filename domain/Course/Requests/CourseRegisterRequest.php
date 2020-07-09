<?php

namespace Domain\Course\Requests;

use Illuminate\Validation\Rule;
use Domain\Course\Models\Course;
use Illuminate\Foundation\Http\FormRequest;

class CourseRegisterRequest extends FormRequest
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
        $course = $this->route('course');
        return [
            'first_name' => ['required'],
            'last_name' => ['required'],
            'email' => ['required', 'email'],
            'phone' => ['required'],
            'payment_ref' => [Rule::requiredIf($this->for_real && $course->payment['require'])],
            'currency' => [Rule::requiredIf($this->for_real && $course->payment['require'])],
            'amount' => [Rule::requiredIf($this->for_real && $course->payment['require'])],
        ];
    }

    public function data()
    {
        return $this->only('first_name', 'last_name', 'email', 'phone', 'payment_gateway', 'payment_ref', 'currency', 'amount');
    }
}
