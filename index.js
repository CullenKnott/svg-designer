// import all packages and modules
const inquirer = require('inquirer');
const fs = require('fs');
const { triangle, square, circle} = require('./lib/shapes');

// https://github.com/rmessett15/SVG-Logo-Maker

// inquirer prompts to create the SVG logo
function svgPrompts() {
    inquirer
    .prompt([
        //3 characters
        {
            type: 'input',
            message: 'Enter three characters to be displayed in the logo.',
            name: 'text',
            validate: text => {
                if (text.length <= 3) {
                    return true;
                } else {
                    console.log('Please enter no more than three characters.')
                    return false;
                }
            }
        },
        // text color
        {
            type: 'input',
            message: 'Choose a text color (use a keyword or hexadecimal number).',
            name: 'textColor',
            validate: textColor => {
                if (textColor) {
                    return true;
                } else {
                    console.log('Please select a color for your text.')
                    return false;
                }
            }
        },
        // shapes
        {
            type: 'checkbox',
            message: 'Please choose a shape for your logo',
            name: 'shape',
            choices:['Triangle', 'Square', 'Circle'],
            validate: shape => {
                if (shape) {
                    return true;
                } else {
                    console.log('Please choose a shape for your logo.')
                    return false;
                }
            }
        },
        // shape color
        {
            type: 'input',
            message: 'Choose a color for the shape that you have chosen (use a keyword or hexidecimal number).',
            name: 'shapeColor',
            validate: shapeColor => {
                if (shapeColor) {
                    return true
                } else {
                    console.log('Please select a color for the shape you have chosen.')
                    return false
                }
            }
        }
    ])
    .then((answers) => {
        writeToFile('logo.svg', answers);
    });
}

svgPrompts();

function writeToFile(file)
