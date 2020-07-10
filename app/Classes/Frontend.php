<?php


namespace App\Classes;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class Frontend
{
    public static function share()
    {
        Inertia::share([
            'config' => [
                'app_name' => config('app.name'),
                'default_theme_color' => config('custom.default_theme_color')
            ],
            'errors' => function () {
                return self::errors();
            },
            
            'alerts' => function () {
                return [
                    'success' => Session::get('success'),
                    'error' => Session::get('error'),
                    'warning' => Session::get('warning'),
                    'info' => Session::get('info'),
                ];
            },

            'status' => function(){
                return Session::get('status');
            },

            'auth' => function () {
                return optional(Request::user())->load(['account', 'profile']);
            },
        ]);
    }

    public static function errors()
    {
        if (!Session::get('errors')) return (object) [];
        $messages = Session::get('errors')->getBag('default')->getMessages();
        $bag = \request()->old('_bag');

        if ($bag) return [
            'bag' => $bag,
            'errors' => $messages,
        ];

        return $messages;
    }

}
