<?php
use Illuminate\Support\Facades\Route;
use Domain\Course\Actions\CourseListAction;

use Domain\Course\Actions\AccountCourseEditAction;
use Domain\Course\Actions\AccountCourseListAction;
use Domain\Course\Actions\AccountCourseShowAction;
use Domain\Course\Actions\AccountCourseStoreAction;
use Domain\Course\Actions\AccountCourseCreateAction;
use Domain\Course\Actions\AccountCourseDeleteAction;
use Domain\Course\Actions\AccountCourseEnrollAction;
use Domain\Course\Actions\AccountCourseUpdateAction;
use Domain\Course\Actions\AccountCourseRegisterAction;
use Domain\Course\Actions\AccountCourseStudentListAction;

Route::get('/courses', CourseListAction::class)->name('course.list');

Route::prefix('@{account:username}')->group(function(){
    Route::get('/course/create', AccountCourseCreateAction::class)->name('account.course.create');
    Route::get('/{course:slug}', AccountCourseShowAction::class)->name('account.course.show');
    Route::get('/{course:slug}/edit', AccountCourseEditAction::class)->name('account.course.edit');
    Route::get('/{course:slug}/enroll', AccountCourseEnrollAction::class)->name('account.course.enroll');
    Route::get('/{course:slug}/students', AccountCourseStudentListAction::class)->name('account.course.student.list');
    Route::post('/course/create', AccountCourseStoreAction::class)->name('account.course.store');
    Route::post('/{course:slug}/edit', AccountCourseUpdateAction::class)->name('account.course.update');
    Route::post('/{course:slug}/enroll', AccountCourseRegisterAction::class)->name('account.course.register');
    Route::delete('/{course:slug}/delete', AccountCourseDeleteAction::class)->name('account.course.delete');
});