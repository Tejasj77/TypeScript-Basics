"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function getDetails(details) {
    const { password } = details, rest = __rest(details, ["password"]);
    console.log(password);
    console.log(details.password.threeCharacter);
}
// Object with account interface coupled with weakPass interface
let newAcc = {
    username: 'SlyDog',
    password: {
        threeCharacter: ['Tejas', 'Deepak', 'Joshi']
    }
};
// Object with type NumberPass as enforcer
let FirstNumPass = {
    username: 'HyperCooler',
    password: 7
};
getDetails(newAcc);
