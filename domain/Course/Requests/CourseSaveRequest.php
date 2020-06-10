<?php

namespace Domain\Course\Requests;

use App\Classes\FileUpload;
use Illuminate\Support\Str;
use Domain\Course\Models\Course;
use Illuminate\Support\Facades\Route;
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
            'description'=> ['required', 'min:'.Course::MIN_DESCRIPTION_CHARACTER],
            'price' => ['required'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date', 'after:start_date'],
            'cover_image' => ['max:2048'],
            'course_type' => ['required'],
            'preview_video' => ['max:10048'],
        ];
    }

    public function storeData()
    {
        return $this->merge([
            'account_id' => $this->user()->account->id,
            'start_at' => $this->start_date,
            'end_at' => $this->end_date,
            'send_instructions' => $this->get('send_instructions') == "true" ? 1 : 0,
        ])->only('title', 'description', 'price', 'user_id', 'start_at', 'end_at', 'course_type', 'send_instructions', 'instructions') + [
            'cover_image' => FileUpload::storeFile($this, 'cover_image', 'course/cover'),
            'preview_video' => FileUpload::storeFile($this, 'preview_video', 'course/video'),
            'slug' => Str::slug(str_replace([' ',',','_','&'],' ',$this->title.' '.(Course::count()+1))),
        ];
    }

    public function updateData(){
        return $this->merge([
            'account_id' => $this->user()->account->id,
            'start_at' => $this->start_date,
            'end_at' => $this->end_date,
            'send_instructions' => $this->get('send_instructions') == "true" ? 1 : 0,
        ])->only('title', 'description', 'price', 'user_id', 'start_at', 'end_at', 'course_type', 'send_instructions', 'instructions') + [
            'cover_image' => FileUpload::storeFile($this, 'cover_image', 'course/cover'),
            'preview_video' => FileUpload::storeFile($this, 'preview_video', 'course/video'),
        ];
    }
}
