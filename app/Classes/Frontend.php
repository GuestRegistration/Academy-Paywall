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
            'auth' => function () {
                return optional(Request::user())->load('account');
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
