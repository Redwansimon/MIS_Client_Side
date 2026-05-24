

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                // IMPORTANT FOR SESSION
                credentials: 'include',

                body: JSON.stringify({
                    username: userID,
                    password: password
                })
            });

            const data = await response.json();
            console.log(data);

            // SESSION LOGIN SUCCESS CHECK
            if (data.user) {

                setSuccess(true);
                setError('');

                setUserID('');
                setPassword('');

                // Redirect to dashboard
                navigate("/dashboard");

            } else {

                setSuccess(false);
                setError(data.message || "Login failed");
            }

        } catch (error) {
            console.log(error);
            setError("Server error");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] flex items-center justify-center px-4">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-10"
            >

                {/* Heading */}
                <div className="text-center mb-8">

                    <h1 className="font-cause font-bold text-5xl text-[#840AD9] mb-2">
                        Mbrella
                    </h1>

                    <p className="text-gray-500 text-sm font-poppins">
                        Management Information System
                    </p>

                </div>

                {/* Username */}
                <div className="mb-5">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#840AD9]"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#840AD9]"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-[#840AD9] hover:bg-[#6d08b3] text-white py-3 rounded-xl font-medium transition"
                >
                    Login
                </button>

                {/* Messages */}
                <div className="text-center mt-4">

                    {success && (
                        <div className="text-green-600 text-sm font-medium">
                            Login successful
                        </div>
                    )}

                    {error && (
                        <div className="text-red-600 text-sm font-medium">
                            {error}
                        </div>
                    )}

                </div>

            </form>
        </div>
    );
};