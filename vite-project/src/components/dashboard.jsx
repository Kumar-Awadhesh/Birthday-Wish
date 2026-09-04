import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { BirthdayContext } from "../authorization/birthdayContext";

const Dashboard = () => {
    const [userName, setUserName] = useState("");
    const [searchField, setSearchField] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    const navigate = useNavigate();
    const { user, setUser, login, setLogin } = useContext(BirthdayContext);


    const User = localStorage.getItem("User");
    

    useEffect(() => {
        if (User?.toLocaleLowerCase() === user.toLocaleLowerCase()) {
            setLogin(true);
        }
    }, [User])


    let count = 0;
    const userAuthentication = () => {
        localStorage.setItem("User", userName);
        if (userName !== "") {
            if (user.toLocaleLowerCase() === userName.toLocaleLowerCase()) {
                alert(
                    "It is you! my Elaichi!!, Now.. let me take you to your Surprise!"
                );
                navigate("/waiting")
            }
            else if (userName.toLocaleLowerCase() === "titli" || userName.toLocaleLowerCase() === "biscuit" || userName.toLocaleLowerCase() === "sunshine") {
                alert("not this one! more and very special name of yours!")
            }
            else if (count === 0) {
                count++;
                alert("Enter your special name!")
            }
            else if (count === 1) {
                count++;
                alert("Enter the special name, I gave you!")
            }
            else {
                count = 0;
                alert("hmm...! lets take a moment and think more deep and try again!")
            }
        }
        else {
            alert("Enter your special name to begin with!")
        }

    }

    const wrongUserHandle = () => {
        alert("Ohh, if you're not the one then, it's not for you!");
        return;
    }


    return (
        <>
            <main className="container smooth-navigation">
                {
                    login &&
                    <div className="user-loggedin-container">
                        <nav className="navbar smooth-navigation">
                            <img onClick={(() => {
                                sideBar ? setSideBar(false) : setSideBar(true)
                            })} src="/images/user.png" alt="" />
                        </nav>
                        {
                            sideBar &&
                            <div className="sidebar smooth-navigation">
                                <h3></h3>
                                <div className="sidebar-options">
                                    <h2 className="user-name">{User}</h2>
                                    <h4>Open When...</h4>
                                    <h4>My Collection</h4>
                                </div>
                            </div>
                        }
                        <h2 className="welcome-msg">
                            Hey Beautifull!! <br />
                            You can find much more here! <br />
                            Either you're happy, sad or not in your mood. <br />
                            You can always come here and possibly change that.
                        </h2>
                    </div>
                }

                {
                    searchField &&
                    <div className="confirmation-msg-container smooth-navigation">
                        <h2>
                            Hey Beautifull! <br />
                            If it's you, why don't you Enter your special name down below!
                        </h2>
                        <img src="/images/down-arrow.gif" alt="" />
                    </div>
                }
                {!login &&
                    <div className="user-loggedout-container">
                        {
                            searchField ?
                                <div className="user-input-container smooth-navigation">
                                    <input type="password" placeholder="Enter your name, precious one!" onChange={(e) => setUserName(e.target.value)} /> <br />
                                    <button onClick={userAuthentication}>It's Me</button>
                                </div> :
                                <div className="user-verification-msg-container">
                                    <h2>
                                        Hey there! <br />
                                        This is for someone special,
                                        for the Precious one! <br />
                                        So, is it you?
                                    </h2>
                                    <div className="user-confirmation-btn-container">
                                        <button onClick={wrongUserHandle}>No! I am not</button>
                                        <button onClick={(e) => setSearchField(true)}>Yeah! it's Me</button>
                                    </div>
                                </div>
                        }
                    </div>
                }
            </main>
        </>
    )
}

export default Dashboard;