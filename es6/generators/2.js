class Sequence {
    constructor(start = 0, end = Infinity, interval = 1) {
        this.start = start
        this.end = end
        this.interval = interval
    }

    *[Symbol.iterator]() {
        for (let i = this.start; i <= this.end; i += this.interval) {
            yield i;
        }
    }
}

let oddNumber = new Sequence(1, 10, 2)
for (let item of oddNumber) {
    console.log(item)
}
