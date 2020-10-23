let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(15)
    }, 3 * 100)
})

a
    .then(data => {
        console.log(data);
    })
    .then(data => {
        console.log({data})
    })
    .catch(err => console.log(err))