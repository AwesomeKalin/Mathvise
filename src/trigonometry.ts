import inquirer from "inquirer";
import { randNum } from "./utils/randNum.js";

export async function waveFunction() {
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
        const kcosa: number = randNum(values.min, values.max, values.decimal);
        const ksina: number = randNum(values.min, values.max, values.decimal);

        const k: number = Math.sqrt(Math.pow(kcosa, 2) + Math.pow(ksina, 2));

        let tana: number = ksina / kcosa;

        let c: number = 0;
        let a: number = 0;
        let s: number = 0;
        let t: number = 0;

        if (ksina >= 0) {
            a += 1;
            s += 1;
        } else {
            c += 1;
            t += 1;
        }

        if (kcosa >= 0) {
            c += 1;
            a += 1;
        } else {
            s += 1;
            t += 1;
        }

        if (tana >= 0) {
            a += 1;
            t += 1;
        } else {
            c += 1;
            s += 1;
            tana = 0 - tana;
        }

        let aBracket: number;
        const inversetan: number = Math.tan((tana * Math.PI) / 180);

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

        let operationa: '+' | '-' = '+';

        if (aBracket < 0) {
            operationa = '-';
        }

        let operationsina: '+' | '-' = '+';

        if (ksina < 0) {
            operationsina = '-';
        }

        const answer: string = `${k.toPrecision(values.sigFig)}cos(x-${aBracket.toPrecision(values.sigFig)})°`;
        const message: string = `Write ${kcosa}cosx°${operationsina}${ksina}sinx° in the form kcos(x-a)° (Tip! Press Alt+0176 for degrees symbol)`;

        const { prov }: { prov: string } = await inquirer.prompt({
            type: 'input',
            name: 'prov',
            message,
        });

        if (prov === answer) {
            console.log('Correct!');
        } else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}

export async function discriminant() {
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
        const a: number = randNum(values.min, values.max, values.decimal);
        let b: number = randNum(values.min, values.max, values.decimal);
        let c: number = randNum(values.min, values.max, values.decimal);

        const bsquared: number = Math.pow(b, 2);
        const fourac: number = -4 * a * c;
        const discriminant: number = bsquared + fourac;

        let answer: 0 | 1 | 2;
        if (discriminant > 0) {
            answer = 0;
        } if (discriminant === 0) {
            answer = 2;
        } else {
            answer = 1;
        }

        let bOperation: '+' | '-' = '+';
        if (b < 0) {
            bOperation = '-';
            b = Math.abs(b);
        }

        let cOperation: '+' | '-' = '+';
        if (c < 0) {
            cOperation = '-';
            c = Math.abs(c);
        }

        const { ans }: { ans: number } = await inquirer.prompt({
            type: 'number',
            name: 'ans',
            message: `State the nature of the roots for ${a}x^2 ${bOperation} ${b}x ${cOperation} ${c}. Use 0 for real and distinct roots, 1 for no real roots and 2 for 1 real root`,
        });

        if (ans === answer) {
            console.log('Correct');
        } else {
            console.log(`Incorrect! The answer is ${answer}`);
        }
    }
}

export async function solvingTrigEqu() {
    const values: { min: number, max: number, sigFig: number } = await inquirer.prompt([
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
        const a: number = randNum(values.min, values.max, 0);
        const b: number = randNum(values.min, values.max, 0);
        const c: number = randNum(values.min, values.max, 0);
        // 0 for sin, 1 for cos, 2 for tan
        const operation: number = randNum(0, 1, 0);

        const cRearranged: number = 0 - c;
        let aDivC: number = cRearranged / a;
        let broken: boolean = false;

        if (aDivC > 1 && aDivC < -1 && operation !== 2) {
            broken = true;
            i--;
        }

        if (!broken) {
            let positive: boolean = true;

            if (aDivC < 0) {
                positive = false;
                aDivC = Math.abs(aDivC);
            }

            let val: number;

            if (operation === 0) {
                if (positive) {
                    val = Math.asin(aDivC) * (180 / Math.PI);
                    if (180 - val < val) {
                        val = 180 - val;
                    }
                } else {
                    val = (Math.asin(aDivC) * (180 / Math.PI)) - 180;
                }
            } else if (operation === 1) {
                if (positive) {
                    val = Math.acos(aDivC) * (180 / Math.PI);
                    if (360 - val < val) {
                        val = 360 - val;
                    }
                } else {
                    val = (Math.acos(aDivC) * (180 / Math.PI)) - 180;
                }
            } else if (operation === 2) {
                if (positive) {
                    val = (Math.atan(aDivC) * (180 / Math.PI)) - 180;
                } else {
                    val = 180 - (Math.atan(aDivC) * (180 / Math.PI));
                }
            }

            val = +(val / b).toPrecision(values.sigFig);

            let cOperation: '+' | '-' = '+';
            if (c < 0) {
                cOperation = '-';
            }

            let operationString: 'sin' | 'cos' | 'tan';
            if (operation === 0) {
                operationString = 'sin';
            } else if (operation === 1) {
                operationString = 'cos';
            } else {
                operationString = 'tan';
            }

            const { answer }: { answer: number } = await inquirer.prompt({
                type: 'number',
                name: 'answer',
                message: `Solve ${a}${operationString}${b}° ${cOperation} ${c} = 0 where 0≤x≤360. Only give smallest value.`,
            });

            if (answer === val) {
                console.log('Correct!');
            } else {
                console.log(`Incorrect! The answer is ${val}`);
            }
        }
    }
}