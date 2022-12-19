<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
        ]);

        $user = $request->only(['email', 'password']);
        if (!auth()->attempt($user)) {
            return response(status: 400)->json([
                'message' => 'Email or Password is wrong',
            ]);
        }

        // create token
        $token = auth()->user()->createToken('access_token')->plainTextToken;

        return response()->json([
            'message' => 'You was logged in successfully',
            'token' => $token
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = $request->only(['name', 'email', 'password']);
        $user['password'] = \Hash::make($request->password);

        User::create($user);

        return response()->json([
            'message' => 'You was logged in successfully',
            'token' => 'Success'
        ]);
    }
}
