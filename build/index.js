import inquirer from "inquirer";
import { calcEquStrLine, calcGradientStraightLine, distanceFormula } from "./straightLine.js";
function main() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'category',
            message: 'What do you want to revise?',
            choices: [
                'Calculate gradient of a straight line',
                'Calculate equation of a straight line',
                'Distance formula',
                'Exit'
            ]
        }
    ]).then((answers) => {
        switch (answers.category) {
            case 'Calculate gradient of a straight line':
                calcGradientStraightLine().then(function () {
                    main();
                });
                break;
            case 'Calculate equation of a straight line':
                calcEquStrLine().then(function () {
                    main();
                });
                break;
            case 'Distance formula':
                distanceFormula().then(function () {
                    main();
                });
                break;
        }
    });
}
main();
