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
