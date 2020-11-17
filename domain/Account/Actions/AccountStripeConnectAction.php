<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;

class AccountStripeConnectAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:access,account');
    }


    public function __invoke(Request $request, Account $account)
    {
        $clientId = config('services.stripe.client_id');
        $url = "https://connect.stripe.com/oauth/authorize?response_type=code&client_id={$clientId}&scope=read_write&redirect_uri=".route('account.stripe.connect.callback');
        
        Cache::add($account->getKey().'-stripe-country', $request->get('country'));

        return Redirect::away($url);
    }

}
