import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(
    // initrue state of context
    {}
);

export const AuthProvider = ({children}) => {
  
    const [user,SetUser] = useState(null);
    const [loadingInitial,setLoadingInitial] = useState(true);
    const auth = getAuth();
    const logout = () =>{
        signOut(auth).catch(error => console.log(error))
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                SetUser(user);
            } else {
                SetUser(null);
            }
            setLoadingInitial(false) // dong nay de set User loading xong het roi thi moi chay children
        })
    },[])

    const memoValue = useMemo(
        () =>({
            user,
            SetUser,
            logout
        }),[user]
    )
    return (
    <AuthContext.Provider value={memoValue}>{!loadingInitial && children}</AuthContext.Provider> //!important
  )
}

export default function useAuth(){
    return useContext(AuthContext);
}


