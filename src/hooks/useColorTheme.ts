import { useContext } from "react";

import { ColorThemeContext } from "@/contexts/colorThemeContext";

export function useColorTheme(){
    const context = useContext(ColorThemeContext);

    return context;
}