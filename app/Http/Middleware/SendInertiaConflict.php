<?php

namespace App\Http\Middleware;

use Closure;

class SendInertiaConflict
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
        if($request->headers->has('x-inertia')){
            return response('', 409)
                    ->header('X-Inertia-Location', url()->current());
        }

        return $next($request);
    }
}
