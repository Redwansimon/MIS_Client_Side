import React from 'react'
import profileImg from "../assets/imgi_2_it.png"

export const Header = () => {
  return (
    <div className='m-2'>
        
                        <div className="navbar bg-base-100 shadow-indigo-500 rounded-s shadow-md  ">
                            <div className="flex-1 ml-7 font-bold text-2xl text-indigo-600">
                                Mbrella LTD
                                {/* <img src={logo} alt="Mbrella" /> */}
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
                    

    </div>
  )
}
