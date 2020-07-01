<?php
namespace Domain\User;
use Illuminate\Support\Facades\Route;
use Domain\User\Actions\ProfileEditAction;
use Domain\User\Actions\ProfileShowAction;
use Domain\User\Actions\ProfileUpdateAction;

Route::prefix('@{profile:username}')->group(function(){
    Route::get('/', ProfileShowAction::class)->name('profile.show');
    Route::get('edit', ProfileEditAction::class)->name('profile.edit');
});
Route::get('{profile}/edit', ProfileEditAction::class)->name('profile.edit.alt');
Route::post('{profile}/edit', ProfileUpdateAction::class)->name('profile.update.alt');


