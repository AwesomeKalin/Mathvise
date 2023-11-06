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

        const gradient: number = (yb - ya)/(xb - xa);

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