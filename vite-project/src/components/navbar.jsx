import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
   


    const navigate = useNavigate();
    const User = localStorage.getItem("User");



    return (
        <>
            <main className="navbar-container smooth-navigation">
                <h2 className="header">For Your Special Day</h2>
            </main>
        </>
    )
}

export default Navbar;