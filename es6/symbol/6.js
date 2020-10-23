let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let iterator = numbers[Symbol.iterator]();

while (true) {
    let { value, done } = iterator.next()
    if (done) {
        break;
    }
    console.log(value)
}