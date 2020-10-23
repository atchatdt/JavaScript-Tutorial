function Person(name){
    // if(!new.target){
    //     throw new Error("error")
    // }
    this.name = name
}

Person('abc')
console.log(globalThis.name)