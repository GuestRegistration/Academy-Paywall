<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function __invoke(){
        if(!Auth::check()){
            return \redirect()->route('signin');
        }else{
            return redirect()->route('profile.show', Auth::user()->profile->username );
        }

        // return Inertia::render('Pages/Home');
    }
}
