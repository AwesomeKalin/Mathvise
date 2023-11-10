import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";
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
        const gradient = (yb - ya) / (xb - xa);
        const providedAnswer = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `Find the gradient between AB when A is (${xa}, ${ya}) and B is (${xb}, ${yb})`,
            }
        ]);
        if (gradient == providedAnswer.answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer was ${gradient}`);
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
        const gradient = (yb - ya) / (xb - xa);
        const yItercept = ya - (gradient * xa);
        let equation = `y = ${gradient.toPrecision(3)}x + ${yItercept.toPrecision(3)}`;
        if (yItercept.toString().includes('-')) {
            equation = `y = ${gradient.toPrecision(3)}x - ${yItercept.toPrecision(3)}`;
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
        const distance = Math.sqrt((Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2)));
        const providedAnswer = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: `Find the distance between AB when A is (${xa}, ${ya}) and B is (${xb}, ${yb})`,
            }
        ]);
        if (distance == providedAnswer.answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The correct answer was ${distance}`);
        }
    }
}
