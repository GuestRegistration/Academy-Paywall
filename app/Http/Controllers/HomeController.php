<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('inertia-conflict');
    }
    
    public function __invoke(){
        return Inertia::render('Pages/Home');
    }
}
