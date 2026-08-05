import { View } from "react-native";

import {styles} from "./styles";

import { useColorTheme } from "@/hooks/useColorTheme";

type PaginationProps = {
    total: number;
    current: number;
};

export default function PaginationDots({total, current}: PaginationProps) {
    const {primary} = useColorTheme();
    return (
        <View style={styles.container}>
            {Array.from({ length: total }).map((_, index) => (
                <View
                    key={index}
                    style={[         
                        styles.dot,
                        index === current && {backgroundColor: primary},
                    ]}
                />
            ))}
        </View>
    );
}