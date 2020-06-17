<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Request;

class RestrictIPsInDev
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $whiteIps = explode('|', env('DEV_IP_WHITE_LIST'));
        if (env('APP_ENV') == 'development' &&  !in_array(Request::ip(), $whiteIps)) {
            return response('Not authorized....');
        }
        return $next($request);
    }
}
