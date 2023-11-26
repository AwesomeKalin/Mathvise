export function yminusb(a, b, m, sigFigures) {
    let yIntercept = -(a * m) + b;
    let operation;
    if (yIntercept.toString().charAt(0) == '-') {
        operation = '-';
        yIntercept = 0 - yIntercept;
    }
    else {
        operation = '+';
    }
    return `y = ${m.toPrecision(sigFigures)}x ${operation} ${yIntercept.toPrecision(sigFigures)}`;
}
