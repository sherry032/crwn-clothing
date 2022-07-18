import { useState, createContext, useEffect } from "react";
import {onAuthStateChangedListenser, createUserDocumentFromAuth} from "../utils/firebase/firebase.utils"

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null,
})

export const UserProvider = 
({children})=>{
    
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListenser(async(user)=>{
            if(user){
                await createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)

        })
        return unsubscribe
    },[])
    return(
        <UserContext.Provider value={
            {currentUser, setCurrentUser}
        }>{children}</UserContext.Provider>
    )
}