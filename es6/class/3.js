class Point {
    constructor(x, y, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z
    }
    printInfo() {
        console.log(`X: ${this.x}\tY:${this.y}\tZ: ${this.z}`)
    }

    get() {
        return this.x;
    }
    static printInfoXY() {
        console.log(`X: ${this.x}\tY:${this.y}`)
    }
}

class XYZ extends Point {
    constructor(x) { this.x = x }
    print() {
        console.log("OKOK")
    }
}

let abc = new Point(1, 2)
abc.printInfo()
Point.printInfoXY()
console.log(abc.get())

let xyz = new XYZ()
xyz.print()