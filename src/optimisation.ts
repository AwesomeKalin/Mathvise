import inquirer from "inquirer";
import terminalImage from "terminal-image";
import { randNum } from "./utils/randNum.js";
import { hcf } from "./utils/hcf.js";

export async function optimisation() {
    const values: { min: number, max: number, min2: number, max2: number, decimal: number } = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'What is the minimum number that you want to appear for the diagram?',
        },
        {
            type: 'number',
            name: 'max',
            message: 'What is the maximum number that you want to appear for the diagram? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'min2',
            message: 'What is the minimum number that you want to appear for the equations?',
        },
        {
            type: 'number',
            name: 'max2',
            message: 'What is the maximum number that you want to appear for the equations? (Numbers may be higher due to rounding)',
        },
        {
            type: 'number',
            name: 'decimal',
            message: 'What is the maximum amount of decimal points do you want to appear?',
        },
    ]);

    for (var i = 0; i < 10; i++) {
        let broken: boolean = false;
        const h: number = randNum(values.min, values.max, values.decimal);
        const xbottom: number = randNum(values.min, values.max, values.decimal);
        const xright: number = randNum(values.min, values.max, values.decimal);
        // xrighth+xbottomxright+hxbottom+xrighth+xbottomh
        const val14: number = (xright * h) * 2
        const val2: number = xbottom * xright;
        const val3: number = h * xbottom;
        const val5: number = xbottom * h;

        if ((val14 + val3 + val5) === 0 || val2 === 0) {
            i--;
            broken = true;
        }

        if (!broken) {
            const answer1: string = `${val2}x^2 + ${val14 + val3 + val5}xh`;
            const area: number = randNum(values.min2, values.max2, values.decimal);

            // V = length x width x height
            // V = xbottom X xright X h
            // h = (area - val2x^2) / (val14 + val3 + val5)x
            // V = xbottom X xright X ((area - val2x^2) / (val14 + val3 + val5)x)

            //console.log(`V = ${xbottom * xright}x^2 * ((${area} - ${val2}x^2) / ${val14 + val3 + val5}x)`);
            const firstXhcf: number = hcf(area, val14 + val3 + val5);
            const firstX: number = (area / firstXhcf) * xbottom * xright;
            const firstXBottom: number = (val14 + val3 + val5) / firstXhcf;
            const fractionhcf: number = hcf(val2, val14 + val3 + val5);
            const fractionTop: number = val2 / fractionhcf;
            const fractionBottom: number = val14 + val3 + val5 / fractionhcf;
            const answer2: string = `V = (${firstX}/${firstXBottom})x + (${fractionTop}/${fractionBottom})x^3`;

            console.log(await terminalImage.file('./src/img/optimisation.png'));
            const { ans1, ans2 }: { ans1: string, ans2: string } = await inquirer.prompt([{
                name: 'ans1',
                type: 'input',
                message: `If the red marker is ${xright}x, the yellow marker ${xbottom}x, and the blue marker is ${h}h, then express Acm^2 in terms of h and x`,
            },
            {
                name: 'ans2',
                type: 'input',
                message: `Given that A=${area}cm^2, show that the volume of the box Vcm^3, is given by ${answer2}`,
            }]);
            
            if (ans1 === answer1) {
                console.log('Part a correct!');
            } else {
                console.log(`Incorrect! The correct answer is ${answer1}`);
            }

            console.log('For part b, check proof');
        }
    }
}