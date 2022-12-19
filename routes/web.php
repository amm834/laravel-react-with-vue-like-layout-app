<?php

use Illuminate\Support\Facades\Route;


Route::view('/', 'layouts.app');

Route::view('/{any?}', view('layouts.app'))->where('any', '.*');
