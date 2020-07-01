<?php

namespace Domain\Auth\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class SetUpProfile
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)

    {   if(Auth::check() && !Auth::user()){
            Auth::logout($request);
            return \redirect()->route('signin');
        }

        if((Auth::check() && !Auth::user()->profile->profile_complete) && !in_array(Request::route()->getName(), ['profile.edit.alt', 'profile.update.alt', 'signout'])){
            return  redirect()->route('profile.edit.alt', Auth::user()->profile->getKey())->with('info', 'Kindly, complete your profile before proceeding'); 
        }
       
        return $next($request);
    }
}
