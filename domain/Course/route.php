<?php
use Illuminate\Support\Facades\Route;
use Domain\Course\Actions\CourseListAction;

use Domain\Course\Actions\AccountCourseListAction;
use Domain\Course\Actions\AccountCourseShowAction;
use Domain\Course\Actions\AccountCourseStoreAction;
use Domain\Course\Actions\AccountCourseCreateAction;

Route::get('/courses', CourseListAction::class)->name('course.list');

Route::prefix('@{account:username}')->group(function(){
    Route::get('/course/create', AccountCourseCreateAction::class)->name('account.course.create');
    Route::get('/courses', AccountCourseListAction::class)->name('account.course.list');
    Route::get('/{course:slug}', AccountCourseShowAction::class)->name('account.course.show');
    Route::post('/course/create', AccountCourseStoreAction::class)->name('account.course.store');
});