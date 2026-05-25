

import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '../components/Header'
import { Navigation } from '../components/Navigation'
import { Loader } from '../components/Loader'

export const Dashboard = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch("http://localhost:5000/api/dashboard", {

            // IMPORTANT FOR SESSION
            credentials: "include"

        })
            .then(res => {

                // Unauthorized
                if (res.status === 401) {
                    navigate("/")
                    return null
                }

                return res.json()
            })

            .then(data => {

                if (data) {
                    console.log(data)
                    setLoading(false)
                    
                }

            })

            .catch(err => {
                console.log(err)
                navigate("/")
            })

    }, [navigate])

   

    
useEffect(() => {

    let timeout;

    const resetTimer = () => {

        clearTimeout(timeout);

        timeout = setTimeout(async () => {

            try {

                await fetch("http://localhost:5000/api/logout", {
                    method: "POST",
                    credentials: "include"
                });

                alert("Session expired due to inactivity");

                navigate("/");

            } catch (error) {

                console.log(error);

            }

        }, 15 * 60 * 1000); // 15 minutes
    };

    // User activity events
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("scroll", resetTimer);

    // Start timer initially
    resetTimer();

    return () => {

        clearTimeout(timeout);

        window.removeEventListener("mousemove", resetTimer);
        window.removeEventListener("keydown", resetTimer);
        window.removeEventListener("click", resetTimer);
        window.removeEventListener("scroll", resetTimer);

    };

}, [navigate]);

 if (loading) {
        return <Loader />
    }


    return (

        <div className="min-h-screen flex flex-col bg-white text-slate-700">

            {/* HEADER */}
            <Header />

            {/* NAVIGATION */}
            <Navigation />

            {/* PAGE CONTENT */}
            <main>
                <Outlet />
            </main>

            {/* FOOTER */}
            <footer className="px-8 py-4 h-96 text-xs font-semibold text-purple-600">
                POWERED BY IT@MBRELLA
            </footer>

        </div>
    )
}