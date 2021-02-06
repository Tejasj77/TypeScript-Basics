const { size } = require('lodash')
const _ = require('lodash')
const fetch = require('node-fetch')

let arr1 = [2.2,2,3]
let arr2 = [2,3]

const newarr = _.differenceBy(arr1,arr2)
console.log(newarr)

let arr3 = []
let pusher = (arr)=>{
    let count=0
    while(count<100){
        arr.push(count)
        count++
    }
}
pusher(arr3)
// console.log(arr3)
let chSize = 10
let chunked = _(arr3).chunk(chSize).value()
// console.log(chunked)

const getMe = async ()=>{
    const raw  = await fetch('https://api.github.com/gists/public')
    const data = await raw.json()
    console.log(typeof data)
    
}
getMe().then((ele)=>console.log(ele)).catch((err)=>console.log('Error',err))

let jsonObj = [
    first={
        name:'Tejas',
        surname:'Joshi'
    },
    second = {
        name:'Sylvester',
        surname:'Stallone'
    }
]
const data = JSON.parse(JSON.stringify(jsonObj))
console.log(data)