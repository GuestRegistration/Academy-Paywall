<?php

namespace App\Providers;

use Domain\Course\Events\Enrolled;
use Domain\Auth\Events\Authenticated;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Domain\Course\Events\CourseCreated;
use Domain\User\Listeners\CheckProfile;
use Domain\Course\Listeners\SendInstructions;
use Domain\Auth\Listeners\UpdateUserLastLogin;
use Domain\Course\Listeners\SendInstructorsNotification;
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
            CheckProfile::class,
        ],
        CourseCreated::class => [
            SendInstructorsNotification::class
        ],
        Enrolled::class => [
            SendInstructions::class
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
