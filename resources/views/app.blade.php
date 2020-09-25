<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @if (env('APP_ENV') == 'development')
        <meta name="robots" content="noindex">
    @endif
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">

    <link rel="apple-touch-icon" sizes="180x180" ref="/apple-touch-icon.png">
    <link rel ="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" >
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" >
    <link rel ="manifest" href="/site.webmanifest">

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>
    <script src="https://unpkg.com/vue-tag-manager@x.x.x/lib/TagManager.js"></script>

    @routes
</head>
<body>
@inertia
</body>
</html>
