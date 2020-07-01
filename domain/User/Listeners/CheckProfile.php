<?php

namespace Domain\User\Listeners;

use Domain\Auth\Events\Authenticated;


class CheckProfile
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
        if(!$user->profile){
            $profile = $user->profile()->create([
                'email' =>  $user->email
            ]);
        }
    }
}
