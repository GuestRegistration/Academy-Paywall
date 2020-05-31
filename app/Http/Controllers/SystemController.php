<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Artisan;

class SystemController extends Controller
{
    public function migrate(){
        $this->runArtisan('migrate');
        return redirect()->route('home');
    }

    public function linkStorage(){
       $this->runArtisan('storage:link');
       return redirect()->route('home');

    }

    private function runArtisan($command){
        Artisan::call($command);
    }
}
