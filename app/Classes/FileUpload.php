<?php


namespace App\Classes;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileUpload{

    public static function storeFile(Request $request, $key, $folder = 'uploads'){
        if (!$request->hasFile($key)) return $request->get($key);

        $file = $request->file($key)->storePublicly($folder, 'public');
        return Storage::url($file);
    }
}