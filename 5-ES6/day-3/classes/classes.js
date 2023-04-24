class Shape {
    constructor(x=0) {
        if(this.constructor === Shape) {
            throw("Shape is an abstract class.")
        }
        this.x = x;
    }

    calcArea() {}
    calcPerimeter() {}

    toString() {
        return `Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
    }
}

export class Circle extends Shape {
    constructor(r=0){
        super(r);
    }

    calcArea() {
        return Math.PI * this.x**2;
    }

    calcPerimeter() {
        return 2 * Math.PI * this.x;
    }
}

export class Square extends Shape {
    constructor(x=0){
        super(x);
    }

    calcArea() {
        return this.x**2;
    }

    calcPerimeter() {
        return 4 * this.x;
    }
}

export class Rectangle extends Shape {
    constructor(w=0, h=0){
        super(w);
        this.y = h;
    }

    calcArea() {
        return this.x * this.y;
    }

    calcPerimeter() {
        return 2 * (this.x + this.y);
    }
}