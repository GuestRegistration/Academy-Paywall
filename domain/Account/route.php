<?php
use Illuminate\Support\Facades\Route;
use Domain\Account\Actions\AccountEditAction;
use Domain\Account\Actions\AccountShowAction;
use Domain\Account\Actions\AccountSetupAction;
use Domain\Account\Actions\AccountUpdateAction;
use Domain\Account\Actions\AccountPaymentAction;
use Domain\Account\Actions\AccountCourseListAction;
use Domain\Account\Actions\AccountInstructorRemove;
use Domain\Account\Actions\AccountSetupStoreAction;
use Domain\Account\Actions\AccountUserInviteAction;
use Domain\Account\Actions\AccountStudentListAction;
use Domain\Account\Actions\AccountPaymentStoreAction;
use Domain\Account\Actions\AccountStripeConnectAction;
use Domain\Account\Actions\AccountInstructorListAction;
use Domain\Account\Actions\AccountStripeDisconnectAction;
use Domain\Account\Actions\AccountUserInviteActionDelete;
use Domain\Account\Actions\AccountUserInvitationAcceptAction;
use Domain\Account\Actions\AccountStripeConnectCallbackAction;

Route::get('account/{account}', AccountShowAction::class)->name('account.show.id');
Route::get('/account', AccountSetupAction::class)->name('account.setup');
Route::post('/account', AccountSetupStoreAction::class)->name('account.setup.store');

Route::prefix('{account:username}')->group(function(){
    Route::get('/', AccountShowAction::class)->name('account.show');
    Route::get('/edit', AccountEditAction::class)->name('account.edit');
    Route::get('/payment', AccountPaymentAction::class)->name('account.payment.gateway');
    Route::get('/students', AccountStudentListAction::class)->name('account.student.list');
    Route::get('/instructors', AccountInstructorListAction::class)->name('account.instructor.list');
    Route::get('/courses', AccountCourseListAction::class)->name('account.course.list');
    Route::post('/edit', AccountUpdateAction::class)->name('account.update');
    Route::post('/payment', AccountPaymentStoreAction::class)->name('account.payment.gateway.store');
    Route::post('/instructors/invite', AccountUserInviteAction::class)->name('account.instructor.invite.send');
    Route::post('/instructors/invite-delete', AccountUserInviteActionDelete::class)->name('account.instructor.invite.delete');
    Route::post('/instructor/remove', AccountInstructorRemove::class)->name('account.instructor.remove');
});

Route::prefix('{account}')->group(function(){
    Route::get('/invitation/{invitation}', AccountUserInvitationAcceptAction::class)->name('account.instructor.invitation');
    Route::post('/stripe-connect', AccountStripeConnectAction::class)->name('account.stripe.connect');
    Route::post('/stripe-disconnect', AccountStripeDisconnectAction::class)->name('account.stripe.disconnect');
});
Route::get('oauth/stripe', AccountStripeConnectCallbackAction::class)->name('account.stripe.connect.callback');


