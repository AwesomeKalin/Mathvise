import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";
import chalk from "chalk";
import { yminusb } from "./utils/yminusb.js";

export async function calcGradientStraightLine() {
    const answers: { min: number, max: number, decimal: number, sigFig: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;
    const sigFigures: number = answers.sigFig;

    for (var i = 0; i < 10; i++) {
        const xa: number = randNum(minVal, maxVal, decimal);
        const ya: number = randNum(minVal, maxVal, decimal);

        const xb: number = randNum(minVal, maxVal, decimal);
        const yb: number = randNum(minVal, maxVal, decimal);

        const gradient: number = (yb - ya) / (xb - xa);

        const providedAnswer: { answer: number } = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `Find the gradient between AB when A is (${xa}, ${ya}) and B is (${xb}, ${yb})`,
            }
        ]);

        if (+gradient.toPrecision(sigFigures) == providedAnswer.answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The correct answer was ${+gradient.toPrecision(sigFigures)}`);
        }
    }

    return;
}

export async function calcEquStrLine() {
    const answers: { min: number, max: number, decimal: number, sigFig: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;
    const sigFigures: number = answers.sigFig

    for (var i = 0; i < 10; i++) {
        const xa: number = randNum(minVal, maxVal, decimal);
        const ya: number = randNum(minVal, maxVal, decimal);

        const xb: number = randNum(minVal, maxVal, decimal);
        const yb: number = randNum(minVal, maxVal, decimal);

        const gradient: number = (yb - ya) / (xb - xa);
        const yItercept: number = ya - (gradient * xa);
        let equation: string = `y = ${gradient.toPrecision(sigFigures)}x + ${yItercept.toPrecision(sigFigures)}`;

        if (yItercept.toString().includes('-')) {
            equation = `y = ${gradient.toPrecision(sigFigures)}x - ${yItercept.toPrecision(sigFigures)}`;
        }

        const providedAnswer: { answer: string } = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `Find the equation of AB when A is (${xa}, ${ya}) and B is (${xb}, ${yb}) in the form "y = mx + c"`,
            }
        ]);

        if (equation == providedAnswer.answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The correct answer was ${equation}`);
        }
    }

    return;
}

export async function distanceFormula() {
    const answers: { min: number, max: number, decimal: number, sigFig: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;
    const sigFigures: number = answers.sigFig;

    for (var i = 0; i < 10; i++) {
        const xa: number = randNum(minVal, maxVal, decimal);
        const ya: number = randNum(minVal, maxVal, decimal);

        const xb: number = randNum(minVal, maxVal, decimal);
        const yb: number = randNum(minVal, maxVal, decimal);

        const distance: number = Math.sqrt((Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2)));

        const providedAnswer: { answer: number } = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `Find the distance between AB when A is (${xa}, ${ya}) and B is (${xb}, ${yb})`,
            }
        ]);

        if (+distance.toPrecision(sigFigures) == providedAnswer.answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The correct answer was ${distance.toPrecision(sigFigures)}`);
        }
    }
}

export async function midpointFormula() {
    const answers: { min: number, max: number, decimal: number, sigFig: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;
    const sigFigures: number = answers.sigFig;

    for (var i = 0; i < 10; i++) {
        const xa: number = randNum(minVal, maxVal, decimal);
        const ya: number = randNum(minVal, maxVal, decimal);

        const xb: number = randNum(minVal, maxVal, decimal);
        const yb: number = randNum(minVal, maxVal, decimal);

        const midpointx: number = (xa+xb)/2;
        const midpointy: number = (ya+yb)/2;
        const midpoint: string = `(${midpointx.toPrecision(sigFigures)}, ${midpointy.toPrecision(sigFigures)})`;

        const providedAnswer: { answer: string } = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `What is the midpoint between (${xa}, ${ya}) and  (${xb}, ${yb})`,
            }
        ]);

        if (midpoint == providedAnswer.answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The correct answer was ${midpoint}`);
        }
    }
}

