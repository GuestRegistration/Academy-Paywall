<?php

namespace Domain\Course\Requests;

use App\Classes\FileUpload;
use Illuminate\Support\Str;
use Domain\Course\Models\Course;
use Illuminate\Foundation\Http\FormRequest;

class CourseSaveRequest extends FormRequest
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
            'title' => ['required'],
            'description'=> ['required'],
            'price' => ['required'],
            'cover_image' => ['max:2048'],
        ];
    }

    public function data()
    {
        return $this->merge([
            'account_id' => $this->user()->account->id,
        ])->only('title', 'description', 'price', 'user_id') + [
            'cover_image' => FileUpload::storeFile($this, 'cover_image', 'course'),
            'slug' => Str::slug(str_replace([' ',',','_','&'],' ',$this->title.' '.(Course::count()+1)))
        ];
    }
}
