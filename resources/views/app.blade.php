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
        
        <!-- Google Tag Manager -->
        <script src="https://unpkg.com/vue-tag-manager@x.x.x/lib/TagManager.js"></script>
        @if (config('services.analytics.id'))
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id={{ config('services.analytics.id') }}"></script>
        @endif
        
        @routes
        <style>
            body.overflow-hidden{
                overflow-y: hidden !important
            }
            .page-loader-background {
                position: fixed;
                background: #fff;
                bottom: 0;
                right: 0;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            }
            .page-loader-background img {
                margin: auto;
                animation-name: loading;
                animation-timing-function: linear;
                animation-duration: 1s;
                animation-iteration-count: infinite;
            }

            @keyframes loading{
                0%   { opacity: 0.5 }
                50%  { opacity: 1 }
                100% { opacity: 0.5 }
            }
        </style>
    </head>
    <body class="overflow-hidden">
        @inertia
        <div id="ssr">{!! $ssr ?? '' !!}</div>

        <div class="page-loader-background" id="page-loader">
            <img src="{{ asset('/icon_192x192.png') }}" alt="Landshop">
        </div>
        

    <script src="{{ mix('js/app.js') }}" id="app-script" defer></script>
    <script src="{{ mix('js/registerServiceWorker.js') }}"></script>
    <script>
        const get = S => document.querySelector(S);const hideElement = E => E.setAttribute('style', 'display: none');
        const appScript = get('#app-script');
        const loader = get('#page-loader');
        const ssr = get('#ssr');
        appScript.onload = e => {
            hideElement(loader);
            hideElement(ssr);
        };
    </script>
   
    @if (config('services.intercom.app_id'))
        <script>
            const APP_ID = "{{ config('services.intercom.app_id') }}";
        </script>
        @if (Auth::user() && Auth::user()->profile)
            @php
                $hash = hash_hmac(
                    'sha256', // hash function
                    Auth::user()->id, // user's id
                    config('services.intercom.id_verification_secret') // secret key 
                    );
            @endphp
            <script>
                window.intercomSettings = {
                    app_id: APP_ID,
                    user_id: "{{ Auth::user()->id }}", // User ID
                    user_hash: "{{ $hash }}" // HMAC using SHA-256
                    };
            </script>
        @endif
        <script>
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/'+APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
        </script>
        @if (Auth::user() && Auth::user()->profile)
            <script>
                window.Intercom("boot", {
                    app_id: APP_ID,
                    name: "{{ auth()->user()->profile->fullname }}", 
                    email: "{{ auth()->user()->profile->email }}",
                    created_at: "{{ auth()->user()->created_at->timestamp }}"
                });
            </script>
        @else
            <script>
                window.Intercom("boot", {
                    app_id: APP_ID
                });
            </script>
        @endif
    @endif
    </body>
</html>
