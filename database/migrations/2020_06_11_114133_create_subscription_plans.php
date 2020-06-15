<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Domain\Subscription\Models\SubscriptionPlan;

class CreateSubscriptionPlans extends Migration
{
    protected $plans = [
        SubscriptionPlan::PLAN_PROFESSIONAL,
        SubscriptionPlan::PLAN_UNLIMITED,
    ];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach ($this->plans as $plan) {
            SubscriptionPlan::create($plan);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        foreach ($this->plans as $plan) {
            SubscriptionPlan::where('name', $plan['name'])->delete();
        }
    }
}
