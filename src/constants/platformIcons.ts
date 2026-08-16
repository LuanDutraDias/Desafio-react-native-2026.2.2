import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { colors } from "./colors";

export const platformIcons: Record<string, { name: any; library: any; color: string }> = {
    "PlayStation": { name: "sony-playstation", library: MaterialCommunityIcons, color: colors.primary2 },
    "Xbox": { name: "microsoft-xbox", library: MaterialCommunityIcons, color: colors.primary3 },
    "Nintendo": { name: "nintendo-switch", library: MaterialCommunityIcons, color: colors.primary1 },
    "Computador": { name: "steam", library: FontAwesome6, color: "#66C0F4" },
};