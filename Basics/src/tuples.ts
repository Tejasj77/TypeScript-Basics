let tup1:[string,number,number,number]
tup1 = ['Tejas',7,7,1996]


let [onlyName] = tup1   // Destructuring a tuple
console.log(onlyName)

let [head,...tail] = tup1
console.log(head)       // Destructuring 
console.log(tail)       // Destructuring using the spread operator