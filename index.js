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
const inquirer = require('inquirer');
const fs = require('fs');
const {circle, triangle, square } = require('./lib/shapes');

// user input
function promptUser(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text (up to three characters): '
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (color or hex): '
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
            message: 'Enter shape color (color or hex): '
        }
    ])
    .then((response)=>{
        console.log("Success! SVG logo was created");

        const created = generateLogo(response);
        fs.writeFile('logo.svg', created, (error) =>{
            error ? console.log("error generating logo") : console.log("success");
        });
    })
};

// function to render logo to svg file
function generateLogo(data){
    if (data.shape === 'triangle'){
        const triangle = new triangle(data.text, data.textColor, data.shapeColor);
        return triangle.render(); //should be a string
    }
    if (data.shape === 'square'){
        const square = new square(data.text, data.textColor, data.shapeColor);
        return square.render();
    }
    if (data.shape === 'circle'){
        const circle = new circle(data.text, data.textColor, data.shapeColor);
        return circle.render();
    }
}

// function to initialize app
function init() {
    renderSVG("logo.svg", questions);
}

// function call to initialize app
init();

function init () {
    promptUser();
}