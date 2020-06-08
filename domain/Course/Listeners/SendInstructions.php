<?php

namespace Domain\Course\Listeners;

use Domain\Course\Events\Enrolled;
use Illuminate\Support\Facades\Notification;
use Domain\Course\Notifications\CourseInstructionsNotification;

class SendInstructions
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
        if($course->send_instructions){
            $event->student->notify(new CourseInstructionsNotification($event->student));
        }
    }
}
