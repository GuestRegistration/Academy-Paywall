<?php


namespace App\Classes;

use Inertia\Inertia;
use App\Classes\GTMSupport;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;

class Frontend
{
    public static function share()
    {
        Inertia::share([
            'config' => [
                'app_name' => config('app.name'),
                'default_theme_color' => config('custom.default_theme_color'),
                'analytics' => config('services.analytics.id'),
                'env' => config('app.env'),
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

            'events' => function () {
                return GTMSupport::events();
            },

            'gtm' => function() {
                return [
                    'id' => config('services.gtm.id'),
                    'triggers' =>  config('services.gtm.triggers')
                ];
            }

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
