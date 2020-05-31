<?php
use Illuminate\Support\Facades\Route;
use Domain\Account\Actions\AccountEditAction;
use Domain\Account\Actions\AccountShowAction;
use Domain\Account\Actions\AccountUpdateAction;

Route::get('/', AccountShowAction::class)->name('account.show');
Route::get('/edit', AccountEditAction::class)->name('account.edit');
Route::post('/edit', AccountUpdateAction::class)->name('account.update');
