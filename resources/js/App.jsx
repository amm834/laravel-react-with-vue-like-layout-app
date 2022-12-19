import React from 'react';
import PostIndex from "./components/PostIndex";
import Nav from "./components/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewPost from "./components/NewPost";

const App = () => {
    return (
        <BrowserRouter>
            <Nav/>

            <main className="relative mt-24 container mx-auto max-w-6xl">
                <Routes>
                    <Route path="/" element={<PostIndex/>}/>
                    <Route path="/post-new" element={<NewPost/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
