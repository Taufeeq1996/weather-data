// console.log('taufeeq')

class Polygon{
    constructor(name) {
        this.type = name;
    }
    itsType() {
        console.log(`I am ${this.type}`);
    }
}

const p = new Polygon('square');

// p.itsType();

class Triangle extends Polygon{

    constructor(id) {
        super(id)
        this.angle = 3;
    }

    noOfSides() {
        console.log(`I am ${this.type} and I have 3 sides and ${this.angle} angles`);
    }
}

const t = new Triangle('triangle');
t.noOfSides();
t.itsType();
