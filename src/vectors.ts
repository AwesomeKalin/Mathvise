import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";

export async function magnitude() {
    const values: { min: number, max: number, decimal: number, sigFig: number } = await inquirer.prompt([
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

    for (var i = 0; i < 10; i++) {
        const coord1x: number = randNum(values.min, values.max, values.decimal);
        const coord1y: number = randNum(values.min, values.max, values.decimal);

        const coord2x: number = randNum(values.min, values.max, values.decimal);
        const coord2y: number = randNum(values.min, values.max, values.decimal);

        const vectorx: number = coord2x - coord1x;
        const vectory: number = coord2y - coord1y;

        const magnitude: number = +Math.sqrt(Math.pow(vectorx, 2) + Math.pow(vectory, 2)).toPrecision(values.sigFig);

        const question: string = `What is the magnitude of AB if A is (${coord1x}, ${coord1y}) and B is (${coord2x}, ${coord2y})?`;

        const answer: { answer: number } = await inquirer.prompt({
            type: 'number',
            name: 'answer',
            message: question,
        });

        if (answer.answer === magnitude) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The answer is ${magnitude}`);
        }
    }
}