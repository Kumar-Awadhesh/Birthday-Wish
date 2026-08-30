import { useEffect, useState, useContext} from "react"
import { useNavigate } from "react-router-dom";
import { BirthdayContext } from "../authorization/birthdayContext";

const Dashboard = () => {
    const [userName, setUserName] = useState("");
    const {user, setUser} = useContext(BirthdayContext);
    const navigate = useNavigate();


    const userAuthentication = () => {
        if(user.toLocaleLowerCase() === userName.toLocaleLowerCase()){
            alert("It is you my Lady!!");
            navigate("/waiting")
        }
        else{
            alert("Enter your special name!")
        }
    }

   
    return(
        <>
            <main className="container">
                <div className="user-input-container">
                    <input type="text" placeholder="Enter your name precious one!" onChange={(e)=>setUserName(e.target.value)} />
                    <button onClick={userAuthentication}>It's Me</button>
                </div>
            </main>
        </>
    )
}

export default Dashboard;