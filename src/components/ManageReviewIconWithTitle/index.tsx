import { View } from "react-native";

import { styles } from "./styles";
import Title from "../Title";

import { colors } from "@/constants/colors";

import { useColorTheme } from "@/hooks/useColorTheme";

type ManageReviewIconWithTitleProps = {
    icon: React.ReactNode;
    title: string;
    variant?: string
};

export default function ManageReviewIconWithTitle({icon, title, variant = "primary"}: ManageReviewIconWithTitleProps){

    const {primary} = useColorTheme();

    let backgroundColor;

    if (variant === "primary1"){
        backgroundColor = colors.primary1
    }
    else {
        backgroundColor = primary
    }

    return (
        <View style={styles.containerIconAndTitle}>
            <View style={[styles.containerIcon, {backgroundColor: `${backgroundColor}1F`, borderColor: `${backgroundColor}80`}]}>
                {icon}
            </View>
            <Title>
                {title}
            </Title>
        </View>
    )
};