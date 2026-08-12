import { platformIcons } from "@/constants/platformIcons";

type PlatformIconProps = {
    platformName?: string;
    size?: number;
};

export default function PlatformIcon({ platformName, size = 15 }: PlatformIconProps) {

    if (!platformName || !platformIcons[platformName]) {
        return null;
    }

    const { library: IconComponent, name, color } = platformIcons[platformName];

    return (
        <IconComponent 
            name={name} 
            size={size} 
            color={color} 
        />
    )
}