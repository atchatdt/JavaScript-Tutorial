function abc() {
    let arrResult = Array.from(arguments)
    console.log(arrResult)
}

abc(1, 2, 3)


let odd = {
    *[Symbol.iterator]() {
        for (let i = 1; i < 10; i += 2) {
            yield i
        }
    }
}

let arrOdd = Array.from(odd)
console.log(arrOdd)
