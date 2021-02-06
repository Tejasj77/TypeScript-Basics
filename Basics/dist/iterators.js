"use strict";
// Iterators utilize the Symbol.iterator property that is built into objects.
// The objects that have Symbol.iterator property only can be iterable.
// Eg. Array,Maps,Sets etc.
let list = [4, 5, 6, 7, 8];
// for...of => Prints the values 
for (let i of list) {
    console.log(i);
}
// for..in => Prints the keys or indices
for (let i in list) {
    console.log(i);
}
// Another distinction
// for..in only considers the properties i.e which have key-value pairs
// Building an Iterator in TypeScript
class MakeRange {
    constructor(first, last) {
        this._first = first;
        this._last = last;
    }
    // no need to explicitly have IterableIterator<number> as return type
    [Symbol.iterator]() {
        return this;
    }
    // no need to explicitly have IteratorResult<number> as return type.
    next() {
        if (this._first < this._last) {
            return { value: this._first, done: false };
        }
        else if (this._first != 1) {
            return { value: this._last, done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    }
}
for (let item of new MakeRange(0, 10)) {
    console.log(item);
}
