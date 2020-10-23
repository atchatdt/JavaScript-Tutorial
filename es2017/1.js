async function abc() {
    return Promise.reject('xyz')
}

abc()
    .then(data => console.log(data))
    .catch(err => console.log({ err }))
    .finally(console.log('end'));

(async function () {
    try {
        let result = await abc()
        console.log(result)
    } catch (err) {
        console.log({ err1: err })
    }
})()