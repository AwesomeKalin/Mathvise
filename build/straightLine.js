import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";
import chalk from "chalk";
import { yminusb } from "./utils/yminusb.js";
export async function calcGradientStraightLine() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        },
        {
            type: 'number',
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    const sigFigures = answers.sigFig;
    for (var i = 0; i < 10; i++) {
        const xa = randNum(minVal, maxVal, decimal);
        const ya = randNum(minVal, maxVal, decimal);
        const xb = randNum(minVal, maxVal, decimal);
        const yb = randNum(minVal, maxVal, decimal);
        const gradient = (yb - ya) / (xb - xa);
        if (gradient === Infinity) {
            i--;
            break;
        }
        const providedAnswer = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `Find the gradient between AB when A is (${xa}, ${ya}) and B is (${xb}, ${yb})`,
            }
        ]);
        if (+gradient.toPrecision(sigFigures) == providedAnswer.answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer was ${+gradient.toPrecision(sigFigures)}`);
        }
    }
    return;
}
export async function calcEquStrLine() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        },
        {
            type: 'number',
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    const sigFigures = answers.sigFig;
    for (var i = 0; i < 10; i++) {
        const xa = randNum(minVal, maxVal, decimal);
        const ya = randNum(minVal, maxVal, decimal);
        const xb = randNum(minVal, maxVal, decimal);
        const yb = randNum(minVal, maxVal, decimal);
        const gradient = (yb - ya) / (xb - xa);
        if (gradient === Infinity) {
            i--;
            break;
        }
        const yItercept = ya - (gradient * xa);
        let equation = `y = ${gradient.toPrecision(sigFigures)}x + ${yItercept.toPrecision(sigFigures)}`;
        if (yItercept.toString().includes('-')) {
            equation = `y = ${gradient.toPrecision(sigFigures)}x - ${0 - +yItercept.toPrecision(sigFigures)}`;
        }
        const providedAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `Find the equation of AB when A is (${xa}, ${ya}) and B is (${xb}, ${yb}) in the form "y = mx + c"`,
            }
        ]);
        if (equation == providedAnswer.answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer was ${equation}`);
        }
    }
    return;
}
export async function distanceFormula() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        },
        {
            type: 'number',
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    const sigFigures = answers.sigFig;
    for (var i = 0; i < 10; i++) {
        const xa = randNum(minVal, maxVal, decimal);
        const ya = randNum(minVal, maxVal, decimal);
        const xb = randNum(minVal, maxVal, decimal);
        const yb = randNum(minVal, maxVal, decimal);
        const distance = Math.sqrt((Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2)));
        const providedAnswer = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `Find the distance between AB when A is (${xa}, ${ya}) and B is (${xb}, ${yb})`,
            }
        ]);
        if (+distance.toPrecision(sigFigures) == providedAnswer.answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer was ${distance.toPrecision(sigFigures)}`);
        }
    }
}
export async function midpointFormula() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        },
        {
            type: 'number',
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    const sigFigures = answers.sigFig;
    for (var i = 0; i < 10; i++) {
        const xa = randNum(minVal, maxVal, decimal);
        const ya = randNum(minVal, maxVal, decimal);
        const xb = randNum(minVal, maxVal, decimal);
        const yb = randNum(minVal, maxVal, decimal);
        const midpointx = (xa + xb) / 2;
        const midpointy = (ya + yb) / 2;
        const midpoint = `(${midpointx.toPrecision(sigFigures)}, ${midpointy.toPrecision(sigFigures)})`;
        const providedAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `What is the midpoint between (${xa}, ${ya}) and  (${xb}, ${yb})`,
            }
        ]);
        if (midpoint == providedAnswer.answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer was ${midpoint}`);
        }
    }
}
export async function gradientFormula() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear? (Must be between 0 and 179)',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding and must be between 0 and 179)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        },
        {
            type: 'number',
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    let minVal = answers.min;
    let maxVal = answers.max;
    const decimal = answers.decimal;
    const sigFigures = answers.sigFig;
    if (answers.min < 0)
        minVal = 0;
    if (answers.min > 179)
        minVal = 179;
    if (answers.max < 0)
        maxVal = 0;
    if (answers.max > 179)
        maxVal = 179;
    for (var i = 0; i < 10; i++) {
        const angle = randNum(minVal, maxVal, decimal);
        const gradient = Math.tan(angle);
        const answer = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `What is the gradient when the angle between the line and the x-axis is ${angle}°`,
            }
        ]);
        if (+gradient.toPrecision(sigFigures) == answer.answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer was ${gradient.toPrecision(sigFigures)}`);
        }
    }
}
export async function collinearity() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear? (Number only affects Point A and B)',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding and number only affects Point A and B)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    for (var i = 0; i < 10; i++) {
        const xa = randNum(minVal, maxVal, decimal);
        const ya = randNum(minVal, maxVal, decimal);
        const xb = randNum(minVal, maxVal, decimal);
        const yb = randNum(minVal, maxVal, decimal);
        const xc = xb + (xb - xa);
        const yc = yb + (yb - ya);
        const gradient = (yb - ya) / (xb - xa);
        await inquirer.prompt([
            {
                type: 'confirm',
                name: 'pause',
                message: `Show that the points A(${xa}, ${ya}), B(${ya}, ${yb}) and C(${xc}, ${yc}) are collinear. Press enter when ready to see answer`,
            }
        ]);
        console.log(`m${chalk.red("AB")} = (${yb} - ${ya}) / (${xb} - ${xa}) = ${gradient}`);
        console.log(`m${chalk.red("BC")} = (${yc} - ${yb}) / (${xc} - ${xb}) = ${gradient}`);
        console.log(`Since m${chalk.red("AB")} = m${chalk.red("BC")} and they share the common point B, A, B and C are collinear`);
    }
}
export async function perpendicularLines() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        },
        {
            type: 'number',
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    const sigFigures = answers.sigFig;
    for (var i = 0; i < 10; i++) {
        const gradient = randNum(minVal, maxVal, decimal);
        const perpGrad = (-1) / gradient;
        const providedAnswer = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `If m = ${gradient}, then what is m⟂`,
            }
        ]);
        if (providedAnswer.answer == +perpGrad.toPrecision(sigFigures)) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer is ${perpGrad.toPrecision(sigFigures)}`);
        }
    }
}
export async function perpBisector() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        },
        {
            type: 'number',
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    const sigFigures = answers.sigFig;
    for (var i = 0; i < 10; i++) {
        const xa = randNum(minVal, maxVal, decimal);
        const ya = randNum(minVal, maxVal, decimal);
        const xb = randNum(minVal, maxVal, decimal);
        const yb = randNum(minVal, maxVal, decimal);
        const xm = (xa + xb) / 2;
        const ym = (ya + yb) / 2;
        const gradient = (yb - ya) / (xb - xa);
        const perpGrad = (-1) / gradient;
        const answer = yminusb(xm, ym, perpGrad, sigFigures);
        const providedAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `A is (${xa}, ${ya}) and B(${xb}, ${yb}). Find the equation of the perpendicular bisector to AB in the form "y = mx + c"`,
            }
        ]);
        if (providedAnswer.answer == answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
export async function altitudes() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        },
        {
            type: 'number',
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    const sigFigures = answers.sigFig;
    for (var i = 0; i < 10; i++) {
        const xa = randNum(minVal, maxVal, decimal);
        const ya = randNum(minVal, maxVal, decimal);
        const xb = randNum(minVal, maxVal, decimal);
        const yb = randNum(minVal, maxVal, decimal);
        const xc = randNum(minVal, maxVal, decimal);
        const yc = randNum(minVal, maxVal, decimal);
        const gradCB = (yb - yc) / (xb - xc);
        const gradCBPerp = (-1) / gradCB;
        const answer = yminusb(xa, ya, gradCBPerp, sigFigures);
        const providedAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `Triangle ABC has verticies A(${xa}, ${ya}) B(${xb}, ${yb}) C(${xc}, ${yc}). Find the equation of the altitude from A in the form y = mx + c`,
            }
        ]);
        if (providedAnswer.answer == answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer is ${answer}`);
        }
    }
}
export async function medians() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        },
        {
            type: 'number',
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    const sigFigures = answers.sigFig;
    for (var i = 0; i < 10; i++) {
        const xa = randNum(minVal, maxVal, decimal);
        const ya = randNum(minVal, maxVal, decimal);
        const xb = randNum(minVal, maxVal, decimal);
        const yb = randNum(minVal, maxVal, decimal);
        const xc = randNum(minVal, maxVal, decimal);
        const yc = randNum(minVal, maxVal, decimal);
        const xm = (xb + xc) / 2;
        const ym = (yb + yc) / 2;
        const gradAM = (ym - ya) / (xm - xa);
        const answer = yminusb(xa, ya, gradAM, sigFigures);
        const providedAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `Triangle ABC has verticies A(${xa}, ${ya}) B(${xb}, ${yb}) C(${xc}, ${yc}). Find the equation of the median from A in the form y = mx + c`,
            }
        ]);
        if (providedAnswer.answer == answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer is ${answer}`);
        }
    }
}
export async function composite() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    for (var i = 0; i < 10; i++) {
        const fxsquared = randNum(minVal, maxVal, decimal);
        let fintercept = randNum(minVal, maxVal, decimal);
        let foperation = '+';
        if (fintercept < 0) {
            foperation = '-';
            fintercept = 0 - fintercept;
        }
        const gx = randNum(minVal, maxVal, decimal);
        let gintercept = randNum(minVal, maxVal, decimal);
        let goperation = '+';
        if (gintercept < 0) {
            goperation = '-';
            gintercept = 0 - gintercept;
        }
        const ffunction = `f(x) = ${fxsquared}x^2 ${foperation} ${fintercept}`;
        const gfunction = `g(x) = ${gx}x ${goperation} ${gintercept}`;
        const fOfgOfXbracketsXsquared = Math.pow(gx, 2) * fxsquared;
        let fOfgOfXbracketsIntercept = Math.pow(gintercept, 2) * fxsquared;
        let fOfgOfXbracketsX;
        let fOfgOfxbracketsInterceptOperation = '+';
        let fOfgOfxbracketsXOperation = '+';
        if (goperation === '+') {
            fOfgOfXbracketsX = ((gx * gintercept) * 2) * fxsquared;
        }
        else {
            fOfgOfXbracketsX = ((gx * -gintercept) * 2) * fxsquared;
        }
        if (foperation === '+') {
            fOfgOfXbracketsIntercept += fintercept;
        }
        else {
            fOfgOfXbracketsIntercept -= fintercept;
        }
        if (fOfgOfXbracketsX < 0) {
            fOfgOfxbracketsXOperation = '-';
            fOfgOfXbracketsX = 0 - fOfgOfXbracketsX;
        }
        if (fOfgOfXbracketsIntercept < 0) {
            fOfgOfxbracketsInterceptOperation = '-';
            fOfgOfXbracketsIntercept = 0 - fOfgOfXbracketsIntercept;
        }
        const fOfgOfX = `f(g(x)) = ${fOfgOfXbracketsXsquared}x^2 ${fOfgOfxbracketsXOperation} ${fOfgOfXbracketsX}x ${fOfgOfxbracketsInterceptOperation} ${fOfgOfXbracketsIntercept}`;
        const gOffOfXbracketsXsquared = gx * fxsquared;
        let gOffOfXbracketsIntercept;
        let gOffOfXbracketsInterceptOperation = '+';
        if (foperation === '+') {
            gOffOfXbracketsIntercept = gx * fintercept;
        }
        else {
            gOffOfXbracketsIntercept = gx * -fintercept;
        }
        if (goperation === '+') {
            gOffOfXbracketsIntercept += gintercept;
        }
        else {
            gOffOfXbracketsIntercept -= gintercept;
        }
        if (gOffOfXbracketsIntercept < 0) {
            gOffOfXbracketsInterceptOperation = '-';
        }
        const gOffOfX = `g(f(x)) = ${gOffOfXbracketsXsquared}x^2 ${gOffOfXbracketsInterceptOperation} ${gOffOfXbracketsIntercept}`;
        const answer = await inquirer.prompt([
            {
                type: 'input',
                name: 'fOfgOfX',
                message: `If ${ffunction} and ${gfunction}, what is f(g(x)), in the form f(g(x)) = ax^2 + bx + c`,
            },
            {
                type: 'input',
                name: 'gOffOfX',
                message: `If ${ffunction} and ${gfunction}, what is g(f(x)), in the form g(f(x)) = ax^2 + b`,
            }
        ]);
        if (answer.fOfgOfX === fOfgOfX) {
            console.log('f(g(x)) correct!');
        }
        else {
            console.log(`f(g(x)) incorrect! The correct answer was ${fOfgOfX}`);
        }
        if (answer.gOffOfX === gOffOfX) {
            console.log('g(f(x)) correct!');
        }
        else {
            console.log(`g(f(x)) incorrect! The correct answer was ${gOffOfX}`);
        }
    }
}
export async function inverse() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    for (var i = 0; i < 10; i++) {
        const xcubed = randNum(minVal, maxVal, decimal);
        const intercept = randNum(minVal, maxVal, decimal);
        let fOfXoperation = '+';
        let fOfXintercept = intercept;
        if (intercept < 0) {
            fOfXoperation = '-';
            fOfXintercept = 0 - intercept;
        }
        const fOfX = `f(x) = ${xcubed}x^3 ${fOfXoperation} ${fOfXintercept}`;
        let answerOperation;
        if (fOfXoperation === '+') {
            answerOperation = '-';
        }
        else {
            answerOperation = '+';
        }
        const answer = `f^-1(x) = sqrt((x ${answerOperation} ${fOfXintercept}) / ${xcubed})`;
        const providedAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `If ${fOfX}, then what is the inverse of f(x), in the form f^-1(x) = sqrt((x + a) / b)`,
            },
        ]);
        if (providedAnswer.answer === answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
export async function inverseTransform() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    for (var i = 0; i < 10; i++) {
        const xa = randNum(minVal, maxVal, decimal);
        const ya = randNum(minVal, maxVal, decimal);
        const xb = randNum(minVal, maxVal, decimal);
        const y = randNum(minVal, maxVal, decimal);
        const x = randNum(minVal, maxVal, decimal);
        let yDisplay = y;
        let xDisplay = x;
        let yOperation = '+';
        let xOperation = '+';
        if (y < 0) {
            yOperation = '-';
            yDisplay = 0 - y;
        }
        if (x < 0) {
            xOperation = '-';
            xDisplay = 0 - x;
        }
        const question = `A line goes through (${xa}, ${ya}) and (${xb}, a). Calculate what the new co-ordinates if the graph function was f(x ${xOperation} ${xDisplay}) ${yOperation} ${yDisplay}`;
        const coord1 = `(${xa - x}, ${ya + y})`;
        const coord2 = `(${xb - x}, a ${yOperation} ${yDisplay})`;
        console.log(question);
        const answers = await inquirer.prompt([
            {
                type: 'input',
                message: 'Co-ord 1',
                name: 'coord1',
            },
            {
                type: 'input',
                message: 'Co-ord 2',
                name: 'coord2',
            },
        ]);
        if (coord1 == answers.coord1) {
            console.log('Co-ord 1 is Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer for co-ord 1 is ${coord1}`);
        }
        if (coord2 == answers.coord2) {
            console.log('Co-ord 2 is Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer for co-ord 2 is ${coord2}`);
        }
    }
}
export async function logFunctions() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        }
    ]);
    const minVal = answers.min;
    const maxVal = answers.max;
    const decimal = answers.decimal;
    for (var i = 0; i < 10; i++) {
        const xa = randNum(minVal, maxVal, decimal);
        const xb = randNum(minVal, maxVal, decimal);
        const shift = xa - 1;
        let shiftDisplay = shift;
        let shiftOperation = '-';
        if (shift < 0) {
            shiftDisplay = 0 - shift;
            shiftOperation = '+';
        }
        const aAnswer = xb - shift;
        const answer = `y = log${aAnswer}(x ${shiftOperation} ${shiftDisplay})`;
        const provAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `A log function goes through the points (${xa}, 0) and (${xb}, 1). What is the function, in the form y = loga(x + b)`,
            }
        ]);
        if (answer === provAnswer.answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer is ${answer}`);
        }
    }
}
