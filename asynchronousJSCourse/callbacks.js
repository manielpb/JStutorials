
let order =(fruit_name, call_production) => {
    setTimeout ( ()=> {console.log(`${stocks.Fruit[2]} was selected`)
    call_production()
}, 2000)
}

let production = ()=> {
   setTimeout( ()=> {console.log("production has started")
   setTimeout( ()=> {console.log(`${stocks.Fruit[2]} has been chopped` )
   setTimeout ( ()=> {console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`)
   setTimeout ( ()=> {console.log("start the machine")
   setTimeout ( ()=> {console.log(`${stocks.holder[2]} was selected`)
   setTimeout( ()=> {console.log(`${stocks.toppings[1]} was selected`)
   setTimeout ( ()=> {console.log("ice cream has been selected")},2000)
},3000)
},2000)
},1000)
},1000)
},2000)
} ,0000)
};

order("", production);

// when using callbacks remember to nest the the setTimeout() functions into each other 
//you can follow along at https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/