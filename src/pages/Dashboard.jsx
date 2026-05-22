import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '../components/Header'
import { Navigation } from '../components/Navigation'
import { ShopDetails } from '../reports/shopdetails/ShopDetails'

export const Dashboard = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const token = localStorage.getItem("token")

        fetch("http://localhost:5000/api/dashboard", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.message === "invalid token") {
                    navigate("/")
                } else {
                    setLoading(false)
                }
            })
            .catch(err => {
                console.log(err)
                navigate("/")
            })

    }, [navigate])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-3xl">
                Loading...........
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-white text-slate-700">

            {/* HEADER */}
            <Header />

            {/* NAVIGATION */}
            <Navigation />

            {/* PAGE CONTENT (THIS IS WHERE REPORT SHOWS) */}
            <main className="">
                <Outlet />
            </main>

            



            {/* FOOTER */}
            <footer className="px-8 py-4 h-96 text-xs font-semibold text-purple-600">
                POWERED BY IT@MBRELLA
            </footer>

        </div>
    )
}