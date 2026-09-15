import { createContext, useState } from "react";

export const BirthdayContext = createContext();

export const BirthContextProvider = ({children}) => {
    const [user, setUser] = useState("Elaichi");
    const [login, setLogin] = useState(false);
    const [birthTime, setBirthTime] = useState(0);
    const [moodDown, setMoodDown] = useState(false);
    const [lonely, setLonely] = useState(false);
    const [inspiration, setInspiration] = useState(false);


    return(
        <BirthdayContext.Provider value=
        {{
            user, setUser, login, setLogin, birthTime, setBirthTime,
            moodDown, setMoodDown, lonely, setLonely, inspiration, setInspiration
        }}>
        {children}</BirthdayContext.Provider>
    )
}