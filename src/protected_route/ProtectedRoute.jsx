
// import { Navigate } from 'react-router-dom';

// export const ProtectedRoute = ({children}) => {

//     const token = localStorage.setsess("token");

//     if(!token){
//         return <Navigate to="/"/>
//     }

//   return children;
// }
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {

        fetch("http://localhost:5000/api/dashboard", {

            credentials: "include"

        })
            .then((res) => {
              console.log(res);

                if (res.status === 401) {
                    setAuthenticated(false);
                } else {
                    setAuthenticated(true);
                }

            })
            .catch(() => {
                setAuthenticated(false);
            });

    }, []);

    // Loading state
    if (authenticated === null) {
        return <div>Loading...</div>;
    }

    // Not logged in
    if (!authenticated) {
        return <Navigate to="/" />;
    }

    // Logged in
    return children;
};