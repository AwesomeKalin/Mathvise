import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";

export async function calcGradientStraightLine() {
    const answers: { min: number, max: number, decimal: number } = await inquirer.prompt([
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

        const gradient: number = (yb - ya) / (xb - xa);

        const providedAnswer: { answer: number } = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `Find the gradient between AB when A is (${xa}, ${ya}) and B is (${xb}, ${yb})`,
            }
        ]);

        if (gradient == providedAnswer.answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The correct answer was ${gradient}`);
        }
    }

    return;
}

export async function calcEquStrLine() {
    const answers: { min: number, max: number, decimal: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;

    for (var i = 0; i < 10; i++) {
        const xa: number = randNum(minVal, maxVal, decimal);
        const ya: number = randNum(minVal, maxVal, decimal);

        const xb: number = randNum(minVal, maxVal, decimal);
        const yb: number = randNum(minVal, maxVal, decimal);

        const gradient: number = (yb - ya) / (xb - xa);
        const yItercept: number = ya - (gradient * xa);
        let equation: string = `y = ${gradient.toPrecision(3)}x + ${yItercept.toPrecision(3)}`;

        if (yItercept.toString().includes('-')) {
            equation = `y = ${gradient.toPrecision(3)}x - ${yItercept.toPrecision(3)}`;
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
    const answers: { min: number, max: number, decimal: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;

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

        if (distance == providedAnswer.answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The correct answer was ${distance}`);
        }
    }
}

export async function midpointFormula() {
    const answers: { min: number, max: number, decimal: number } = await inquirer.prompt([
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

    const minVal: number = answers.min;
    const maxVal: number = answers.max;
    const decimal: number = answers.decimal;

    for (var i = 0; i < 10; i++) {
        const xa: number = randNum(minVal, maxVal, decimal);
        const ya: number = randNum(minVal, maxVal, decimal);

        const xb: number = randNum(minVal, maxVal, decimal);
        const yb: number = randNum(minVal, maxVal, decimal);

        const midpointx: number = (xa+xb)/2;
        const midpointy: number = (ya+yb)/2;
        const midpoint: string = `(${midpointx}, ${midpointy})`;

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