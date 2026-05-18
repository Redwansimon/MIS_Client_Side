

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.webp"
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Navi } from '../components/Navi';



export const Dashboard = () => {


    // console.log(current);


    //----------------------------//Token validation------------------------------------------
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



        <div className="min-h-screen bg-white text-slate-700">

            <Header></Header>
            {/* <Navigation/> */}
            <Navi/>

            {/* Footer */}

            <footer className="px-8 py-4 h-96 text-xs font-semibold text-purple-600">
                POWERED BY IT@MBRELLA
                <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id itaque hic laudantium veniam nobis, nam adipisci tenetur nemo, ad iste suscipit inventore ut animi nihil repellat rerum doloribus iusto sunt. Lorem </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error nobis aspernatur dolor repellendus, consequatur sint, vitae illo voluptate neque non sit dolores atque quibusdam ipsum harum consectetur, aut vero.</p></div>
            </footer>
        </div>
    )
}

