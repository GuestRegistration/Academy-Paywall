<?php
use Domain\Course\Models\Student;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Domain\Account\Models\PaymentGateway;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AdjustStudentsTableToChangesInPayment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('students', function (Blueprint $table) {
            $table->string('payment_gateway')->after('phone')->nullable();
            $table->string('currency')->after('payment_gateway')->nullable();
            $table->bigInteger('amount')->after('currency')->nullable();
        });

        $this->transferData();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn('payment_gateway');
            $table->dropColumn('currency');
            $table->dropColumn('amount');
        });
    }

    public function transferData(){
        DB::beginTransaction();
        try{
            Student::whereNotNull('payment_gateway_id')->get()->each(function($student){
                $gateway = PaymentGateway::find($student->payment_gateway_id);
                $student->fill([
                    'payment_gateway' => optional($gateway)->gateway,
                    'currency' =>  optional($gateway)->currency,
                    'amount' =>  $student->course->price
                ])->save();
            });
            DB::commit();
        }
       catch(Exception $e){
            DB::rollBack();
            throw $e;
       }
    }
}
