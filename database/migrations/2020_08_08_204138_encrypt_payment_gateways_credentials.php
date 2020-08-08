<?php

use Illuminate\Support\Facades\Schema;
use Domain\Account\Models\PaymentGateway;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EncryptPaymentGatewaysCredentials extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payment_gateways', function (Blueprint $table) {
            $table->longText('credentials')->change();
        });

        PaymentGateway::all()->each(function($gateway){
            $gateway->update([
                'credentials' => encrypt(json_encode($gateway->credentials))
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
        Schema::table('payment_gateways', function (Blueprint $table) {
            $table->json('credentials')->change();
        });

        PaymentGateway::all()->each(function($gateway){
            $gateway->update([
                'credentials' => json_decode(decrypt($gateway->credentials))
            ]);
        });

    }
}
