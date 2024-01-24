let stocks = {
    Fruit: ["strawberry", "grapes","banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone","cup","stick"],
    toppings: ["chocolate", "peanuts"],
};

let shop_open = true;

// create a function that takes a relationship between work and time
//inside the function, the promise is made.The promise takes in two param, resolve and reject
// if true resolve which contains the timeout runs and the .then belows and  if else runs the reject and .catch
//then after both runs the .finally runs

let order = ( time, work ) => {

    return new Promise( (resolve, reject)=> {
        if(shop_open){

            setTimeout( ()=> {
                resolve( work() )

            },time)
          
        }
        else {
            reject( console.log("my shop is closed"))
        }
    })

}

order(2000, ()=>console.log(`${stocks.Fruit[3]} was selected`))

.then( ()=>{
    return order(0000,()=> console.log('Production has started'))
} )

.then ( ()=> {
    return order(2000,()=> console.log(`${stocks.Fruit[3]} has been chopped`))
} )

.then ( ()=> {
    return order(1000,()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})

.then ( ()=> {
    return order(1000, ()=>console.log('Start the machine'))
})

.then ( ()=>{
    return order(2000, ()=>console.log(`${stocks.holder[1]} was selected`))})

.then ( ()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[1]} was selected`))
})

.then ( ()=>{
    return order(2000, ()=> console.log("Serve Ice Cream"))
})

.catch ( ()=> {
    console.log('Customer left')
})

.finally ( ()=>{
    console.log('end of day')
})

//you can follow along at https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/