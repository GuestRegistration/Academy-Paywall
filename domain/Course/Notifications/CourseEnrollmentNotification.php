<?php

namespace Domain\Course\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Support\HtmlString;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class CourseEnrollmentNotification extends Notification
{
    use Queueable;

    public $student;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($student)
    {
        $this->student = $student;
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
        return (new MailMessage)
                    ->subject("New enrollment for '{$this->student->course->title}'")
                    ->line("A new student just enrolled for a course at {$this->student->course->account->name}")
                    ->line("Student name: {$this->student->fullname}")
                    ->line("Amount paid: ".(($this->student->currency && $this->student->amount) ? $this->student->currency." ".$this->student->amount : "NONE"))
                    ->line("Date & Time: {$this->student->created_at->format('d F, Y h:ia')}")
                    ->action('View All Students', route('account.course.student.list', ['account' => $this->student->course->account->username, 'course' => $this->student->course->slug]));
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
