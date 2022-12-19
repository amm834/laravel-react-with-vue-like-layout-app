<?php

use Illuminate\Support\Facades\Route;


Route::view('/', 'layouts.app');

Route::view('/{any?}', 'layouts.app')->where('any', '.*');
