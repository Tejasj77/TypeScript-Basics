// Class Decorator
// Simple Example
function example(target:Function){
    console.log("I will be executed before the instance is called and I am ",target)
}

@example
class Example1{}
// let eg = new Example1();


// Complex Sealing example
function sealed(constructor:Function){
    Object.defineProperty(constructor,'new',{
        value:'test'
    })
    console.log(constructor)
}

@sealed
class Greeter{
    greeting:string = 'Y'
    constructor(message:string){
        this.greeting = message
    }
    getGreet(){
        return "The string used was" + this.greeting
    }
    setGreet(newMsg:string){
        this.greeting = newMsg
    }
}

let ex = new Greeter('Tejas')
// console.log(ex.greeting)
// console.log(ex)
// ex.setGreet('Joshi')
// console.log(ex.greeting)

// Method Decorators
function enumerable(value:boolean):Function{
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        descriptor.enumerable = value
    }
}




