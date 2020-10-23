class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printInfo(){
        console.log(`Name: ${this.name}\nAge: ${this.age}`)
    }
}

let cat = new Animal('kuro', 22)
cat.printInfo.bind({name: "abc", age: 18})()
console.log(typeof(Animal))