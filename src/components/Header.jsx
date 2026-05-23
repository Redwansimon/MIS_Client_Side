import React from 'react'
import profileImg from "../assets/imgi_2_it.png"
import logo from "../assets/Mbrella.jpg"
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='border-b-[1px] '>

            {/* <div className="navbar bg-base-100  shadow-purple-100 mb-1 rounded-s shadow-md  ">
                <div className="flex-1 ml-7 font-bold text-2xl text-[#840AD9]">

                   
                    

                </div>

                <div className="flex gap-7 items-center mr-8">



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
            </div> */}

            <NavLink to={'/dashboard'}><svg
                viewBox="0 0 300 100"
                className="w-64 h-16 cursor-pointer "
                to={'/dashboard'}
                xmlns="http://www.w3.org/2000/svg"
            >

                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="40"
                    fontFamily="Arial"
                    fill="none"
                    stroke="#123E3F"
                    strokeWidth="2"
                    strokeDasharray="300"
                    strokeDashoffset="300"
                >
                    Mbrella

                    <animate
                        attributeName="stroke-dashoffset"
                        from="300"
                        to="0"
                        dur="3s"
                        repeatCount="indefinite"
                    />

                </text>

            </svg></NavLink>

            


        </div>
    )
}
