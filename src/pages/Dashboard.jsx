

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import profileImg from "../assets/imgi_2_it.png";
import logo from "../assets/logo.webp"

export const Dashboard = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("token");

        fetch("http://localhost:5000/api/dashboard", {

            headers: {
                Authorization: `Bearer ${token}`
            }

        })

            .then(res => res.json())

            .then(data => {

                console.log(data);

                if (data.message === 'invalid token') {

                    navigate('/');

                } else {

                    setLoading(false);

                }

            })

            .catch(err => {

                console.log(err);
                navigate('/');

            });

    }, []);

    // Loading Screen
    if (loading) {

        return (
            <div className='min-h-screen flex items-center justify-center text-3xl'>
                Loading...........
            </div>
        )
    }

    return (
        <div className=''>
            <header className='m-2'>
                <div className="navbar bg-base-100 shadow-[#5fb5bb] rounded-s shadow-md  ">
                    <div className="flex-1 ml-7">
                        
                        <img src={logo} alt="Mbrella" />
                    </div>

                    <div className="flex gap-7 items-center mr-8">
                        
                        <div className="text-lg font-semibold text-gray-700">Support <span className='text-red-600 font-bold'>?</span></div>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={profileImg} />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>




        </div>
    )
}