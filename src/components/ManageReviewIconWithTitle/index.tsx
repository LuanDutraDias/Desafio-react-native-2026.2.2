import { View } from "react-native";

import { colors } from "../../constants/colors";
import { styles } from "./styles";
import Title from "../Title";

import { useColorTheme } from "@/hooks/useColorTheme";

type ManageReviewIconWithTitleProps = {
    icon: React.ReactNode;
    title: string;
};

export default function ManageReviewIconWithTitle({icon, title}: ManageReviewIconWithTitleProps){

    const {primary} = useColorTheme();

    return (
        <View style={styles.containerIconAndTitle}>
            <View style={[styles.containerIcon, {backgroundColor: `${primary}1F`, borderColor: `${primary}80`}]}>
                {icon}
            </View>
            <Title>
                {title}
            </Title>
        </View>
    )
};