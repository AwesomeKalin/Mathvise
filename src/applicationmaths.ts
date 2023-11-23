import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";
import { names, uniqueNamesGenerator } from 'unique-names-generator'

export async function accumulation() {
    const values: {
        minCash: number,
        maxCash: number,
        minPercentage: number,
        maxPercentage: number,
        decimal: number,
        calcTime: string,
        interestTime: string,
        minTime: number,
        maxTime: number,
        decimalTime: number
    } = await inquirer.prompt([
        {
            type: 'number',
            name: 'minCash',
            message: 'What is the minimum amount of money that you want to appear?',
        },
        {
            type: 'number',
            name: 'maxCash',
            message: 'What is that maximum amount of money that you want to appear? (May be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'minPercentage',
            message: 'What is the minimum percentage that you want to appear? (Do not add % symbol)',
        },
        {
            type: 'number',
            name: 'maxPercentage',
            message: 'What is the maximum percentage that you want to appear? (Do not add % symbol and may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'How many decimal points do you want the percentage to have?',
        },
        {
            type: 'list',
            name: 'calcTime',
            message: 'In which way do you want time periods to be shown for the calculation?',
            choices: [
                'Months',
                'Quarters',
                'Half-years',
                'Years',
                'Decades',
            ],
        },
        {
            type: 'list',
            name: 'interestTime',
            message: 'In which way do you want interest rates to be shown?',
            choices: [
                'Month',
                'Quarter',
                'Half-year',
                'Year',
                'Decade',
            ],
        },
        {
            type: 'number',
            name: 'minTime',
            message: 'What is the minimum time that you want to appear?',
        },
        {
            type: 'number',
            name: 'maxTime',
            message: 'What is the maximum time that you want to appear? (Might be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimalTime',
            message: 'How many decimal points do you want to appear for the time?',
        },
    ]);

    for (var i = 0; i < 10; i++) {
        const cash: number = randNum(values.minCash, values.maxCash, 2);
        let interest: number = randNum(values.minPercentage, values.maxPercentage, values.decimal);
        const displayInterest: number = interest;
        const time: number = randNum(values.minTime, values.maxTime, values.decimalTime);

        let multiplier: number = 1 + (interest / 100);

        if (values.calcTime == 'Months') {
            switch (values.interestTime) {
                case 'Decade':
                    interest = (Math.pow(multiplier, (1 / 120)) - 1) * 100;
                    break;
                case 'Year':
                    interest = (Math.pow(multiplier, (1 / 12)) - 1) * 100;
                    break;
                case 'Half-year':
                    interest = (Math.pow(multiplier, (1 / 6)) - 1) * 100;
                    break;
                case 'Quarter':
                    interest = (Math.pow(multiplier, (1 / 3)) - 1) * 100;
                    break;
            }
        } else if (values.calcTime == 'Quarters') {
            switch (values.interestTime) {
                case 'Decade':
                    interest = (Math.pow(multiplier, (1 / 40)) - 1) * 100;
                    break;
                case 'Year':
                    interest = (Math.pow(multiplier, (1 / 4)) - 1) * 100;
                    break;
                case 'Half-year':
                    interest = (Math.pow(multiplier, (1 / 2)) - 1) * 100;
                    break;
                case 'Month':
                    interest = (Math.pow(multiplier, 3) - 1) * 100;
                    break;
            }
        } else if (values.calcTime == 'Half-years') {
            switch (values.interestTime) {
                case 'Decade':
                    interest = (Math.pow(multiplier, (1 / 20)) - 1) * 100;
                    break;
                case 'Year':
                    interest = (Math.pow(multiplier, (1 / 2)) - 1) * 100;
                    break;
                case 'Quarter':
                    interest = (Math.pow(multiplier, 2) - 1) * 100;
                    break;
                case 'Month':
                    interest = (Math.pow(multiplier, 6) - 1) * 100;
                    break;
            }
        } else if (values.calcTime == 'Years') {
            switch (values.interestTime) {
                case 'Decade':
                    interest = (Math.pow(multiplier, (1 / 10)) - 1) * 100;
                    break;
                case 'Half-year':
                    interest = (Math.pow(multiplier, 2) - 1) * 100;
                    break;
                case 'Quarter':
                    interest = (Math.pow(multiplier, 4) - 1) * 100;
                    break;
                case 'Month':
                    interest = (Math.pow(multiplier, 12) - 1) * 100;
                    break;
            }
        } else if (values.calcTime == 'Decades') {
            switch (values.interestTime) {
                case 'Year':
                    interest = (Math.pow(multiplier, 10) - 1) * 100;
                    break;
                case 'Half-year':
                    interest = (Math.pow(multiplier, 20) - 1) * 100;
                    break;
                case 'Quarter':
                    interest = (Math.pow(multiplier, 40) - 1) * 100;
                    break;
                case 'Month':
                    interest = (Math.pow(multiplier, 120) - 1) * 100;
                    break;
            }
        }

        multiplier = 1 + (interest / 100);

        const answer: number = +(cash * Math.pow(multiplier, time)).toFixed(2);
        const question: string = `${uniqueNamesGenerator({ dictionaries: [names], })} has deposited £${cash} into a savings account with an interest rate of ${displayInterest}% per ${values.interestTime}. Calculate the amount of money after ${time} ${values.calcTime}`;

        const providedAnswer: { answer: number } = await inquirer.prompt([
            {
                type: 'number',
                name: 'answer',
                message: question,
            }
        ]);

        if (providedAnswer.answer == answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}