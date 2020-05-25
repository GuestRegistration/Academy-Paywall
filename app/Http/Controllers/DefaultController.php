<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DefaultController extends Controller
{
    public function __invoke(){
        return Inertia::render('Pages/Sample');
    }
}
