import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { BirthdayContext } from "../authorization/birthdayContext";


const Menu = () => {
    const navigate = useNavigate();

    const {birthTime, setBirthTime} = useContext(BirthdayContext);



    return(
        <>
            <main className="menu-container smooth-navigation">
                <div className="menu-icons">
                    <img onClick={(e)=> navigate("/")} src="images/home-icon.webp" alt="" />
                </div>
            </main>
        </>
    )
}

export default Menu;