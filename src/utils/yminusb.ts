export function yminusb(a: number, b: number, m: number, sigFigures: number) {
    let yIntercept: number = -(a * m) + b;

    let operation: string;
        if (yIntercept.toString().charAt(0) == '-') {
            operation = '-';
            yIntercept = 0 - yIntercept;
        } else {
            operation = '+';
        }

    return `y = ${m.toPrecision(sigFigures)}x ${operation} ${yIntercept.toPrecision(sigFigures)}`;
}