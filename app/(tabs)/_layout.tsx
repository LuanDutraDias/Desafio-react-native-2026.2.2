import { Redirect, Tabs } from "expo-router";

import { useAuth } from "@/hooks/useAuth";


export default function TabsLayout(){
    const {isLoggedIn} = useAuth();

    if (!isLoggedIn){
        return <Redirect href="/login"/>
    }


}