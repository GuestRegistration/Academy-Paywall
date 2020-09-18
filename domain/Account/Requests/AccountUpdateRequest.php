<?php

namespace Domain\Account\Requests;

use App\Classes\FileUpload;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class AccountUpdateRequest extends FormRequest
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
            'name' => ['required'],
            'email' => ['required', 'email', 'string', Rule::unique('accounts')->ignore(optional($this->user()->account)->id)],
            'phone' => ['required', Rule::unique('accounts')->ignore(optional($this->user()->account)->id)],
            'username' => ['required', Rule::unique('accounts')->ignore(optional($this->user()->account)->id)],
            'caption' => [Rule::requiredIf((Bool) $this->show_caption == true ), 'max: 50'],
            'subcaption' => [Rule::requiredIf((Bool) $this->show_caption == true ), 'max: 150'],
            // 'facebook_url' => ['url'],
            // 'instagram_url' => ['url'],
            // 'twitter_url' => ['url'],
            // 'linkedin_url' => ['url'],
            // 'youtube_url' => ['url'],
            // 'website' => ['url'],
        ];
    }

    public function data(){
        return $this->only([
            'name', 'email', 'phone', 'username', 'bio', 'theme_color', 'caption', 'subcaption',
            'facebook_url', 'instagram_url', 'twitter_url', 'linkedin_url', 'youtube_url', 'website', 'google_tag_manager'
        ]) + [
            'show_caption' => (Bool) $this->show_caption,
            'avatar' => FileUpload::storeFile($this, 'avatar', 'account/avatar'),
            'cover_image' => FileUpload::storeFile($this, 'cover_image', 'account/covers'),
            'gtm_events' => collect(json_decode($this->get('gtm_events')))->map(function($event){
                $event->triggers = array_map(function($trigger){
                    return trim($trigger);
                }, explode(',', $event->triggers));
                return $event;
            })
        ];
    }
}
