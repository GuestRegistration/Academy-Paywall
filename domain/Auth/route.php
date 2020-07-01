<?php
use Domain\Auth\Actions\SigninAction;
use Illuminate\Support\Facades\Route;
use Domain\Auth\Actions\SignoutAction;
use Domain\Auth\Actions\MagicLinkAction;
use Domain\Auth\Actions\SigninPageAction;


Route::get('/signin', SigninPageAction::class)->name('signin');
Route::get('/signin/{token}', SigninAction::class)->name('magic.signin');
Route::post('/signin', MagicLinkAction::class)->name('signin.magic.link');
Route::post('/signout', SignoutAction::class)->name('signout');

