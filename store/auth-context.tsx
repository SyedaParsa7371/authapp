import { createContext, FC, useEffect, useState } from "react";

import { IAuthContext } from "../src/interface/interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    token:'',
    isAuthenticated:false,
    authenicate:(token:any)=>{},
    logout:()=>{},
});

const AuthContextProvider:FC<IAuthContext>=({children}) =>{
    
   const [authToken,setAuthToken] = useState()
   function authenicate(token: any) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token)
   }
   function logout(){
        setAuthToken(null)
        AsyncStorage.removeItem('token')
   }

  const value: any={
    token:authToken,
    isAuthenticated:!!authToken,
    authenicate:authenicate,
    logout:logout,
  }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default AuthContextProvider
