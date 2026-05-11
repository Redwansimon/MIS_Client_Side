

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
        <div className='p-10 text-5xl'>
            Welcome to dashboard of MIS
        </div>
    )
}