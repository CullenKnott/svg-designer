const { Triangle, Circle, Square } = require("./shapes");

describe('Triangle', () => {
    test('test for a triangle with a pink background', () =>{
        const shape = new Triangle();
        shape.setColor("pink");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="pink" />'
        );
    });
});

describe('Square', () => {
    test('test for a square with a orange background', () =>{
        const shape = new Square();
        shape.setColor("orange");
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="orange" />'
        );
    });
});

describe('Circle', () => {
    test('test for a circle with a #6e6e6e background', () =>{
        const shape = new Circle();
        shape.setColor("#6e6e6e");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="#6e6e6e" />'
        );
    });
});

