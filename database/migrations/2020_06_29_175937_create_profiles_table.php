<?php

use App\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id')->index()->nullable();           
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('phone')->unique()->nullable();
            $table->string('email')->unique();
            $table->string('username')->unique()->nullable();
            $table->text('avatar')->nullable();
            $table->mediumText('bio')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        
        $this->createExistingProfile();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }

    public function createExistingProfile(){
        User::all()->each(function($user){
            if(!$user->profile){
                $user->profile()->create([
                    'email' => $user->email
                ]);
            }
            
        });
    }
}
