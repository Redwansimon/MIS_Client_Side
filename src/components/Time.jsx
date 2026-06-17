import React from "react";

const Time = () => {

    const today = new Date();
    console.log(today.toLocaleDateString());

    const fullDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        
    });

    return (

        <div>

            <h1 className="font-bold text-[#196061]">{fullDate}</h1>

        </div>

    );

};

export default Time;