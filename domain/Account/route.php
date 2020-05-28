<?php
use Illuminate\Support\Facades\Route;
use Domain\Account\Actions\AccountShowAction;
use Domain\Account\Actions\AccountUpdateAction;
use Domain\Account\Actions\AccountCoursesAction;


Route::get('/', AccountShowAction::class)->name('account.show');
Route::get('/courses', AccountCoursesAction::class)->name('account.courses');
Route::put('/', AccountUpdateAction::class)->name('account.update');
