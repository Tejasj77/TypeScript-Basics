"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Class Decorator
// Simple Example
function example(target) {
    console.log("I will be executed before the instance is called and I am ", target);
}
let Example1 = class Example1 {
};
Example1 = __decorate([
    example
], Example1);
// let eg = new Example1();
// Complex Sealing example
function sealed(constructor) {
    Object.defineProperty(constructor, 'new', {
        value: 'test'
    });
    console.log(constructor);
}
let Greeter = class Greeter {
    constructor(message) {
        this.greeting = 'Y';
        this.greeting = message;
    }
    getGreet() {
        return "The string used was" + this.greeting;
    }
    setGreet(newMsg) {
        this.greeting = newMsg;
    }
};
Greeter = __decorate([
    sealed
], Greeter);
let ex = new Greeter('Tejas');
// console.log(ex.greeting)
// console.log(ex)
// ex.setGreet('Joshi')
// console.log(ex.greeting)
// Method Decorators
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
