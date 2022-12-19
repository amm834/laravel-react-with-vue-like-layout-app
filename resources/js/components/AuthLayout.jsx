import React from 'react';
import {BrowserRouter, Outlet} from "react-router-dom";
import Nav from "./Nav";

const MainLayout = () => {
    return (
        <>
            <main className="relative mt-20 container mx-auto max-w-6xl py-6">
                <Outlet/>
            </main>
        </>
    );
};

export default MainLayout;
