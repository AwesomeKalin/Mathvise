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

export async function definiteIntegrals() {
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
        let broken: boolean = false;
        let maxIntegral: number = randNum(values.min, values.max, values.decimal);
        let minIntegral: number = randNum(values.min, values.max, values.decimal);

        if (maxIntegral < minIntegral) {
            const maxTemp: number = maxIntegral;
            maxIntegral = minIntegral;
            minIntegral = maxTemp;
        }

        if (maxIntegral === minIntegral) {
            i--;
            broken = true;
        }

        if (!broken) {
            // Pre-Integration
            const xsquared: number = randNum(values.min, values.max, values.decimal);
            let x: number = randNum(values.min, values.max, values.decimal);
            let c: number = randNum(values.min, values.max, values.decimal);

            // Post Integration
            const xcubed: number = xsquared / 3;
            const xsqrt: number = x / 2;

            // Calculate values inside square brackets
            const firstVal: number = (xcubed * Math.pow(maxIntegral, 3)) + (xsqrt * Math.pow(maxIntegral, 2)) + (c * maxIntegral);
            const lastVal: number = (xcubed * Math.pow(minIntegral, 3)) + (xsqrt * Math.pow(minIntegral, 2)) + (c * minIntegral);

            const answer: number = +(firstVal - lastVal).toPrecision(values.sigFig);

            // Determine which operation to show
            let xsqrtOperation: '+' | '-' = '+';
            if (x < 0) {
                xsqrtOperation = '-';
                x = Math.abs(xsqrt);
            }

            let xOperation: '+' | '-' = '+';
            if (c < 0) {
                xOperation = '-';
                c = Math.abs(c);
            }

            // Create message
            let message = `Solve: ∫${maxIntegral}|${minIntegral}`;
            if (xsquared !== 0) {
                message += ` ${xsquared}x^2`;
            }
            if (x !== 0) {
                message += ` ${xsqrtOperation} ${x}x`;
            }
            if (c !== 0) {
                message += ` ${xOperation} ${c}`;
            }
            message += ' dx';

            // Ask
            const { ans }: { ans: number } = await inquirer.prompt({
                type: 'number',
                message,
                name: 'ans',
            });

            if (ans === answer) {
                console.log('Correct!');
            } else {
                console.log(`Incorrect! The answer is ${answer}`);
            }
        }
    }
}