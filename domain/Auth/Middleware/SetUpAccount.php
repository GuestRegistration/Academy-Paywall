<?php

namespace Domain\Auth\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class SetUpAccount
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
            return;
        }

        if((Auth::check() && !Auth::user()->account->profile_complete) && !in_array(Request::route()->getName(), ['account.setup', 'account.setup.store'])){
            return  redirect()->route('account.setup')->with('info', 'Kindly, complete your profile before proceeding'); 
        }
       
        return $next($request);
    }
}
