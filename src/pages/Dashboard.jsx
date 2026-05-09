import React, { useEffect } from 'react'

export const Dashboard = () => {

    useEffect(()=>{
        const token = localStorage.getItem("token");
        fetch("http://localhost:5000/api/dashboard",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then (res=>res.json())
        .then (data=>{
            console.log(data);
        })
        
        .catch(err=>{console.log(err);})

    },[])

  return (
    <div className='p-10 text-5xl'>Welcome to dashboard of MIS</div>
 )
}
