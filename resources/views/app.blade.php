<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @php
        $defaultKeywords = ['academics', 'course', 'online classes', 'learning'];
    @endphp
    <head>
        <title>{{ $title ?? '' }} - Acada</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @if (env('APP_ENV') == 'development' || env('APP_ENV') == 'local')
            <meta name="robots" content="noindex">
        @elseif(env('APP_ENV') == 'production')
            <meta name="robots" content="index, follow" />
        @endif
        <meta name="description" content="{{ $description ?? '' }}">
        <meta name="keywords" content="{{ isset($keywords) ? join(', ', array_merge($keywords, $defaultKeywords)) : join(', ', $defaultKeywords) }}">
        <meta name="environment" content="production">
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{ url()->current() }}" />
        <meta property="og:title" content="{{ $title ?? '' }}" />
        <meta property="og:description" content="{{ $description ?? '' }}" />
        <meta property="og:site_name" content="Acada" />
        {{-- <meta name="twitter:site" content=""> --}}
        {{-- <meta name="twitter:creator" content=""> --}}
        <meta name="twitter:title" content="{{ $title ?? '' }}">
        <meta name="twitter:description" content="{{ $description ?? '' }}">
        {{-- <meta name="twitter:card" content=""> --}}
        {{-- <meta name="twitter:widgets:new-embed-design" content="on"> --}}
        <meta property="og:image" content="{{ $image ?? asset('images/acada-icon.jpg') }}" />
        <meta name="twitter:image:src" content="{{ $image ?? asset('images/acada-icon.jpg') }}">
        <meta name="apple-mobile-web-app-title"content="{{ $title ?? '' }}">
        <meta name="application-name" content="Acada">
        <meta name="theme-color" content="{{ $color ?? '#002B36' }}" />
        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <!-- Styles -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
        <link rel="apple-touch-icon" sizes="180x180" ref="/apple-touch-icon.png">
        <link rel ="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" >
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" >
        <link rel ="manifest" href="/site.webmanifest">
        <script src="{{ mix('js/app.js') }}" id="app-script" defer></script>
        <!-- Google Tag Manager -->
        <script src="https://unpkg.com/vue-tag-manager@x.x.x/lib/TagManager.js"></script>
        @if (config('services.analytics.id'))
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id={{ config('services.analytics.id') }}"></script>
        @endif
        
        @routes
        <style>
            #preloader-container
            {
                position: fixed;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                height: 100vh;
                background-color: #C51E5B;
                z-index: 10000;
            }
            #preloader-content
            {
                width: 90%;
                margin: auto;
                margin-top: 40vh;
                text-align: center;
            }
            @media (min-width: 768px){
                #preloader-content
                {
                    width: 40%
                }
            }
        </style>
    </head>
    <body>
        @inertia
        <div id="ssr">{!! $ssr ?? '' !!}</div>
        <div id="preloader">
            <div id="preloader-container">
                <div id="preloader-content">
                    <img src="{{ asset('images/acada-text-logo-white.png') }}" alt="Acade App" width="200px">
                </div>
            </div>
        </div>
        <script src="{{ asset('prerender/js/prerender.js') }}"></script>
    </body>
</html>
