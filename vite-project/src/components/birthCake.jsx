import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";


const BirthCake = () => {
    const [celebration, setCelebration] = useState(false);
    const navigate = useNavigate();


    const celebrationHandle = () => {
        setCelebration(true);
        setTimeout(() => {
            navigate("/wish_msg")
        },10000)
        
    }


    return(
        <>
            <main className="birth-cake-container smooth-navigation">
                <div className={celebration ? "celebration-container-after smooth-navigation" : "celebration-container-before"} >
                    <img src="/images/celebration-img.gif" alt="" />
                </div>
                <div className={celebration ? "cake-img-container-after" : "cake-img-container-before"}>
                    <h3 className="celebrate-msg-container">
                        Hey Beautifull!! <br />
                        It is time to your Precious Moment!! <br />
                        My Precious Lady! Lets Celebrate your Birthday!!!
                    </h3>
                    
                    <img src="/images/lighting-cake.gif" alt="" />
                    <div className="candle-btn-container"><button onClick={celebrationHandle}>Blow the Candle</button></div>
                </div>
            </main>
        </>
    )
}

export default BirthCake;