<?php
namespace Domain\Subscription;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class SubscriptionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    public function boot()
    {
        $this->mapRoute();
    }

    /**
     * Define the "web" routes for the domain.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapRoute()
    {
        Route::middleware('web')
            // ->prefix(self::PREFIX)
            ->group(dirname(__FILE__). DIRECTORY_SEPARATOR. 'route.php');
    }
}
