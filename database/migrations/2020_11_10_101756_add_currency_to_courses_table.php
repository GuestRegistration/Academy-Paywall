<?php

use Domain\Course\Models\Course;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCurrencyToCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->string('currency')->nullable()->after('price');
        });

        Course::all()->each(function($course){
            $course->updated([
                'currency' => $course->price && $course->account->paymentGateway ? $course->account->paymentGateway->currency : null
            ]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn('currency');
        });
    }
}
