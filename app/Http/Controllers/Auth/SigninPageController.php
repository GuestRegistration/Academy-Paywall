<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class SigninPageController extends Controller
{

    public function __invoke()
    {
        return Inertia::render('Domain/Auth/SignIn');
    }
}
