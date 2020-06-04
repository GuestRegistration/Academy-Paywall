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
            return Auth::user()->account->profile_complete ? 
                    redirect()->route('account.course.list', Auth::user()->account->username ) :
                    redirect()->route('account.setup');
        }

        // return Inertia::render('Pages/Home');
    }
}
