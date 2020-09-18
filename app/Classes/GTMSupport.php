<?php
namespace App\Classes;

use Illuminate\Support\Str;

class GTMSupport {

    const NATIVE_EVENTS = [
        'Organization Page Visit',
        'Course Page Visit',
        'Open Enrollment Form',
    ];

    public static function events() {
        return \collect(self::NATIVE_EVENTS)->map(function($event){
            return [
                'name' => $event,
                'slug' => Str::slug($event, '_'),
            ];
        });
    }

}