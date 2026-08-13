import { createContext, PropsWithChildren, useEffect, useState } from "react";

import * as SecureStore from "expo-secure-store";

import { getMe, logout } from "@/services/auth";

import {router} from "expo-router";

import { login } from "@/services/auth";

import { User } from "@/types/user";

type AuthState = {
    isLoggedIn: boolean;
    logging: boolean;
    setLogging: (logging: boolean) => void;
    isReadyAfterSearchingToken: boolean;
    user: User | null;
    loadingUser: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    loadUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthState>({} as AuthState);

export function AuthProvider({children}: PropsWithChildren){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isReadyAfterSearchingToken, setIsReadyAfterSearchingToken] = useState(false);
    const [logging, setLogging] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loadingUser, setLoadingUser] = useState(false);  

    async function loadUser() {
        try {
            setLoadingUser(true);
            const userResponse = await getMe();
            setUser(userResponse.user);
        } catch (error) {
            console.error("Erro ao carregar usuário logado:", error);
        } finally {
            setLoadingUser(false);
        }
    }

    async function signIn(email: string, password: string){
        try{
            const response = await login({ email, password }); 
            await SecureStore.setItemAsync("token", response.token);
            setIsLoggedIn(true);
            await loadUser();
            router.replace("/home");
        } catch (error) {

        } finally {
            setLogging(false);
        }
    }

    useEffect(() => {
        async function getToken(){
            try {
                const token = await SecureStore.getItemAsync("token");
                if (token){
                    setIsLoggedIn(true);
                    await loadUser();
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
        try {
            await logout();
        } catch (error) {
            console.log(error);
        } finally {
            await SecureStore.deleteItemAsync("token");
            setIsLoggedIn(false);
            setUser(null);
            router.replace("/login");
        }
    }

    return (
        <AuthContext.Provider value={{user, logging, setLogging, loadingUser, isLoggedIn, isReadyAfterSearchingToken, signIn, signOut, loadUser}}>
            {children}
        </AuthContext.Provider>
    )
}