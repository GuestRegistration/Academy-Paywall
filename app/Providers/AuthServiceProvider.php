<?php

namespace App\Providers;

use Domain\User\Models\Profile;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use Illuminate\Support\Facades\Gate;
use Domain\User\Policies\ProfilePolicy;
use Domain\Course\Policies\CoursePolicy;
use Domain\Account\Policies\AccountPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Course::class => CoursePolicy::class,
        Account::class => AccountPolicy::class,
        Profile::class => ProfilePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
@return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
