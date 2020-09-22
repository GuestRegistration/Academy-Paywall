<?php
namespace App\Traits;

use Carbon\Carbon;

trait HasLocalDates {

    /**
     * Get the current local time 
     * 
     * @return Carbon
     */
    public function localTimeNow()
    {
        return $this->inUsersTimezone(Carbon::now());
    }

    /**
     * Localize a date to users timezone 
     * 
     * @param null $dateField
     * @return Carbon
     */
    public function localize($dateField = null, $timezone = null)
    {
        $dateValue = $this->{$dateField};

        if(is_null($dateValue)) return null;

        return $this->inUsersTimezone($dateValue, $timezone);
    }

    /**
     * Change timezone of a carbon date 
     * 
     * @param $dateValue
     * @return Carbon
     */
    private function inUsersTimezone($dateValue, $timezone = null): Carbon
    {
        $user = auth()->user();
        
        $timezone = $timezone ? $timezone : (optional($user)->timezone ?? config('app.timezone'));
        return $this->asDateTime($dateValue)->timezone($timezone);
    }

}