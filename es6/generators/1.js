function* foo() {
    yield console.log("Hello")
    yield console.log("World")
}

let a = foo()
for(let item of a){
    console.log(item)
}