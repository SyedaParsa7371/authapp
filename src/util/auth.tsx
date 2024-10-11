import axios from "axios"

const API_KEY='AIzaSyC9upv1uaGHBjRPNRC0OHecL1XCeSX0WDk'

export async function Authenicate(mode: any,email: any,password: any) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
    const response = await axios.post(url,{
        email:email,
        password:password,
        returnSecureToken: true
    })
    const token = response.data.idToken

    return token
}

export  function CreateUser(email?:any, password?:any) {
    return Authenicate('signUp',email,password); 
   
}

export  function Login(email?:any,password?:any) {
    return Authenicate('signInWithPassword', email,password)
}
