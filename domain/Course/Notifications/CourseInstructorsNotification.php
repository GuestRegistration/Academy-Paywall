<?php

namespace Domain\Course\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Support\HtmlString;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class CourseInstructorsNotification extends Notification
{
    use Queueable;

    public $course;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($course)
    {
        $this->course = $course;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $subject = "{$this->course->account->name} added you to a course";

        return (new MailMessage)
                    ->subject($subject)
                    ->line("You have been added as an instructor to a course in {$this->course->account->name}")
                    ->line("Course: {$this->course->title}")
                    ->action('View Course', route('account.course.show', ['account' => $this->course->account->username, 'course' => $this->course->slug]));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
