//Making Promise (Easy & traditional manner)

let myPromise = new Promise( (resolve , reject) => {
    
    const a = 25;
    const b = 20;

    setTimeout(() => {
        if (a === b) {
            resolve('Promise fulfilled');
        } else {
            reject('Promise rejected');
        }
    }, 2000);
});

//Checking if Promise is fullfilled or not
myPromise.then(function(result) {
    console.log(result);
}).catch(function(failedResult) { 
    console.log(failedResult);
});






/* -------------------------------------------------------------------------------------------------------------------------------------------------------
             Shorter version                                                                                                                                       */
             const a = 25;
             const b = 20;
             
             const myPromise2 = new Promise((resolve, reject) => {
                 setTimeout(() => {                                                        
                     a === b ? resolve('Promise fulfilled') : reject('Promise rejected'); //condition ? value_if_true : value_if_false
                 }, 2000);                                                               
                 
                                                                                        //It is a ternary operator, and it works similarly
                                                                                        //to an if...else 
             });
             
             myPromise2
                 .then(result => console.log(result))
                 .catch(failedResult => console.log(failedResult));
             













/* -------------------------------------------------------------------------------------------------------------------------------------------------------
             Shortest version                                                                                                                                        */ 
             const e = 20;
             const f = 20;
             
             new Promise((resolve, reject) => {
                 setTimeout(() => (e === f) ? resolve('Promise fulfilled') : reject('Promise rejected'), 2000);
             })
             .then(console.log)
             .catch(console.log);