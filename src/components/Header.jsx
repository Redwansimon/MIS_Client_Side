import React from 'react'
import profileImg from "../assets/imgi_2_it.png"
import logo from "../assets/Mbrella.jpg"
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    return (
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
    )
}
