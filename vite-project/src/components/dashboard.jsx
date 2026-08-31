import { useEffect, useState, useContext} from "react"
import { useNavigate } from "react-router-dom";
import { BirthdayContext } from "../authorization/birthdayContext";

const Dashboard = () => {
    const [userName, setUserName] = useState("");
    const {user, setUser} = useContext(BirthdayContext);
    const navigate = useNavigate();

    let count = 0;
    const userAuthentication = () => {
        if(userName !== ""){
            if(user.toLocaleLowerCase() === userName.toLocaleLowerCase()){
                alert(
                    "It's you my Elaichi!!",
                    "Let me take you to your Surprise!"
                );
                navigate("/waiting")
            }
            else if(userName.toLocaleLowerCase() === "titli" || userName.toLocaleLowerCase() === "biscuit" || userName.toLocaleLowerCase() === "sunshine"){
                alert("not this one! more and very special name of yours!")
            }
            else if(count === 0){
                count++;
                alert("Enter your special name!")
            }
            else if(count === 1){
                count++;
                alert("Enter the special name, I gave you!")
            }
            else{
                count = 0;
                alert("hmm...! lets take a moment and think more deep and try again!")
            }
        }
        else{
            alert("Enter your special name to begin with!")
        }

    }

   
    return(
        <>
            <main className="container">
                <div className="user-input-container">
                    <input type="password" placeholder="Enter your name, precious one!" onChange={(e)=>setUserName(e.target.value)} />
                    <button onClick={userAuthentication}>It's Me</button>
                </div>
            </main>
        </>
    )
}

export default Dashboard;