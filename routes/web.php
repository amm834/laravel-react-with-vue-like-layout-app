<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;


Route::view('/', 'layouts.app');

Route::view('/{any?}', 'layouts.app')->where('any', '.*');

