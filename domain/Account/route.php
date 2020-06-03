<?php
use Illuminate\Support\Facades\Route;
use Domain\Account\Actions\AccountEditAction;
use Domain\Account\Actions\AccountShowAction;
use Domain\Account\Actions\AccountUpdateAction;
use Domain\Account\Actions\AccountPaymentAction;
use Domain\Account\Actions\AccountPaymentStoreAction;

Route::get('/', AccountShowAction::class)->name('account.show');
Route::get('/edit', AccountEditAction::class)->name('account.edit');
Route::get('/payment', AccountPaymentAction::class)->name('account.payment.gateway');
Route::post('/edit', AccountUpdateAction::class)->name('account.update');
Route::post('/payment', AccountPaymentStoreAction::class)->name('account.payment.gateway.store');
