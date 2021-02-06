interface strongPass {
    character:string,
    oneNumber:number
}
interface weakPass {
    threeCharacter:string[]
}

// Generic Interface

interface account<T> {
    username:string,
    password:T
}
// Creating types from Generic Interfaces
type NumberPass = account<number>
type StringPass = account<string>

function getDetails(details:account<weakPass>){
    const {username,...rest} = details
    console.log(details.password.threeCharacter)
}

// Object with account interface coupled with weakPass interface
let newAcc:account<weakPass> = {
    username:'SlyDog',
    password:{
        threeCharacter:['Tejas','Deepak','Joshi']
    }
}

// Object with type NumberPass as enforcer
let FirstNumPass:NumberPass = {
    username:'HyperCooler',
    password:7
}

getDetails(newAcc)