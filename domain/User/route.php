<?php
namespace Domain\User;
use Illuminate\Support\Facades\Route;

Route::prefix('@{profile:username}')->group(function(){
    Route::get('/', ProfileShowAction::class)->name('profile.show');
    Route::get('edit', ProfileEditAction::class)->name('profile.edit');
    Route::post('edit', ProfileUpdateAction::class)->name('profile.update');
});

