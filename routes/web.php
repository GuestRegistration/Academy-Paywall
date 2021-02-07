<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StripeWebhook;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', HomeController::class)->name('home');
Route::post('payment', PaymentController::class);
Route::get('/migrate', 'App\Http\Controllers\SystemController@migrate');
Route::get('/lstorage', 'App\Http\Controllers\SystemController@linkStorage');

Route::post('webhook/stripe', StripeWebhook::class)->name('stripe.webhook');
