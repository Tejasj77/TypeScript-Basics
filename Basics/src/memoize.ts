import pMemoize from 'p-memoize'
import got from 'got'

/** Async request to rest api */
const getData = async function(){
    
    const raw_data = await got('https://jsonplaceholder.typicode.com/todos/1')
    const data = raw_data.body
    return data
}

/** Memoization Function */
const memoizeNow = pMemoize(getData,{
    maxAge : 1000*60,
    cacheKey : JSON.stringify
});

let createProm = async ()=>{
    /** Normal API request */
    console.time('getData')
    await getData();
    console.timeEnd('getData')
    console.log('-------Break-------')
    /** Memoization of Request */
    console.time('memoizeNow')
    await memoizeNow();
    console.timeEnd('memoizeNow')
    console.log('-------Break-------')
    /** Calling from Cache Memory due to Memoization */
    console.time('memoizeNow')
    await memoizeNow();
    console.timeEnd('memoizeNow')
    console.log('-------Break-------')
    /** Calling from Cache Memory due to Memoization */
    console.time('memoizeNow')
    await memoizeNow();
    console.timeEnd('memoizeNow')
    console.log('-------Break-------')
    /** Calling from Cache Memory due to Memoization */
    console.time('memoizeNow')
    await memoizeNow();
    console.timeEnd('memoizeNow')
    /** Clearing the memoization */
    pMemoize.clear(memoizeNow)
    console.log('-------Break-------')
    /** Again making the first memoization Call */
    console.time('memoizeNow')
    await memoizeNow();
    console.timeEnd('memoizeNow')

    console.log('-------End-------')
}
createProm();

