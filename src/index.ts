import inquirer from "inquirer";
import { calcGradientStraightLine } from "./straightLine.js";

function main() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'category',
            message: 'What do you want to revise?',
            choices: [
                'Calculate gradient of a straight line',
                'Distance Formula'
            ]
        }
    ]).then((answers) => {
        switch (answers.category) {
            case 'Calculate gradient of a straight line':
                calcGradientStraightLine().then(function() {
                    main();
                });
        }
    });
}

main();