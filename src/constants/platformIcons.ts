import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { colors } from "./colors";

export const platformIcons: Record<string, { name: any; library: any; color: string }> = {
    "PlayStation": { name: "sony-playstation", library: MaterialCommunityIcons, color: "blue" },
    "Xbox": { name: "microsoft-xbox", library: MaterialCommunityIcons, color: "green" },
    "Nintendo": { name: "nintendo-switch", library: MaterialCommunityIcons, color: "red" },
    "Computador": { name: "computer", library: FontAwesome6, color: colors.secondary },
};