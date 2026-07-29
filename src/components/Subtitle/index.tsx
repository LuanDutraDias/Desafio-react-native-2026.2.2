import { Text } from "react-native";

import {styles} from "../Subtitle/styles";

type SubtitleProps = {
  children: string;
};

export default function Subtitle({children}: SubtitleProps){
    return (
        <Text style={styles.subtitle}>
            {children}
        </Text>
    )
}