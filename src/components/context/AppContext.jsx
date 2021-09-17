import React, { createContext, useState} from "react";

export const DataContext=createContext()

export function AppProvider ({children}){
    const [Challenge, setChallenge] = useState([])
    console.log(Challenge);

    return(
        <DataContext.Provider value={{Challenge,setChallenge}}>
            {children}
        </DataContext.Provider>
    )
}