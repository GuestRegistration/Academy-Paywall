<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Domain\Account\Models\Account;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HomePageRedirectionTest extends TestCase
{
    use RefreshDatabase, WithFaker;
    /**
     * Test for visitor
     */
    public function testVisitor(){
        $this->get(route('home'))
            ->assertRedirect(route('signin'));
    }

    /**
     * Test for authenticated user
     *
     * @return void
     */
    public function testAuthUser()
    {
        $user = factory(User::class)->create();

        $account = factory(Account::class)->create([
            'user_id' => $user->getKey(),
            'email' => $user->email,
        ]);

        $this->actingAs($user)
            ->get(route('home'))
            ->assertRedirect(route('account.course.list', $user->account->username));
    }

}
