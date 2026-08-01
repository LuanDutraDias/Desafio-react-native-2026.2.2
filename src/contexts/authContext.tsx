import { createContext, PropsWithChildren, useEffect, useState } from "react";

import * as SecureStore from "expo-secure-store";

import {router} from "expo-router";

type AuthState = {
    isLoggedIn: boolean;
    isReadyAfterSearchingToken: boolean;
    signIn: (token: string, rememberMe: boolean) => Promise<void>;
    signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthState>({} as AuthState);

export function AuthProvider({children}: PropsWithChildren){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isReadyAfterSearchingToken, setIsReadyAfterSearchingToken] = useState(false);

    async function signIn(token: string, rememberMe: boolean){
        if (rememberMe){
            await SecureStore.setItemAsync("token", token);
        }
        setIsLoggedIn(true);
        router.replace("/home");
    }

    useEffect(() => {
        async function getToken(){
            try {
                const token = await SecureStore.getItemAsync("token");
                if (token){
                    setIsLoggedIn(true);
                }
            } catch(error) {
                setIsLoggedIn(false);
            } finally {
                setIsReadyAfterSearchingToken(true);
            }
        }
        getToken();
    }, []);

    async function signOut(){
        await SecureStore.deleteItemAsync("token");
        setIsLoggedIn(false);
        router.replace("/login");
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, isReadyAfterSearchingToken, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}