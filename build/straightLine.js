import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";
import chalk from "chalk";
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
        const yItercept = ya - (gradient * xa);
        let equation = `y = ${gradient.toPrecision(sigFigures)}x + ${yItercept.toPrecision(sigFigures)}`;
        if (yItercept.toString().includes('-')) {
            equation = `y = ${gradient.toPrecision(sigFigures)}x - ${yItercept.toPrecision(sigFigures)}`;
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
        let yItercept = -(xm * perpGrad) + ym;
        let operation;
        if (yItercept.toString().charAt(0) == '-') {
            operation = '-';
            yItercept = 0 - yItercept;
        }
        else {
            operation = '+';
        }
        const answer = `y = ${perpGrad.toPrecision(sigFigures)}x ${operation} ${yItercept.toPrecision(sigFigures)}`;
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
        let yItercept = -(xa * gradCBPerp) + ya;
        let operation;
        if (yItercept.toString().charAt(0) == '-') {
            operation = '-';
            yItercept = 0 - yItercept;
        }
        else {
            operation = '+';
        }
        const answer = `y = ${gradCBPerp.toPrecision(sigFigures)}x ${operation} ${yItercept.toPrecision(sigFigures)}`;
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
