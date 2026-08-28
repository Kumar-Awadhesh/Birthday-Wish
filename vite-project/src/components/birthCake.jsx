import { useState, useEffect, useContext } from "react";


const BirthCake = () => {
    const [celebration, setCelebration] = useState(false);


    return(
        <>
            <main className="birth-cake-container">
                <div className={celebration ? "celebration-container-after" : "celebration-container-before"} >
                    <img src="/images/celebration-img.gif" alt="" />
                </div>
                <div className={celebration ? "cake-img-container-after" : "cake-img-container-before"}>
                    <h3 className="celebrate-msg-container">
                        Hey Beautifull!! <br />
                        It is time to your Precious Moment!! <br />
                        My Precious Lady! Lets Celebrate your Birthday!!!
                    </h3>
                    
                    <img src="/images/lighting-cake.gif" alt="" />
                    <div className="candle-btn-container"><button onClick={()=> setCelebration(true)}>Blow the Candle</button></div>
                </div>
            </main>
        </>
    )
}

export default BirthCake;