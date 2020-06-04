<?php
namespace Domain\Course\Policies;

use App\User;
use Domain\Course\Models\Course;
use Illuminate\Auth\Access\HandlesAuthorization;

class CoursePolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function access(User $user, Course $course)
    {
        return $user->account->getKey() === $course->account->getKey();
    }

}
