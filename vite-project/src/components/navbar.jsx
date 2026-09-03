import { useState } from "react";


const Navbar = () => {
   



    const User = localStorage.getItem("User");


    return (
        <>
            <main className="navbar-container smooth-navigation">
                <h2 className="header">Your Birthday Wish</h2>
                
            </main>
        </>
    )
}

export default Navbar;