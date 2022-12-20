import React from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CreatePost from "./components/post/CreatePost";
import EditPost from "./components/post/EditPost";
import MainLayout from "./components/MainLayout";
import PostIndex from "./components/post/PostIndex";
import AuthLayout from "./components/AuthLayout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

createRoot(document.getElementById('app'))
    .render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/posts" element={<MainLayout/>}>
                        <Route index element={<PostIndex/>}/>
                        <Route path="/posts/create" element={<CreatePost/>}/>
                        <Route path="/posts/:id" element={<EditPost/>}/>
                    </Route>
                    <Route path="/login" element={<AuthLayout/>}>
                        <Route index element={<Login/>}/>
                    </Route>
                    <Route path="/register" element={<AuthLayout/>}>
                        <Route index element={<Register/>}/>
                    </Route>
                    <Route
                        path="*"
                        element={<Navigate to="/posts" replace={true}/>}
                    />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
