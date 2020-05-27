<?php

namespace Domain\Auth\Actions;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SignoutAction extends Controller
{
    use AuthenticatesUsers;

    public function __construct(){
        $this->middleware('auth');
    }

    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request)
    {
        $user = $request->user();
        $user->update([
            'signin_token' => null,
            'signin_token_expires_at' => null,
        ]);
        
        return $this->logout($request);
    }
}
