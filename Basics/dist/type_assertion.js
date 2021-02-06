"use strict";
function getNameorNumber() {
    console.log(Date.now());
    return (Date.now() % 2) == 0 ? 'string' : 27;
}
let norm = getNameorNumber();
console.log(norm.valueOf());
// norm is asserted to check with the string property
if (norm) {
    console.log(norm.substring(0, 3));
}
