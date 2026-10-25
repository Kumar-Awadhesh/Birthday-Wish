import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BirthdayContext } from "../authorization/birthdayContext";


const WaitingHall = () => {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const targetDate = new Date("2026-10-06T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

    const {user, setUser, birthTime, setBirthTime} = useContext(BirthdayContext);
    const navigate = useNavigate();

    

    useEffect(() => {
        const timer = setInterval(() => {
            const difference = targetDate - Date.now();

            if (difference <= 0) {
                setTimeLeft(0)
                clearInterval(timer);
            }
            else {
                setTimeLeft(difference)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate]);


    useEffect(() => {
        const totalSecond = Math.floor(timeLeft / 1000);
        setBirthTime(timeLeft);
        
        setDay(Math.floor(totalSecond / (60 * 60 * 24)));
        setHour(Math.floor(totalSecond % (60 * 60 * 24) / (60 * 60)));
        setMinute(Math.floor(totalSecond % (60 * 60) / 60));
        setSecond(Math.floor(totalSecond % 60));
    
    }, [timeLeft])

    useEffect(() => {
        if(timeLeft <= 0){
            setDay(0);
            setHour(0);
            setMinute(0);
            setSecond(0);
            setTimeout(()=> {
                navigate("/birthday_cake")
            },1000)
        }
    },[timeLeft])

    return (
        <>
            <main className="container smooth-navigation">
                <div className="waiting-container">
                    <h2 className="waiting-msg"> Hey Beautiful! <br />We're Waiting for the Sacred day,<br />
                        The Day You Came into This World!
                    </h2>
                    <h2 className="time-stamp">
                        {day}D : {hour}H : {minute}M : {second}S
                    </h2>
                </div>
            </main>
        </>
    )
}

export default WaitingHall;