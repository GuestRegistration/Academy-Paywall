<?php

namespace Domain\Auth\Listeners;

use Domain\Auth\Events\Authenticated;

class UpdateUserLastLogin
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
        $event->user->update([
            'last_login_at' => now(),
        ]);
    }
}
