
export const Loader = () => {
    return (
        <div className="flex items-center justify-center mt-56">

            {/* OUTER SPINNING CIRCLE */}
            <div className="relative w-52 h-52">

                <div className="w-52 h-52 border-4 border-yellow-300 border-l-transparent rounded-full animate-spin"></div>

                {/* FIXED CENTER TEXT (NOT SPINNING) */}
                <div className="absolute inset-0 flex items-center justify-center">

                    <svg
                        viewBox="0 0 300 100"
                        className="w-96 h-96"
                        xmlns="http://www.w3.org/2000/svg"
                    >

                        <defs>
                            <linearGradient id="gold">
                                <stop offset="0%" stopColor="#FFD700" />
                                <stop offset="100%" stopColor="#FFA500" />
                            </linearGradient>
                        </defs>

                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="40"
                            fontFamily="Arial"
                            fill="none"
                            stroke="url(#gold)"
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

                    </svg>


                </div>

            </div>

        </div>
    );
};