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

// shape class
class shape {
    constructor(text, textColor, shapeColor) {
        if (letters.length !== 3 || letters.trim() === "") {
            throw new Error("Incorrect value for the 3 letters you input");
        } else {
            this.letters = letters;
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
    render(data) {
        return '<'
    }
}

class circle extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

class square extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}
