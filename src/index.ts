import inquirer from "inquirer";
import { calcEquStrLine, calcGradientStraightLine, collinearity, distanceFormula, gradientFormula, midpointFormula, perpendicularLines, perpBisector, altitudes, medians, composite, inverse, inverseTransform, logFunctions } from "./straightLine.js";
import { accumulation, accumulationmultiinterest } from "./applicationmaths.js";
import { definiteIntegrals, differentiate } from "./differentiation.js";
import { additionOfVectors, dotProduct, magnitude, multiplicationVectors, positionVector, sectionFormula, subtractionOfVectors, unitVectors } from "./vectors.js";
import { discriminant, waveFunction } from "./trigonometry.js";
import { experimentalData, naturalLog } from "./logs.js";
import { optimisation } from "./optimisation.js";

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
                'Log functions',
                'Differentiate',
                'Magnitudes',
                'Addition of Vectors',
                'Subtraction of Vectors',
                'Multiplication by a Scalar',
                'Position Vectors',
                'Unit Vectors',
                'Section Formula',
                'Wave Function',
                'Natural Log',
                'Experimental Data',
                'Definite Integrals',
                'Optimisation',
                'Dot Product',
                'Discriminant',
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

            case 'Log functions':
                logFunctions().then(function() {
                    main();
                });
                break;

            case 'Differentiate':
                differentiate().then(function() {
                    main();
                });
                break;

            case 'Magnitudes':
                magnitude().then(function() {
                    main();
                });
                break;

            case 'Addition of Vectors':
                additionOfVectors().then(function() {
                    main();
                });
                break;

            case 'Subtraction of Vectors':
                subtractionOfVectors().then(function() {
                    main();
                });
                break;

            case 'Multiplication by a Scalar':
                multiplicationVectors().then(function() {
                    main();
                });
                break;

            case 'Position Vectors':
                positionVector().then(function() {
                    main();
                });
                break;

            case 'Unit Vectors':
                unitVectors().then(function() {
                    main();
                });
                break;

            case 'Section Formula':
                sectionFormula().then(function() {
                    main();
                });
                break;

            case 'Wave Function':
                waveFunction().then(function() {
                    main();
                });
                break;

            case 'Natural Log':
                naturalLog().then(function() {
                    main();
                });
                break;

            case 'Experimental Data':
                experimentalData().then(function() {
                    main();
                });
                break;

            case 'Definite Integrals':
                definiteIntegrals().then(function() {
                    main();
                });
                break;

            case 'Optimisation':
                optimisation().then(function() {
                    main();
                });
                break;

            case 'Dot Product':
                dotProduct().then(function() {
                    main();
                });
                break;

            case 'Discriminant':
                discriminant().then(function() {
                    main();
                });
                break;
        }
    });
}

main();