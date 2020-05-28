<?php
use Illuminate\Support\Facades\Route;
use Domain\Course\Actions\CourseListAction;
use Domain\Course\Actions\CourseShowAction;
use Domain\Course\Actions\CourseStoreAction;
use Domain\Course\Actions\CourseCreateAction;

Route::get('/list', CourseListAction::class)->name('course.list');
Route::get('/create', CourseCreateAction::class)->name('course.create');
Route::post('/create', CourseStoreAction::class)->name('course.store');
Route::put('/{course}', CourseShowAction::class)->name('course.show');
