let list = {
    0: 'JavaScript',
    1: 'Symbol',
    length: 2,
    [Symbol.isConcatSpreadable]:false
};
let message = ['Learning'].concat(list);
console.log(message); // ["Learning", Object]
