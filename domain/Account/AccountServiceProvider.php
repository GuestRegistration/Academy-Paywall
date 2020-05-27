<?php
namespace Domain\Account;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AccountServiceProvider extends ServiceProvider
{
    public const PREFIX = 'account';

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
            ->prefix(self::PREFIX)
            ->group(dirname(__FILE__). DIRECTORY_SEPARATOR. 'route.php');
    }
}
