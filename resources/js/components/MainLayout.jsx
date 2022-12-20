import React, {useEffect} from 'react';
import {BrowserRouter, Outlet, useNavigate} from "react-router-dom";
import Nav from "./Nav";

const MainLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        
        axios.get('/api/user', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then()
            .catch(error => {
                if (error.response.status === 401) {
                    return navigate('/login')
                }
            })
    }, [])
    return (
        <>
            <Nav/>
            <main className="relative mt-20 container mx-auto max-w-6xl py-6">
                <Outlet/>
            </main>
        </>
    );
};

export default MainLayout;
