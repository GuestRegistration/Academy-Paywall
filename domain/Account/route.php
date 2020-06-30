<?php
use Illuminate\Support\Facades\Route;
use Domain\Account\Actions\AccountEditAction;
use Domain\Account\Actions\AccountShowAction;
use Domain\Account\Actions\AccountUpdateAction;
use Domain\Account\Actions\AccountPaymentAction;
use Domain\Account\Actions\AccountCourseListAction;
use Domain\Account\Actions\AccountStudentListAction;
use Domain\Account\Actions\AccountPaymentStoreAction;
use Domain\Account\Actions\AccountInstructorListAction;

Route::get('/', AccountShowAction::class)->name('account.show');
Route::get('/edit', AccountEditAction::class)->name('account.edit');
Route::get('/payment', AccountPaymentAction::class)->name('account.payment.gateway');
Route::get('/students', AccountStudentListAction::class)->name('account.student.list');
Route::get('/instructors', AccountInstructorListAction::class)->name('account.instructor.list');
Route::get('/courses', AccountCourseListAction::class)->name('account.course.list');
Route::post('/edit', AccountUpdateAction::class)->name('account.update');
Route::post('/payment', AccountPaymentStoreAction::class)->name('account.payment.gateway.store');
