function Shape (x, y) {
    if (this.constructor == Shape) {
        throw("Shape is not a constructor");
    }

    this.x = x || 0;
    this.y = y || 0;
}

//////////////////////////////////////////////////////////

function Rectangle(rX, rY) {

    if (Rectangle.getCounter() === 1){
        throw("Only one instance of Rectangle is allowed to be created.");
    }

    Rectangle.setCounter();

    Shape.call(this, rX, rY);
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
}

////////////////////////////////////////////////////////////

function Square(sX, sY) {

    if (Square.getCounter() === 1){
        throw("Only one instance of Square is allowed to be created.");
    }

    Square.setCounter();

    Rectangle.call(this, sX, sY);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.perimeter = function () {
    return 4 * sX;
}

/////////////////////////////////////////////////////////

(function() {
    var rectCounter = 0;
    var squareCounter = 0;

    Rectangle.getCounter = function () {
        return rectCounter;
    }

    Rectangle.setCounter = function () {
        rectCounter++;
    }

    Square.getCounter = function () {
        return squareCounter;
    }

    Square.setCounter = function () {
        squareCounter++;
    }
})();
