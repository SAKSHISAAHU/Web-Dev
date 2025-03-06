// declaration
    // using variable
    let promiseOne=new Promise((resolve,reject)=>{
        let num = true
        if (!num) {
            resolve('i am resolved')
        } else {
            reject('error') 
        }
    })
    promiseOne
        .then((value)=>{
            console.log(value)
        })
        .catch((error)=>{
            console.log(error)
        })

    // using keyword
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("hello")
            resolve()
        },2000)
    }).then(()=>{
        console.log("done")
    })

// we can also pass data as parameter inside resolve()
let promiseThree=new Promise((resolve,reject)=>{
    resolve({
        username:'sakshi',
        job:"developer"
    })
})
promiseThree.then((value)=>{
    console.log(value.username)
})

// promise chaining - we can return values from .then() and pass them to the next .then().
let promiseFour=new Promise((resolve,reject)=>{
    resolve(10)
})
promiseFour.then((value)=>{
    return value*2
}).then((value)=>{
    return value+5
}).then((value)=>{
    console.log(value)
})

// promise handle using async/await
let promiseFive=new Promise((resolve,reject)=>{
    let error = true
    if(!error){
        resolve("resolved")
    }else{
        reject("rejected")
    }
})
let result=async ()=>{
    // in order to catch error we use try- catch as it direclty don't handle error
    try {
        let response=await promiseFive
        console.log(response) 
    } catch (error) {
        console.log(error)
    }
}
result()

// Fetching data
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((value)=>{
    console.log(value)
    console.log("fetching done")
})
.catch(()=>{
    console.log("not done")
})