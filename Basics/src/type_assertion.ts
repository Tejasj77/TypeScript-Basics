function getNameorNumber():string | number {
    console.log(Date.now())
    return (Date.now() % 2)==0?'string':27
}

let norm = getNameorNumber();
console.log(norm.valueOf())
// norm is asserted to check with the string property
if(<string>norm){
    console.log((<string>norm).substring(0,3))
}
