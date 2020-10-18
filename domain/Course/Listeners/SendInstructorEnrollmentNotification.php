<?php

namespace Domain\Course\Listeners;

use Domain\Course\Events\Enrolled;
use Domain\Course\Notifications\CourseEnrollmentNotification;

class SendInstructorEnrollmentNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Enrolled  $event
     * @return void
     */
    public function handle(Enrolled $event)
    {
        $course = $event->student->course;
        $course->account->user->notify(new CourseEnrollmentNotification($event->student));
    }
}
