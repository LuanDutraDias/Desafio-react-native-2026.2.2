import { Redirect, Tabs } from "expo-router";

import { useAuth } from "@/hooks/useAuth";

import TabBar from "@/components/Tabbar";

export default function TabsLayout(){
    const {isLoggedIn} = useAuth();

    if (!isLoggedIn){
        return <Redirect href="/login"/>
    }

    return (
        <Tabs
            screenOptions={{headerShown: false,}}
            tabBar={(props) => <TabBar {...props} />}
        />
    )
}