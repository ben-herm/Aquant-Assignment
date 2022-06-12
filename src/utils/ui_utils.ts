import { theme } from "@/theme";

export const getRandomColor = (): string => {
    let rgb = [];
    for (const value of Object.values(theme.light.cardColors)) {
        rgb.push(value);
    }

    let color = rgb[Math.floor(Math.random() * rgb.length)];
    return color
}