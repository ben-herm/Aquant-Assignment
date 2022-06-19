import { theme } from "@/theme";

export const getRandomColor = (): string => {
    let rgb: Array<string> = [];
    const {cardColors} = theme.light.colors
    for (const value of Object.values(cardColors)) {
        rgb.push(value);
    }
    const color = rgb[Math.floor(Math.random() * rgb.length)];
    return color
}

export const mapDataWithRandomColor = (item) => ({ ...item, color: getRandomColor() })