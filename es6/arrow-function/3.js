function show() {
    console.log(arguments)
    return x => x + arguments[0];
}

let display = show(10, 20);
let result = display(5);
console.log(result); // 15