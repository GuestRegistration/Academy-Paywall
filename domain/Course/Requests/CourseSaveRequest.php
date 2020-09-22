<?php

namespace Domain\Course\Requests;

use Carbon\Carbon;
use App\Classes\FileUpload;
use Illuminate\Support\Str;
use App\Traits\HasLocalDates;
use Illuminate\Validation\Rule;
use Domain\Course\Models\Course;
use Illuminate\Foundation\Http\FormRequest;


class CourseSaveRequest extends FormRequest
{
    use HasLocalDates;
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
            'price' => [Rule::requiredIf($this->get('requires_payment') == "true")],
            'start_date' => ['required', 'date_format:Y-m-d H:i'],
            'end_date' => ['required', 'date_format:Y-m-d H:i', 'after:start_date'],
            'cover_image' => ['max:2048'],
            'course_type' => ['required'],
            'preview_video' => ['max:10048'],
            'instructions' => [Rule::requiredIf($this->get('send_instructions') == "true")],
        ];
    }

    public function storeData()
    {        
        $date = new Carbon($this->start_date);
        dd($date->timezone(auth()->user()->timezone)->timezone('UTC')->format('Y-m-d H:i'));

        return $this->merge([
            'account_id' => $this->user()->account->id,
            'start_at' => $this->date($this->start_date),
            'end_at' => $this->date($this->end_date),
            'send_instructions' => $this->get('send_instructions') == "true" ? 1 : 0,
        ])->only('title', 'description', 'price', 'user_id', 'start_at', 'end_at', 'course_type', 'send_instructions', 'instructions') + [
            'cover_image' => FileUpload::storeFile($this, 'cover_image', 'course/cover'),
            'preview_video' => FileUpload::storeFile($this, 'preview_video', 'course/video'),
            'slug' => Str::slug(str_replace([' ',',','_','&'],' ',$this->title.' '.(Course::count()+1))),
        ];
    }

    public function updateData(){
        // dd($this->date($this->start_date));
        return $this->merge([
            'account_id' => $this->user()->account->id,
            'start_at' => $this->date($this->start_date),
            'end_at' => $this->date($this->end_date),
            'send_instructions' => $this->get('send_instructions') == "true" ? 1 : 0,
            'price' => $this->get('requires_payment') == "true" ? $this->price : null,
        ])->only('title', 'description', 'price', 'user_id', 'start_at', 'end_at', 'course_type', 'send_instructions', 'instructions') + [
            'cover_image' => FileUpload::storeFile($this, 'cover_image', 'course/cover'),
            'preview_video' => FileUpload::storeFile($this, 'preview_video', 'course/video'),
        ];
    }

    private function date($value){
        return Carbon::parse($value, auth()->user()->timezone)
                    ->setTimezone('UTC')->format('Y-m-d H:i');
    }
}
