import { useState, useContext, useEffect  } from "react";
import { useNavigate} from "react-router-dom";
import { BirthdayContext } from "../authorization/birthdayContext";


const Navbar = () => {
   

    const {user, setUser, birthTime, setBirthTime} = useContext(BirthdayContext);
    const navigate = useNavigate();
    const User = localStorage.getItem("User");

    
    useEffect(()=> {
        if(User.toLocaleLowerCase() === "priya" && birthTime > 0){
            navigate("/waiting_hall")
        }
        else if(User.toLocaleLowerCase() === "elaichi" && birthTime > 0){
            navigate("/waiting")
        }
    },[birthTime, navigate])



    return (
        <>
            <main className="navbar-container smooth-navigation">
                <h2 className="header">For Your Special Day</h2>
            </main>
        </>
    )
}

export default Navbar;