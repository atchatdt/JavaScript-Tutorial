class WordIterator {
    constructor(data) {
        console.log({data})
        this.data = data.split(/\s/);
        this.index = -1;
    }

    next() {
        this.index++;
        if (this.index < this.data.length) {
            return {
                value: this.data[this.index],
                done: false
            }
        }
        return { done: true };
    }
}
const text = "The quick brown fox jump over a lazy dog";
String.prototype.words = function () {
    const iterable = this;
    console.log(this)
    iterable[Symbol.iterator] = () => new WordIterator(this);
    return iterable;
};

for (let word of text.words()) {
    console.log(word);
}