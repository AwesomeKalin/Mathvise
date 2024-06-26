import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";
export async function magnitude() {
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
        const coord1x = randNum(values.min, values.max, values.decimal);
        const coord1y = randNum(values.min, values.max, values.decimal);
        const coord2x = randNum(values.min, values.max, values.decimal);
        const coord2y = randNum(values.min, values.max, values.decimal);
        const vectorx = coord2x - coord1x;
        const vectory = coord2y - coord1y;
        const magnitude = +Math.sqrt(Math.pow(vectorx, 2) + Math.pow(vectory, 2)).toPrecision(values.sigFig);
        const question = `What is the magnitude of AB if A is (${coord1x}, ${coord1y}) and B is (${coord2x}, ${coord2y})?`;
        const answer = await inquirer.prompt({
            type: 'number',
            name: 'answer',
            message: question,
        });
        if (answer.answer === magnitude) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The answer is ${magnitude}`);
        }
    }
}
export async function additionOfVectors() {
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
        }
    ]);
    for (var i = 0; i < 10; i++) {
        const vector1x = randNum(values.min, values.max, values.decimal);
        const vector1y = randNum(values.min, values.max, values.decimal);
        const vector2x = randNum(values.min, values.max, values.decimal);
        const vector2y = randNum(values.min, values.max, values.decimal);
        const resultx = vector1x + vector2x;
        const resulty = vector1y + vector2y;
        const answerCoord = `(${resultx}, ${resulty})`;
        const { answer } = await inquirer.prompt({
            type: 'input',
            name: 'answer',
            message: `If A is the vector (${vector1x}, ${vector1y}) and B is (${vector2x}, ${vector2y}), then what is A+B?`,
        });
        if (answer === answerCoord) {
            console.log('Correct');
        }
        else {
            console.log(`Incorrect! The answer is ${answerCoord}`);
        }
    }
}
export async function subtractionOfVectors() {
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
        }
    ]);
    for (var i = 0; i < 10; i++) {
        const vector1x = randNum(values.min, values.max, values.decimal);
        const vector1y = randNum(values.min, values.max, values.decimal);
        const vector2x = randNum(values.min, values.max, values.decimal);
        const vector2y = randNum(values.min, values.max, values.decimal);
        const resultx = vector1x - vector2x;
        const resulty = vector1y - vector2y;
        const answerCoord = `(${resultx}, ${resulty})`;
        const { answer } = await inquirer.prompt({
            type: 'input',
            name: 'answer',
            message: `If A is the vector (${vector1x}, ${vector1y}) and B is (${vector2x}, ${vector2y}), then what is A-B?`,
        });
        if (answer === answerCoord) {
            console.log('Correct');
        }
        else {
            console.log(`Incorrect! The answer is ${answerCoord}`);
        }
    }
}
export async function multiplicationVectors() {
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
        }
    ]);
    for (var i = 0; i < 10; i++) {
        const multiplyBy = randNum(values.min, values.max, values.decimal);
        const vectorx = randNum(values.min, values.max, values.decimal);
        const vectory = randNum(values.min, values.max, values.decimal);
        const vectorxAnswer = vectorx * multiplyBy;
        const vectoryAnswer = vectory * multiplyBy;
        const answer = `(${vectorxAnswer}, ${vectoryAnswer})`;
        const { provided } = await inquirer.prompt({
            type: 'input',
            name: 'provided',
            message: `If u is (${vectorx}, ${vectory}), then what is ${multiplyBy}u?`,
        });
        if (provided === answer) {
            console.log('Correct');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
export async function positionVector() {
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
        }
    ]);
    for (var i = 0; i < 10; i++) {
        const vector1x = randNum(values.min, values.max, values.decimal);
        const vector1y = randNum(values.min, values.max, values.decimal);
        const vector2x = randNum(values.min, values.max, values.decimal);
        const vector2y = randNum(values.min, values.max, values.decimal);
        const answer = `(${vector2x - vector1x}, ${vector2y - vector1y})`;
        const { provided } = await inquirer.prompt({
            type: 'input',
            name: 'provided',
            message: `If A is (${vector1x}, ${vector1y}) and B is (${vector2x}, ${vector2y}), then what is AB's position vector?`,
        });
        if (provided === answer) {
            console.log('Correct');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
export async function unitVectors() {
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
        const vectorx = randNum(values.min, values.max, values.decimal);
        const vectory = randNum(values.min, values.max, values.decimal);
        const magnitude = Math.sqrt(Math.pow(vectorx, 2) + Math.pow(vectory, 2));
        const answer = `(${(vectorx / magnitude).toPrecision(values.sigFig)}, ${(vectory / magnitude).toPrecision(values.sigFig)})`;
        const { provided } = await inquirer.prompt({
            type: 'input',
            name: 'provided',
            message: `What is the unit vector of (${vectorx}, ${vectory})`,
        });
        if (provided === answer) {
            console.log('Correct');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
export async function sectionFormula() {
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
        const vector1x = randNum(values.min, values.max, values.decimal);
        const vector1y = randNum(values.min, values.max, values.decimal);
        const vector2x = randNum(values.min, values.max, values.decimal);
        const vector2y = randNum(values.min, values.max, values.decimal);
        const ratio = randNum(values.min, values.max, values.decimal);
        const vectorAnswerx = ((ratio * vector1x) + vector2x) / (ratio + 1);
        const vectorAnswery = ((ratio * vector1y) + vector2y) / (ratio + 1);
        const answer = `(${vectorAnswerx.toPrecision(values.sigFig)}, ${vectorAnswery.toPrecision(values.sigFig)})`;
        const { provided } = await inquirer.prompt({
            type: 'input',
            name: 'provided',
            message: `If A is (${vector1x}, ${vector1y}) and B is (${vector2x}, ${vector2y}), what is the point P which divides the line AB in the ratio 1:${ratio}`,
        });
        if (provided === answer) {
            console.log('Correct');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
export async function dotProduct() {
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
        const maga = randNum(values.min, values.max, values.decimal);
        const magb = randNum(values.min, values.max, values.decimal);
        const angle = randNum(1, 180, values.decimal);
        const angleCos = Math.cos((angle * Math.PI) / 180);
        const answer = +(maga * magb * angleCos).toPrecision(values.sigFig);
        const { ans } = await inquirer.prompt({
            type: 'number',
            name: 'ans',
            message: `Find the scalar product for the vectors a and b when |a| = ${maga} units, |b| = ${magb} units and θ = ${angle}°`,
        });
        if (ans === answer) {
            console.log('Correct');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
