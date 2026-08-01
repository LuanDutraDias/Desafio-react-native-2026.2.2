import { createContext, PropsWithChildren, useState } from "react";

import { colors } from "@/constants/colors";

type ColorThemeContextProps = {
    primary: string;
    setPrimary: (color: string) => void;
}

export const ColorThemeContext = createContext<ColorThemeContextProps>(
    {} as ColorThemeContextProps
);

export function ColorThemeProvider({children}: PropsWithChildren){
    const [primary, setPrimary] = useState(colors.primary1);

    return (
        <ColorThemeContext.Provider
            value={{
                primary, setPrimary,
            }}
        >
            {children}
        </ColorThemeContext.Provider>    
    )
}