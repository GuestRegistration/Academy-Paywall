<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('inertia-conflict');
    }
    
    public function __invoke(){
        // $ssr = $this->render();

        return Inertia::render('Pages/Home')->withViewData([
            'title' => 'Home',
            'description' => 'Some page description right here',
        ]);
    }

    private function render() {
        $renderer_source = File::get(base_path('node_modules/vue-server-renderer/basic.js'));
        $app_source = File::get(public_path('js/entry-server.js'));
    
        $v8 = new \V8Js();
    
        ob_start();
    
        $js =
        <<<EOT
        var process = { env: { VUE_ENV: "server", NODE_ENV: "production" } }; 
        this.global = { process: process };
        EOT;
    
        $v8->executeString($js);
        $v8->executeString($renderer_source);
        $v8->executeString($app_source);
    
        return ob_get_clean();
    }
    
}
