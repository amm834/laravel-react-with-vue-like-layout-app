import React from 'react';
import {BrowserRouter, Outlet} from "react-router-dom";
import Nav from "./Nav";

const MainLayout = () => {
    return (
        <>
            <main className="container mx-auto">
                <Outlet/>
            </main>
        </>
    );
};

export default MainLayout;
