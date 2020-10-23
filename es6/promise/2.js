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
    }, 3 * 100)
})
// Promise.all([a, b, c])
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

async function ABC() {
    let x, y, z;
    try {
        [x, y, z] = await Promise.all([a, b, c])
        console.log({ x, y, z })
    } catch (err) {

        console.log({ err, x, y, z })
    }
}

ABC()