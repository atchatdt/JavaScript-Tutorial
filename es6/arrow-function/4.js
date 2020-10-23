class Counter {
    constructor() {
        this.count = 0;
    }
    next = () => {
        return ++this.count;
    }
    current = () => {
        return this.count;
    }
}

let couter = new Counter();

couter.next()
console.log(couter.current())