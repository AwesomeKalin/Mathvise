export function randNum(min, max, decimal) {
    return +(Math.random() * (max - min + 1) + min).toFixed(decimal);
}
