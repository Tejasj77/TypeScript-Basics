const Queue = require('bull')

let arr = [1,2,3]
let arr2 = [3,4,5]

let newQ = new Queue('QueueName');
newQ.add(arr)
let prom = newQ.process(()=>{console.log('Hit')})
newQ.add(arr2);
prom.then(()=>{console.log('executed')})