import inquirer from "inquirer";
import { calcEquStrLine, calcGradientStraightLine, collinearity, distanceFormula, gradientFormula, midpointFormula, perpendicularLines, perpBisector, altitudes, medians, composite, inverse, inverseTransform } from "./straightLine.js";
import { accumulation, accumulationmultiinterest } from "./applicationmaths.js";

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
                'Midpoint formula',
                'Gradient formula',
                'Collinearity',
                'Perpendicular Lines',
                'Perpendicular Bisectors',
                'Altitudes',
                'Accumulation',
                'Medians',
                'Accumulation with Multiple Interest Rates',
                'Composite Functions',
                'Inverse Functions',
                'Graph Transformations',
                'Exit',
            ]
        }
    ]).then((answers) => {
        switch (answers.category) {
            case 'Calculate gradient of a straight line':
                calcGradientStraightLine().then(function() {
                    main();
                });
                break;
            
            case 'Calculate equation of a straight line':
                calcEquStrLine().then(function() {
                    main();
                });
                break;
            
            case 'Distance formula':
                distanceFormula().then(function() {
                    main();
                });
                break;

            case 'Midpoint formula':
                midpointFormula().then(function() {
                    main();
                });
                break;

            case 'Gradient formula':
                gradientFormula().then(function() {
                    main();
                });
                break;
            
            case 'Collinearity':
                collinearity().then(function() {
                    main()
                });
                break;

            case 'Perpendicular Lines':
                perpendicularLines().then(function () {
                    main();
                });
                break;

            case 'Perpendicular Bisectors':
                perpBisector().then(function() {
                    main();
                });
                break;

            case 'Altitudes':
                altitudes().then(function() {
                    main();
                });
                break;

            case 'Accumulation':
                accumulation().then(function() {
                    main();
                });
                break;

            case 'Medians':
                medians().then(function() {
                    main();
                });
                break;

            case 'Accumulation with Multiple Interest Rates':
                accumulationmultiinterest().then(function() {
                    main();
                });
                break;

            case 'Composite Functions':
                composite().then(function() {
                    main();
                });
                break;

            case 'Inverse Functions':
                inverse().then(function() {
                    main();
                });
                break;

            case 'Graph Transformations':
                inverseTransform().then(function() {
                    main();
                });
                break;
        }
    });
}

main();