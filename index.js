// Your code here
class Polygon {
    constructor(sides = []) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        const add = (a, b) => a + b
        return this.sides.reduce(add);
    }
}

class Triangle extends Polygon {

}

class Square extends Polygon {
    get isValid() {
        return !!(this.sides[0] == this.sides[1] == this.sides[2] == this.sides[3]);
    }
    get area() {
        return this.sides[0] * this.sides[1]
    }
}