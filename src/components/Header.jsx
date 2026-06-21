import React from 'react'
import profileImg from "../assets/imgi_2_it.png"
import logo from "../assets/Mbrella.jpg"
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {

  const navigation = useNavigate();
  const handleLogout = async () => {
  const response = await fetch("http://localhost:5000/api/logout", {
    method: "POST",
    credentials: "include", // Session cookie পাঠানোর জন্য
  });

  const data = await response.json();
  console.log(data);
  if (data.message = 'Logged out'){
    navigation('/')
  }
    
  
};

    return (
        <div className="flex justify-between items-center">
            <div className='border-b-[1px]  '>

 

            <Link to={'/dashboard'}><svg
                viewBox="0 0 300 100"
                className="w-64 h-16 cursor-pointer  "
           
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

            </svg></Link>

            


        </div>
        <button
        onClick={() => handleLogout()}
        className="mr-7 px-4 bg-[#840AD9] hover:bg-[#6d08b3] text-white py-3 rounded-xl font-medium transition" >Logout</button>
        </div>
    )
}
