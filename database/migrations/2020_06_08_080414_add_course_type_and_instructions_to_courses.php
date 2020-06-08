<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCourseTypeAndInstructionsToCourses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->string('course_type')->nullable()->after('end_at');
            $table->boolean('send_instructions')->default(false)->after('course_type');
            $table->longText('instructions')->nullable()->after('send_instructions');
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
            $table->dropColumn('course_type');
            $table->dropColumn('instructions');
            $table->dropColumn('send_instructions');
        });
    }
}
