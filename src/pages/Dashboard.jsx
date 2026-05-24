// import React, { useEffect, useState } from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'

// import { Header } from '../components/Header'
// import { Navigation } from '../components/Navigation'
// import { ShopDetails } from '../reports/shopdetails/ShopDetails'
// import { Loader } from '../components/Loader'

// export const Dashboard = () => {

//     const navigate = useNavigate()
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {

//         const token = localStorage.getItem("token")

//         fetch("http://localhost:5000/api/dashboard", {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => {

//                 if (data.message === "invalid token") {
//                     navigate("/")
//                 } else {
//                     setLoading(false)
//                 }
//             })
//             .catch(err => {
//                 console.log(err)
//                 navigate("/")
//             })

//     }, [navigate])

//     if (loading) {
//         return <Loader/>
//     }

//     return (
//         <div className="min-h-screen flex flex-col bg-white text-slate-700">

//             {/* HEADER */}
//             <Header />

//             {/* NAVIGATION */}
//             <Navigation />

//             {/* PAGE CONTENT (THIS IS WHERE REPORT SHOWS) */}
//             <main className="">
//                 <Outlet />
//             </main>

            



//             {/* FOOTER */}
//             <footer className="px-8 py-4 h-96 text-xs font-semibold text-purple-600">
//                 POWERED BY IT@MBRELLA
//             </footer>

//         </div>
//     )
// }

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