export async function gradientFormula() {
    const answers: { min: number, max: number, decimal: number, sigFig: number } = await inquirer.prompt([
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

    let minVal: number = answers.min;
    let maxVal: number = answers.max;
    const decimal: number = answers.decimal;
    const sigFigures: number = answers.sigFig;

    if (answers.min < 0) minVal = 0;
    if (answers.min > 179) minVal = 179;

    if (answers.max < 0) maxVal = 0;
    if (answers.max > 179) maxVal = 179;

    for (var i = 0; i < 10; i++) {
        const angle: number = randNum(minVal, maxVal, decimal);
        const gradient: number = Math.tan(angle);

        const answer: { answer: number } = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `What is the gradient when the angle between the line and the x-axis is ${angle}°`,
            }
        ]);

        if (+gradient.toPrecision(sigFigures) == answer.answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The correct answer was ${gradient.toPrecision(sigFigures)}`);
        }
    }
}

export async function collinearity() {
    const answers: { min: number, max: number, decimal: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;

    for (var i = 0; i < 10; i++) {
        const xa: number = randNum(minVal, maxVal, decimal);
        const ya: number = randNum(minVal, maxVal, decimal);

        const xb: number = randNum(minVal, maxVal, decimal);
        const yb: number = randNum(minVal, maxVal, decimal);

        const xc: number = xb + (xb - xa);
        const yc: number = yb + (yb - ya);

        const gradient: number = (yb - ya) / (xb - xa);

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
    const answers: { min: number, max: number, decimal: number, sigFig: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;
    const sigFigures: number = answers.sigFig;

    for (var i = 0; i < 10; i++) {
        const gradient: number = randNum(minVal, maxVal, decimal);
        const perpGrad: number = (-1) / gradient;

        const providedAnswer: { answer: number } = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `If m = ${gradient}, then what is m⟂`,
            }
        ]);

        if (providedAnswer.answer == +perpGrad.toPrecision(sigFigures)) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The correct answer is ${perpGrad.toPrecision(sigFigures)}`);
        }
    }
}

export async function perpBisector() {
    const answers: { min: number, max: number, decimal: number, sigFig: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;
    const sigFigures: number = answers.sigFig;

    for (var i = 0; i < 10; i++) {
        const xa: number = randNum(minVal, maxVal, decimal);
        const ya: number = randNum(minVal, maxVal, decimal);

        const xb: number = randNum(minVal, maxVal, decimal);
        const yb: number = randNum(minVal, maxVal, decimal);

        const xm: number = (xa + xb) / 2;
        const ym: number = (ya + yb) / 2;

        const gradient: number = (yb - ya) / (xb - xa);
        const perpGrad: number = (-1) / gradient;

        const answer: string = yminusb(xm, ym, perpGrad, sigFigures);

        const providedAnswer: { answer: string } = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `A is (${xa}, ${ya}) and B(${xb}, ${yb}). Find the equation of the perpendicular bisector to AB in the form "y = mx + c"`,
            }
        ]);

        if (providedAnswer.answer == answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}

export async function altitudes() {
    const answers: { min: number, max: number, decimal: number, sigFig: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;
    const sigFigures: number = answers.sigFig;

    for (var i = 0; i < 10; i++) {
        const xa: number = randNum(minVal, maxVal, decimal);
        const ya: number = randNum(minVal, maxVal, decimal);

        const xb: number = randNum(minVal, maxVal, decimal);
        const yb: number = randNum(minVal, maxVal, decimal);

        const xc: number = randNum(minVal, maxVal, decimal);
        const yc: number = randNum(minVal, maxVal, decimal);

        const gradCB: number = (yb - yc) / (xb - xc);
        const gradCBPerp: number = (-1) / gradCB;

        const answer: string = yminusb(xa, ya, gradCBPerp, sigFigures);

        const providedAnswer: { answer: string } = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `Triangle ABC has verticies A(${xa}, ${ya}) B(${xb}, ${yb}) C(${xc}, ${yc}). Find the equation of the altitude from A in the form y = mx + c`,
            }
        ]);

        if (providedAnswer.answer == answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The correct answer is ${answer}`);
        }
    }
}

export async function medians() {
    const answers: { min: number, max: number, decimal: number, sigFig: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;
    const sigFigures: number = answers.sigFig;

    for (var i = 0; i < 10; i++) {
        const xa: number = randNum(minVal, maxVal, decimal);
        const ya: number = randNum(minVal, maxVal, decimal);

        const xb: number = randNum(minVal, maxVal, decimal);
        const yb: number = randNum(minVal, maxVal, decimal);

        const xc: number = randNum(minVal, maxVal, decimal);
        const yc: number = randNum(minVal, maxVal, decimal);

        const xm: number = (xb + xc) / 2;
        const ym: number = (yb + yc) / 2;

        const gradAM: number = (ym - ya) / (xm - xa);

        const answer: string = yminusb(xa, ya, gradAM, sigFigures);

        const providedAnswer: { answer: string } = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `Triangle ABC has verticies A(${xa}, ${ya}) B(${xb}, ${yb}) C(${xc}, ${yc}). Find the equation of the median from A in the form y = mx + c`,
            }
        ]);

        if (providedAnswer.answer == answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The correct answer is ${answer}`);
        }
    }
}