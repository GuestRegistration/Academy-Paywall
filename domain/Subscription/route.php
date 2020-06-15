<?php
use Illuminate\Support\Facades\Route;
use Domain\Subscription\Actions\PAYGPayment;
use Domain\Subscription\Actions\SubscriptionAction;
use Domain\Subscription\Actions\AccountSubscriptionPageAction;

Route::prefix('@{account:username}')->group(function(){
    Route::get('/subscription', AccountSubscriptionPageAction::class)->name('account.subscription.show');
    Route::post('/subscription', SubscriptionAction::class)->name('subscription.subscribe');
    Route::post('/payg', PAYGPayment::class)->name('subscription.payg');
});
