class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    printInfo() {
        console.log(`Name: ${this.name} \t Type: ${this.type}`)
    }
    static [Symbol.hasInstance](obj) {
        return Array.isArray(obj)
    }
}

console.log([] instanceof Animal)

console.log(Array.isArray([]))
console.log(Array.isArray({}))
