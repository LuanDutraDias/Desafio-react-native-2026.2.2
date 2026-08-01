import { Redirect, Tabs } from "expo-router";

import { AntDesign, Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";

import { useAuth } from "@/hooks/useAuth";

import { colors } from "@/constants/colors";

import { useColorTheme } from "@/hooks/useColorTheme";

export default function TabsLayout() {

    const {primary, setPrimary} = useColorTheme();
    const { isLoggedIn, signOut } = useAuth();
    
    if (!isLoggedIn) {
        return <Redirect href="/login" />;
    }

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: primary,
                tabBarInactiveTintColor: colors.secondary,
                tabBarStyle: {
                    backgroundColor: colors.tabBarBackground,
                },
            }}
        >
            <Tabs.Screen
                name="home/index"
                options={{
                    title: "Início",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="manage-reviews/index"
                options={{
                    title: "Reviews",
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name="edit"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="create-review/index"
                options={{
                    title: "Criar",
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="plus"
                            size={35}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="support/index"
                options={{
                    title: "Suporte",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="support-agent"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}