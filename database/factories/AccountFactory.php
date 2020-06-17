<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use Domain\Account\Models\Account;

$factory->define(Account::class, function (Faker $faker) {
    $email = $faker->safeEmail;
    return [
        'id' => $faker->uuid(),
        'name' => $faker->name,
        'email' => $email,
        'phone' => $faker->phoneNumber,
        'username' => $faker->userName,
    ];
});
