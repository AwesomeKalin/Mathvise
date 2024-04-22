export function hcf(a, b) {
    if (b) {
        return hcf(b, a % b);
    }
    else {
        return Math.abs(a);
    }
}
