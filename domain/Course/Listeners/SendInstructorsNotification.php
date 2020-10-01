<?php

namespace Domain\Course\Listeners;

use Domain\Course\Events\CourseCreated;
use Illuminate\Support\Facades\Notification;
use Domain\Course\Notifications\CourseInstructorsNotification;

class SendInstructorsNotification
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
    public function handle(CourseCreated $event)
    {
        $course = $event->course;
        
        $instructors = $course->users->filter(function($user) use($course){
            return !$user->is($course->account->user);
        });

        if($instructors->count()){
            Notification::send($instructors, new CourseInstructorsNotification($course));
        }
    }
}
