import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";

export async function differentiate() {
    const values: { min: number, max: number, decimal: number } = await inquirer.prompt([
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
    ]);

    for (var i = 0; i < 10; i++) {
        const xsquared: number = randNum(values.min, values.max, values.decimal);
        const x: number = randNum(values.min, values.max, values.decimal);
        let xDisplay: number = x;
        let xOperation: '+' | '-' = '+';

        if (x < 0) {
            xDisplay = 0 - x;
            xOperation = '-';
        }

        const integer: number = randNum(values.min, values.max, values.decimal);
        let integerDisplay: number = integer;
        let integerOperation: '+' | '-' = '+';

        if (integer < 0) {
            integerDisplay = 0 - integer;
            integerOperation = '-';
        }

        const equation: string = `y = ${xsquared}x^2 ${xOperation} ${xDisplay}x ${integerOperation} ${integerDisplay}`;
        const answer: string = `dy/dx = ${xsquared * 2}x ${xOperation} ${xDisplay}`;

        const provAnswer: { answer: string } = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `If ${equation}, find dy/dx in the form dy/dx = ax + b`,
            },
        ]);

        if (answer === provAnswer.answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}