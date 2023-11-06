export function randNum(min: number, max: number, decimal: number): number {
    return +(Math.random() * (max - min + 1) + min).toFixed(decimal);
}