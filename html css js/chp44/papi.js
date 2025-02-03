// promise API
let p1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1")
    }, 1000);
})
let p2=new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 2")
        reject(Error)
    }, 2000);
})
let p3=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
})

// let p4= Promise.all([p1,p2,p3])
// p4.then((value)=>{
//     console.log(value)
// })

let p5=Promise.allSettled([p1,p2,p3])
p5.then((value)=>{
    console.log(value)
})