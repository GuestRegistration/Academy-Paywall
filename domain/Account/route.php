<?php
use Illuminate\Support\Facades\Route;
use Domain\Account\Actions\AccountShowAction;
use Domain\Account\Actions\AccountUpdateAction;


Route::get('/', AccountShowAction::class)->name('account.show');
Route::put('/', AccountUpdateAction::class)->name('account.update');
