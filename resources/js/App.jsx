import React from 'react';
import PostIndex from "./components/PostIndex";
import Nav from "./components/Nav";

const App = () => {
    return (
        <>
            <Nav/>
            <main className="relative mt-24 container mx-auto max-w-6xl">
                <PostIndex/>
            </main>
        </>
    );
};

export default App;
