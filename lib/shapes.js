// validate colors
const colors = 'red orange yellow green blue purple black white brown'.split(" ");

function validateColors(color){
  if (colors.indexOf(color) === -1){
    return false;
  }
  return true;
}
function validateHEX(color) {
  const hexColorRegex = /^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/;
  return hexColorRegex.test(color);
}

// shape class
class shape {
    constructor(text, textColor, shapeColor) {
        if (text.length !== 3 || text.trim() === "") {
            throw new Error("Incorrect value for the 3 text you input");
        } else {
            this.text = text;
        }
        if (validateColors(textColor) || validateHEX(textColor)){
            this.textColor = textColor; 
        }
        else {
            throw new Error("Incorrect text color input");
        }
        if (validateColors(shapeColor) || validateHEX(shapeColor)){
        this.shapeColor = shapeColor; 
        }
        else {
            throw new Error("Incorrect shape color input");
        }
    }
    render (){
        throw new Error("Should never see this if your child classes use polymorphism to actually override this method");
    }
}

class triangle extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    // returns a string for the corresponding SVG file with the given shape color
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       
            <polygon points="100,10 40,198 190,198" fill="${this.shapeColor}" />
       
            <text x="110" y="140" font-size="24" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class circle extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
       
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class square extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       
            <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
       
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
    }
}
var utils = {
    Shape,
    Circle,
    Triangle,
    Square
}
