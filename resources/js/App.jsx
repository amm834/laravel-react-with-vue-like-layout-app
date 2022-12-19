import React from 'react';
import PostIndex from "./components/post/PostIndex";
import Nav from "./components/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreatePost from "./components/post/CreatePost";
import EditPost from "./components/post/EditPost";

const App = () => {
    return (
        <BrowserRouter>
            <Nav/>

            <main className="relative mt-20 container mx-auto max-w-6xl py-6">
                <Routes>
                    <Route path="/" element={<PostIndex/>}/>
                    <Route path="/posts/create" element={<CreatePost/>}/>
                    <Route path="/posts/:id" element={<EditPost/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
