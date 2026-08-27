import { createContext, useState } from "react";

export const BirthdayContext = createContext();

export const BirthContextProvider = ({children}) => {
    const [user, setUser] = useState(false);


    return(
        <BirthdayContext.Provider value=
        {{user, setUser}}>
        {children}</BirthdayContext.Provider>
    )
}