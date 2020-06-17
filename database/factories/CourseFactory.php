<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use Domain\Course\Models\Course;

$factory->define(Course::class, function (Faker $faker) {

    $title = $faker->sentence(4);
    return [
        'id' => $faker->uuid(),
        'title' => $title,
        'description' => $faker->sentence(20),
        'price' => $faker->phoneNumber,
        'slug' => Str::slug($title),
    ];
});
