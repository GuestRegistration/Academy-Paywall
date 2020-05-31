<?php

namespace Domain\Account\Listeners;

use Domain\Auth\Events\Authenticated;


class CheckAccount
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Authenticated  $event
     * @return void
     */
    public function handle(Authenticated $event)
    {
        $user = $event->user;
        if(!$user->account){
            $user->account()->create([
                'email' =>  $user->email
            ]);
        }
    }
}
