function Rectangle (w, h) {
    if (this.constructor == Rectangle) {
        Rectangle.setCounter();
    }

    this.width = w || 0;
    this.height = h || 0;
}

(function() {
    var RectangleCount = 0;

    Rectangle.getCounter = function () {
        return RectangleCount;
    };

    Rectangle.setCounter = function () {
        RectangleCount++;
    };
})();

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
}

Rectangle.prototype.toString = function () {
    var message = `(RECTANGLE) Width: ${this.width},
    Height: ${this.height}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;

    return message;
}


var rect1 = new Rectangle();
var rect2 = new Rectangle();

console.log(Rectangle.getCounter());
