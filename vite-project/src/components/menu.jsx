import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Menu = () => {
const navigate = useNavigate();


    return(
        <>
            <main className="menu-container smooth-navigation">
                <div className="menu-icons">
                    <img onClick={(e)=>navigate("/")} src="images/home-icon.webp" alt="" />
                </div>
            </main>
        </>
    )
}

export default Menu;