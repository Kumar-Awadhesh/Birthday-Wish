import { createContext, useState } from "react";

export const BirthdayContext = createContext();

export const BirthContextProvider = ({children}) => {
    const [user, setUser] = useState("Elaichi");
    const [login, setLogin] = useState(false);
    const [birthTime, setBirthTime] = useState(0);


    return(
        <BirthdayContext.Provider value=
        {{user, setUser, login, setLogin, birthTime, setBirthTime}}>
        {children}</BirthdayContext.Provider>
    )
}