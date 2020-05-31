<?php

namespace App\Providers;

use Domain\Auth\Events\Authenticated;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Domain\Auth\Listeners\UpdateUserLastLogin;
use Domain\Account\Listeners\CheckAccount;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        Authenticated::class => [
            UpdateUserLastLogin::class,
            CheckAccount::class,
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
