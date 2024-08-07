import { createContext,useContext,useState,useEffect } from "react";

const GlobalContext=createContext()

export const useGlobalContext=()=> useContext(GlobalContext)

const AppContext=({children})=>{
    const [token,setToken]=useState(() => getCookie("JWT_TOKEN") || "")

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    const isAuthenticated=!!token
    return(
        <GlobalContext.Provider value={{token,setToken,isAuthenticated}}>
            {children}
        </GlobalContext.Provider>
    )
}

  
export default AppContext;