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
export async function definiteIntegrals() {
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
        {
            type: 'number',
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    for (var i = 0; i < 10; i++) {
        let broken = false;
        let maxIntegral = randNum(values.min, values.max, values.decimal);
        let minIntegral = randNum(values.min, values.max, values.decimal);
        if (maxIntegral < minIntegral) {
            const maxTemp = maxIntegral;
            maxIntegral = minIntegral;
            minIntegral = maxTemp;
        }
        if (maxIntegral === minIntegral) {
            i--;
            broken = true;
        }
        if (!broken) {
            // Pre-Integration
            const xsquared = randNum(values.min, values.max, values.decimal);
            let x = randNum(values.min, values.max, values.decimal);
            let c = randNum(values.min, values.max, values.decimal);
            // Post Integration
            const xcubed = xsquared / 3;
            const xsqrt = x / 2;
            // Calculate values inside square brackets
            const firstVal = (xcubed * Math.pow(maxIntegral, 3)) + (xsqrt * Math.pow(maxIntegral, 2)) + (c * maxIntegral);
            const lastVal = (xcubed * Math.pow(minIntegral, 3)) + (xsqrt * Math.pow(minIntegral, 2)) + (c * minIntegral);
            const answer = +(firstVal - lastVal).toPrecision(values.sigFig);
            // Determine which operation to show
            let xsqrtOperation = '+';
            if (x < 0) {
                xsqrtOperation = '-';
                x = Math.abs(xsqrt);
            }
            let xOperation = '+';
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
            const { ans } = await inquirer.prompt({
                type: 'number',
                message,
                name: 'ans',
            });
            if (ans === answer) {
                console.log('Correct!');
            }
            else {
                console.log(`Incorrect! The answer is ${answer}`);
            }
        }
    }
}
