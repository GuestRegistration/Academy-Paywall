<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LogUserOutIfNoTimezoneSetYet
{
    use AuthenticatesUsers;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = Auth::user();
        if($user && !$user->timezone){
            $user->update([
                'signin_token' => null,
                'signin_token_expires_at' => null,
            ]);
            return $this->logout($request);
        }
        
        return $next($request);
    }
}
