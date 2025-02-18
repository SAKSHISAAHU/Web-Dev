// function declaration
    // directly
    function fun() {
        console.log("hello")
    }
    fun()

    // inside variable
    const greet= function fun() {
        console.log("hello")
    }
    fun()

// parameter and argument
function sum(num1,num2) {
    console.log(num1+num2)
}
sum(2,3)
sum(2,"1")
sum("e",4)
sum(5,null)

// "return" concept
function add(num1,num2) {
    let result=num1+num2
    return result
}
const result=add(5,4)
console.log(result)

// parameter overridding
function user(username="vivaan") {
    return `my name is ${username}`
}
console.log(user())
console.log(user("sakshi"))

// rest operator- if we have multiple argument to a single parameter
function value(val1,val2,...num) {
    return num
}
console.log(value(2,3,4,5))

// object in function
const obj={
    id:1,
    user:"sam",
    age:2
}
function funObj(anyObj) {
    console.log (`my name is ${anyObj.user}`)  
}
// funObj(obj)
funObj({
    id:1,
    user:"sam",
    age:2
}
)

// array in function
const arr=[1,2,3,4,5]
function funArr(anyArr) {
    return anyArr[0]    
}
// console.log(funArr(arr))
console.log(funArr([1,2,3,4,5]))
