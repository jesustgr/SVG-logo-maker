// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

// import required modules
const prompt = require('inquirer');
const fs = require('fs');
const svg = require('svg.js');

// inquirer prompt to get user input
inquirer = prompt(
    {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to three characters): '
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color: '
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Enter shape: ',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color: '
    }
)