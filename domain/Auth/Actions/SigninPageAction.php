<?php

namespace Domain\Auth\Actions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class SigninPageAction extends Controller
{
    public function __construct(){
        $this->middleware('guest');
    }

    public function __invoke()
    {
        return Inertia::render('Domain/Auth/SignIn');
    }
}
