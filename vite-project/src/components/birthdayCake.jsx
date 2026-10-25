import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BirthdayContext } from "../authorization/birthdayContext";


const BirthdayCake = () => {
    const [celebration, setCelebration] = useState(false);
    const navigate = useNavigate();
    const {login, setLogin, birthTime, setBirthTime} = useContext(BirthdayContext);


    const celebrationHandle = () => {
        setCelebration(true);
        setTimeout(() => {
            navigate("/birth_wish_msg")
        },10000)
        
    }
    


    return(
        <>
            <main className="birth-cake-container smooth-navigation">
                <div className={celebration ? "celebration-container-after smooth-navigation" : "celebration-container-before"} >
                    <img src="/images/birth-celebration.gif" alt="" />
                </div>
                <div className={celebration ? "cake-img-container-after" : "cake-img-container-before"}>
                    <h3 className="celebrate-msg-container">
                        Hey Beautifull!! <br />
                        It is time to your Special Moment!! <br />
                        Lets Celebrate your Birthday!!!
                    </h3>
                    
                    <img src="/images/birthday-cake.gif" alt="" />
                    <div className="candle-btn-container"><button onClick={celebrationHandle}>Blow the Candle</button></div>
                </div>
            </main>
        </>
    )
}

export default BirthdayCake;