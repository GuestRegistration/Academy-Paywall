<?php
use Domain\Auth\Actions\SigninAction;
use Illuminate\Support\Facades\Route;
use Domain\Auth\Actions\SignoutAction;
use Domain\Auth\Actions\MagicLinkAction;
use Domain\Auth\Actions\SigninPageAction;
use Domain\Auth\Actions\AccountSetupAction;
use Domain\Auth\Actions\AccountSetupStoreAction;


Route::get('/signin', SigninPageAction::class)->name('signin');
Route::get('/signin/{token}', SigninAction::class)->name('magic.signin');
Route::get('/account', AccountSetupAction::class)->name('account.setup');
Route::post('/signin', MagicLinkAction::class)->name('signin.magic.link');
Route::post('/account', AccountSetupStoreAction::class)->name('account.setup.store');
Route::post('/signout', SignoutAction::class)->name('signout');

