import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";
export async function waveFunction() {
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
        const kcosa = randNum(values.min, values.max, values.decimal);
        const ksina = randNum(values.min, values.max, values.decimal);
        const k = Math.sqrt(Math.pow(kcosa, 2) + Math.pow(ksina, 2));
        let tana = ksina / kcosa;
        let c = 0;
        let a = 0;
        let s = 0;
        let t = 0;
        if (ksina >= 0) {
            a += 1;
            s += 1;
        }
        else {
            c += 1;
            t += 1;
        }
        if (kcosa >= 0) {
            c += 1;
            a += 1;
        }
        else {
            s += 1;
            t += 1;
        }
        if (tana >= 0) {
            a += 1;
            t += 1;
        }
        else {
            c += 1;
            s += 1;
            tana = 0 - tana;
        }
        let aBracket;
        const inversetan = Math.tan((tana * Math.PI) / 180);
        if (c > a && c > t && c > s) {
            aBracket = 360 - inversetan;
        }
        if (a > c && a > s && a > t) {
            aBracket = inversetan;
        }
        if (s > c && s > a && s > t) {
            aBracket = 180 - inversetan;
        }
        if (t > c && t > a && t > s) {
            aBracket = 180 + inversetan;
        }
        let operationa = '+';
        if (aBracket < 0) {
            operationa = '-';
        }
        let operationsina = '+';
        if (ksina < 0) {
            operationsina = '-';
        }
        const answer = `${k.toPrecision(values.sigFig)}cos(x-${aBracket.toPrecision(values.sigFig)})°`;
        const message = `Write ${kcosa}cosx°${operationsina}${ksina}sinx° in the form kcos(x-a)° (Tip! Press Alt+0176 for degrees symbol)`;
        const { prov } = await inquirer.prompt({
            type: 'input',
            name: 'prov',
            message,
        });
        if (prov === answer) {
            console.log('Correct!');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
