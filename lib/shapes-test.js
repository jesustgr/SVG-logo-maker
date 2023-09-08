const {shape, circle, square, triangle} = require('../lib/shapes');

// tests for circle class
describe('Cirlce',()=>{
    describe('input the 3 letters',() => {
        it('Should throw an error if the user enters more than 3 characters',()=>{
            let cb = () => {
                let newObj = new Shape('aaaa', 'blue', 'blue');
                return newObj;
                
            }
            expect(cb).toThrowError("Incorrect value for the 3 letters you input");
        });
        it('Should throw an error if the user enters no letters',()=>{
            let cb = () => {
                let newObj = new Shape('', 'blue', 'blue');
                return newObj;
            } 
            expect(cb).toThrowError("Incorrect value for the 3 letters you input");
        });
    });
    describe('inputting the text/shape color',()=>{
        it('should throw an error if user doesnt enter a valid RBG variant',()=>{

            let cb = () =>{
                let newObj = new Shape('aaa', 'silver', 'red');
                return newObj;
            }
            expect(cb).toThrowError("Incorrect text color input");
        });
        it('should throw an error if user doesnt enter a valid hex variant',()=>{

            let cb = () =>{
                let newObj = new Shape('aaa', '#ffffffff', 'red');
                return newObj;
            }
            expect(cb).toThrowError("Incorrect text color input");
        });
    });
});

// tests for square class
describe('Square',()=>{
    describe('input the 3 letters',() => {
        it('Should throw an error if the user enters more than 3 characters',()=>{
            let cb = () => {
                let newObj = new Shape('aaaa', 'blue', 'blue');
                return newObj;
                
            }
            expect(cb).toThrowError("Incorrect value for the 3 letters you input");
        });
        it('Should throw an error if the user enters no letters',()=>{
            let cb = () => {
                let newObj = new Shape('', 'blue', 'blue');
                return newObj;
            } 
            expect(cb).toThrowError("Incorrect value for the 3 letters you input");
        });
    });
    describe('inputting the text/shape color',()=>{
        it('should throw an error if user doesnt enter a valid RBG variant',()=>{

            let cb = () =>{
                let newObj = new Shape('aaa', 'silver', 'red');
                return newObj;
            }
            expect(cb).toThrowError("Incorrect text color input");
        });
        it('should throw an error if user doesnt enter a valid hex variant',()=>{

            let cb = () =>{
                let newObj = new Shape('aaa', '#ffffffff', 'red');
                return newObj;
            }
            expect(cb).toThrowError("Incorrect text color input");
        });
    });
});

