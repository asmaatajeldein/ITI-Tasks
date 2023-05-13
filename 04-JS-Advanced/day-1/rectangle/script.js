// Object Literal

var Rectangle = {
    width: 200,
    height: 100,
    area: function () {
        return this.width * this.height;
    },
    perimeter: function () {
        return (this.width + this.height) * 2;
    },
    displayInfo: function () {
        var message = `(RECTANGLE) Width: ${this.width},
        Height: ${this.height}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;

        return message;
    }
}

console.log(Rectangle.displayInfo());