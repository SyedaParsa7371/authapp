import { ReactNode } from "react";

export interface IButton {
    children?: ReactNode
    onPress?: () => void
}
export interface IFlatButton {
    children?: ReactNode
    onPress?: () => void
}

export interface IIconButton {
    icon?: any
    color?: string
    size?: any
    onPress?: () => void
}

export interface ILoadingOverlay {
    message?: any
}

export interface IAuthContent {
    isLogin?: any,
    onAuthenticate?: any
}

export interface IsubmitHandler {
    credentials?: () => void
    email?: any
    confirmEmail?: any
    password?: any
    confirmPassword?: any
}

export interface IAuthForm {
    isLogin?:any
    onSubmit?:any
    credentialsInvalid?:any
}
export interface IupdateInputValueHandler{
    inputType?:any
    enteredValue?:any
}

export interface IInput{
    label?:any
    keyboardType?:any
    secure?:any
    onUpdateValue?:any
    value?:any
    isInvalid?:any
}

export interface ICreateUser{
    email?:any
    password?:any
}
export interface IAuthContext{
    children?:ReactNode
    token?:any,
    isAuthenticated?:any,
    authenicate?:(token:any)=>{},
    logout?:()=>{}
}