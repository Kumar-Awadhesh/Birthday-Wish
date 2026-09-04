import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
   


    const navigate = useNavigate();
    const User = localStorage.getItem("User");


    const resetHandle = () => {
        localStorage.removeItem("User")
        navigate("/");
    }


    return (
        <>
            <main className="navbar-container smooth-navigation">
                <h2 className="header">For Your Special Day</h2>
                <p onClick={resetHandle} className="reset-btn">Reset</p>
            </main>
        </>
    )
}

export default Navbar;