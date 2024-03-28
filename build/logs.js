import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";
import { table } from "table";
export async function naturalLog() {
    const values = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear? (Must be positive)',
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
    if (values.min < 0) {
        console.log('Must be positive!');
        return;
    }
    for (var i = 0; i < 10; i++) {
        const type = randNum(0, 1, 0);
        let answer;
        let message;
        if (type === 0) {
            const equalTo = randNum(values.min, values.max, values.decimal);
            answer = Math.pow(Math.E, equalTo);
            message = `Solve ln x = ${equalTo}`;
        }
        else {
            const equalTo = randNum(values.min, values.max, values.decimal);
            answer = Math.log(equalTo);
            message = `Solve e^x = ${equalTo}`;
        }
        answer = +answer.toPrecision(values.sigFig);
        const { ans } = await inquirer.prompt({
            type: 'number',
            name: 'ans',
            message,
        });
        if (ans === answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
export async function experimentalData() {
    const values = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear? (Must be positive)',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear? (Numbers may be higher due to rounding, only affects first x and y values)',
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
    if (values.min < 0) {
        console.log('Minimum must be positive!');
        return;
    }
    for (var i = 0; i < 10; i++) {
        const x1 = randNum(values.min, values.max, values.decimal);
        const y1 = randNum(values.min, values.max, values.decimal);
        const xgap1 = Math.abs(randNum(values.min, values.max, values.decimal));
        const ygap1 = Math.abs(randNum(values.min, values.max, values.decimal));
        const x2 = x1 + xgap1;
        const y2 = y1 + ygap1;
        const xgap2 = Math.abs(randNum(values.min, values.max, values.decimal));
        const ygap2 = Math.abs(randNum(values.min, values.max, values.decimal));
        const x3 = x2 + xgap2;
        const y3 = y2 + ygap2;
        const xgap3 = Math.abs(randNum(values.min, values.max, values.decimal));
        const ygap3 = Math.abs(randNum(values.min, values.max, values.decimal));
        const x4 = x3 + xgap3;
        const y4 = y3 + ygap3;
        const xgap4 = Math.abs(randNum(values.min, values.max, values.decimal));
        const ygap4 = Math.abs(randNum(values.min, values.max, values.decimal));
        const x5 = x4 + xgap4;
        const y5 = y4 + ygap4;
        const logx1 = Math.log10(x1);
        const logy1 = Math.log10(y1);
        const logx5 = Math.log10(x5);
        const logy5 = Math.log10(y5);
        const grad = (logy5 - logy1) / (logx5 - logx1);
        const logk = logy1 - (grad * logx1);
        const k = Math.pow(10, logk);
        const answer = `y = ${k.toPrecision(values.sigFig)}x^${grad.toPrecision(values.sigFig)}`;
        const tab = table([
            ['x', x1, x2, x3, x4, x5],
            ['y', y1, y2, y3, y4, y5],
        ]);
        const message = `Experimental data is given below, find the values of k and n for which y = kx^n and state the formula which connects x and y\n${tab}`;
        const { ans } = await inquirer.prompt({
            type: 'input',
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
