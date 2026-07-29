import { Text } from "react-native";

import { styles } from "../Title/styles";

type TitleProps = {
  children: string;
};

export default function Title({children}: TitleProps){
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}