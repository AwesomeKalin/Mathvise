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
export async function discriminant() {
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
        const a = randNum(values.min, values.max, values.decimal);
        let b = randNum(values.min, values.max, values.decimal);
        let c = randNum(values.min, values.max, values.decimal);
        const bsquared = Math.pow(b, 2);
        const fourac = -4 * a * c;
        const discriminant = bsquared + fourac;
        let answer;
        if (discriminant > 0) {
            answer = 0;
        }
        if (discriminant === 0) {
            answer = 2;
        }
        else {
            answer = 1;
        }
        let bOperation = '+';
        if (b < 0) {
            bOperation = '-';
            b = Math.abs(b);
        }
        let cOperation = '+';
        if (c < 0) {
            cOperation = '-';
            c = Math.abs(c);
        }
        const { ans } = await inquirer.prompt({
            type: 'number',
            name: 'ans',
            message: `State the nature of the roots for ${a}x^2 ${bOperation} ${b}x ${cOperation} ${c}. Use 0 for real and distinct roots, 1 for no real roots and 2 for 1 real root`,
        });
        if (ans === answer) {
            console.log('Correct');
        }
        else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}
export async function solvingTrigEqu() {
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
            name: 'sigFig',
            message: 'To how many significant figures do you want to give answers to?'
        }
    ]);
    for (var i = 0; i < 10; i++) {
        const a = randNum(values.min, values.max, 0);
        const b = randNum(values.min, values.max, 0);
        const c = randNum(values.min, values.max, 0);
        // 0 for sin, 1 for cos, 2 for tan
        const operation = randNum(0, 1, 0);
        const cRearranged = 0 - c;
        let aDivC = cRearranged / a;
        let broken = false;
        if (aDivC > 1 && aDivC < -1 && operation !== 2) {
            broken = true;
            i--;
        }
        if (!broken) {
            let positive = true;
            if (aDivC < 0) {
                positive = false;
                aDivC = Math.abs(aDivC);
            }
            let val;
            if (operation === 0) {
                if (positive) {
                    val = Math.asin(aDivC) * (180 / Math.PI);
                    if (180 - val < val) {
                        val = 180 - val;
                    }
                }
                else {
                    val = (Math.asin(aDivC) * (180 / Math.PI)) - 180;
                }
            }
            else if (operation === 1) {
                if (positive) {
                    val = Math.acos(aDivC) * (180 / Math.PI);
                    if (360 - val < val) {
                        val = 360 - val;
                    }
                }
                else {
                    val = (Math.acos(aDivC) * (180 / Math.PI)) - 180;
                }
            }
            else if (operation === 2) {
                if (positive) {
                    val = (Math.atan(aDivC) * (180 / Math.PI)) - 180;
                }
                else {
                    val = 180 - (Math.atan(aDivC) * (180 / Math.PI));
                }
            }
            val = +(val / b).toPrecision(values.sigFig);
            let cOperation = '+';
            if (c < 0) {
                cOperation = '-';
            }
            let operationString;
            if (operation === 0) {
                operationString = 'sin';
            }
            else if (operation === 1) {
                operationString = 'cos';
            }
            else {
                operationString = 'tan';
            }
            const { answer } = await inquirer.prompt({
                type: 'number',
                name: 'answer',
                message: `Solve ${a}${operationString}${b}° ${cOperation} ${c} = 0 where 0≤x≤360. Only give smallest value.`,
            });
            if (answer === val) {
                console.log('Correct!');
            }
            else {
                console.log(`Incorrect! The answer is ${val}`);
            }
        }
    }
}
