// async/await in JS

async function weather() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Degree")
        }, 3000);
    })
    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("20 Degree")
        }, 6000);
    })
    let a = await delhiWeather;
    console.log("delhi weather is:" + a);
    let b = await bangloreWeather;
    console.log("banglore weather is:" + b);
    return [a, b]
}
let x = weather()
// console.log(x);
x.then((value)=>{
    console.log(value);
    
})


