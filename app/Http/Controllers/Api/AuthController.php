<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // validate the register user data
        $validatedUser = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ], [
            'name.required' => 'User name must be provided',
            'email.required' => 'Email must be provided',
            'email.email' => 'Wrong email format',
            'email.unique' => 'Your email was already exists',
            'password.required' => 'Password must be provided',
            'password.confirmed' => 'Password confirmation was not match'
        ]);

        // encrypt password
        $validatedUser['password'] = Hash::make($validatedUser['password']);
        // create user
        $user = User::create($validatedUser);

        return response()->json([
            'meta' => [
                'status' => 201,
            ],
            'message' => 'Your account was created successfully'
        ], 201);
    }

    public function login(Request $request)
    {
        $validatedUser = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ], [
            'email.required' => 'Email must be provided',
            'email.email' => 'Wrong email format',
            'password.required' => 'Password must be provided',
        ]);

        $auth = auth()->attempt($validatedUser);
        if (!$auth) {
            return response()->json([
                'meta' => [
                    'status' => 400
                ],
                'message' => 'Invalid credentials'
            ]);
        }
        // create token
        $token = auth()->user()->createToken('access_token')->plainTextToken;
        return response()->json([
            'meta' => [
                'status' => 200
            ],
            'data' => [
                'message' => 'You was logged in successfully',
                'token' => $token
            ]
        ]);
    }

    public function profile()
    {
        $user_profile = auth()->user();

        return response()->json([
            'meta' => [
                'status' => 200
            ],
            'data' => $user_profile
        ]);
    }

    public function logout()
    {
        // delete all user token
        auth()->user()->tokens()->delete(); // or -> revoke()

        return response('', 204);
    }
}
