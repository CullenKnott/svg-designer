// class shape to define colors of the logo
class Shape {
    constructor() {
        this.color = ""
    }
    setColor(colorSet) {
        this.color = colorSet;
    }
};

// shape classes 'triangle, square, circle' to define what each shape is
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
};

class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
};

//export each class 

module.exports = { Triangle, Square, Circle };