function dosomthing(callback) {
    console.log("I am doing something");
    callback();
}
dosomthing(() => {
    console.log("I am done");
});



// Promises
let mypromise = new Promise((resolve, reject) => {
    let x = 0;
    if (x === 0) {
        resolve("correct")
    } else {
        reject("incorrect")
    }
})
console.log(mypromise);



// catching peomise using .then() and .catch()
let a = new Promise((resolve, reject) => {
    // resolve("promise resolved")
    reject("promise is rejected")
})
// a.then((value)=>{
//     console.log(value)
// })
a.catch((error) => {
    console.log(error);
});



// attaching multiple handler to one promise
let p = new Promise((resolve, reject) => {
    resolve("hello")
})
    .then((value) => {
        console.log(value);
    })
    .then(() => {
        console.log("hello again");
    })
    .then(() => {
        console.log("ok bye!");
    })