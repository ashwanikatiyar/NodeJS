const placeOrder = (Order) => new Promise((resolve , reject) => {
    setTimeout(() => {
        if(Order==='Coffee'){
            console.log('Order placed for, '+Order)
            resolve(Order)
        }
        else{
            reject('Currently we only take Orders for Coffee')
        }

    }, 1000);
})


const processOrder = (Order) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('Your Order is being processed')
        resolve(Order)
    },2000 )
})

const orderReady = (Order) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('Your Order is ready ')
        resolve(Order)

    }, 3000);
})

// placeOrder('Coffee')
//     .then(processOrder)
//     .then(orderReady)
//     .catch((error) => {
//         console.log('error '+error)
//     })
//Chaining of Promise

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//Now we shall do the same example by another method known as , Asyn - Await

const serverOrder = async () => {
     
    try {
        let orderPlaced = await placeOrder('Coffee')
        console.log(orderPlaced)

        let processedOrder = await processOrder()
        
        let OrderReady = await orderReady()
       
         
    } catch (error) {
        console.log(error)
    }

}

serverOrder() 

