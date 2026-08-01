import {View} from "react-native";

import {AntDesign, Feather, MaterialIcons, Ionicons} from "@expo/vector-icons";

import TabBarButton from "./TabBarButton";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import {styles} from "./styles";

import {colors} from "@/constants/colors";

import { useAuth } from "@/hooks/useAuth";

export default function TabBar(props: BottomTabBarProps){

    const {signOut} = useAuth();

    const currentRoute = props.state.routes[props.state.index].name;

    return (
        <View style={styles.tabBarContainer}>
            <TabBarButton 
                focused={currentRoute === "home/index"}
                label="Início" 
                onPress={() => props.navigation.navigate("home/index")}
                icon={
                <AntDesign 
                    name="home" size={30} 
                    color={
                        currentRoute === "home/index"
                            ? colors.primary
                            : colors.secondary
                    }
                />
            }
            />
            <TabBarButton 
                focused={currentRoute === "manage-reviews/index"}
                onPress={() => props.navigation.navigate("manage-reviews/index")}
                label="Reviews" 
                icon={
                    <Feather 
                        name="edit" size={30} 
                        color={
                        currentRoute === "manage-reviews/index"
                            ? colors.primary
                            : colors.secondary
                        }
                    />
                }
            />
            <TabBarButton 
                focused={currentRoute === "create-review/index"}
                style={styles.createReviewIcon}
                onPress={() => props.navigation.navigate("create-review/index")}
                icon={
                    <AntDesign 
                        name="plus" size={35} 
                        color={
                        currentRoute === "create-review/index"
                            ? colors.primary
                            : colors.secondary
                        }
                    />
                }
            />
            <TabBarButton 
                focused={currentRoute === "support/index"}
                onPress={() => props.navigation.navigate("support/index")}
                label="Suporte" 
                icon={
                    <MaterialIcons 
                        name="support-agent" 
                        size={30} 
                        color={
                            currentRoute === "support/index"
                                ? colors.primary
                                : colors.secondary
                        }
                    />
                }
            />
            <TabBarButton 
                onPress={signOut}
                label="Sair" 
                icon={
                    <Ionicons 
                        name="exit-outline" size={30} 
                        color={colors.secondary}
                    />
                }
            />
        </View>
    )
}