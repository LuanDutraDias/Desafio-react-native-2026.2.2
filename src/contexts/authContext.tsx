import { createContext, PropsWithChildren, useState } from "react";

import {router} from "expo-router";

type AuthState = {
    isLoggedIn: boolean
    signIn: () => void
    signOut: () => void
}

export const AuthContext = createContext<AuthState>({} as AuthState);

export function AuthProvider({children}: PropsWithChildren){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function signIn(){
        setIsLoggedIn(true)
        router.replace("/home");
    }

    function signOut(){
        setIsLoggedIn(false);
        router.replace("/login");
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}