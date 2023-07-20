// import all packages and modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle} = require('./lib/shapes');

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
            type: 'list',
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

function writeToFile(fileName, answers) {
    let svgString = "";
    // sets the height and width of the logo
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;
  
    //chooses shape based on prompt answer then proceeds to fill in shape color from prompt answer
    let shapeChoice;
    if (answers.shape === "Triangle") {
      shapeChoice = new Triangle();
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "Square") {
      shapeChoice = new Square();
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else {
      shapeChoice = new Circle();
      svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    }
  
    // adds the text with the desired text color to the logo
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";
  
    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  }
  