import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";
export async function differentiate() {
    const values = await inquirer.prompt([
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
        const xsquared = randNum(values.min, values.max, values.decimal);
        const x = randNum(values.min, values.max, values.decimal);
        let xDisplay = x;
        let xOperation = '+';
        if (x < 0) {
            xDisplay = 0 - x;
            xOperation = '-';
        }
        const integer = randNum(values.min, values.max, values.decimal);
        let integerDisplay = integer;
        let integerOperation = '+';
        if (integer < 0) {
            integerDisplay = 0 - integer;
            integerOperation = '-';
        }
        const equation = `y = ${xsquared}x^2 ${xOperation} ${xDisplay}x ${integerOperation} ${integerDisplay}`;
        const answer = `dy/dx = ${xsquared * 2}x ${xOperation} ${xDisplay}`;
        const provAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: `If ${equation}, find dy/dx in the form dy/dx = ax + b`,
            },
        ]);
        if (answer === provAnswer.answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
