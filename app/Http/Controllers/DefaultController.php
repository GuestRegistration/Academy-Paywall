<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DefaultController extends Controller
{
    public function home(){
        return Inertia::render('Sample');
    }
}
