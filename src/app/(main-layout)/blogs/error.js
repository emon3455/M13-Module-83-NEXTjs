"use client"

import { useEffect } from "react";

const Error = ({error, reset}) => {

    useEffect(()=>{
        console.log(error);
    },[error])

    return (
        <div className="text-center">
            <h1 className="text-xl font-semibold text-red-500">{error.message || "Something Went wrong"}</h1>
            <button className="text-white bg-sky-400 p-1 rounded-lg my-4" onClick={()=> reset()}>
                Resolve
            </button>
        </div>
    );
};

export default Error;