let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(15)
    }, 3 * 100)
})

let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Reject'))
    }, 3 * 100)
})

let c = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(25)
    }, 1 * 100)
})

Promise.race([a,b,c])
.then(data => console.log(data))
.catch(err => console.log(err))