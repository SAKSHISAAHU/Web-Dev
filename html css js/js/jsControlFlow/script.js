// if statement
if (2=="2") {
    console.log("equal")
}

// shorthand notation for if
if(5>4)console.log("true"), console.log("5 is greater no.")

// if-else statement
if(2==="2"){
    console.log("equal")
}
else{
    console.log("not equal coz they have differnet datatypes")
}

// if else-if else statement
const num=1000
if (num<500) {
    console.log("500 is greater")
} 
else if(num<750){
    console.log("700 is greater")
}
else if(num<900){
    console.log("900 is greater")
}
else {
    console.log("1200 is greater")
}

// multiple consition cheking using && and ||
const isSmart=true
const isBeautiful=true
const isIntelligent=false

if (isSmart && isIntelligent) {
    console.log("smart and intelligent")
} else{
    console.log("smart only")
}

if (isSmart && isBeautiful ||isIntelligent) {
    console.log("smart, beautiful and intellgent")
} else {
    console.log("no qualities")
}

// switch case statement 
const month="feb"
switch (month) {
    case "jan":
        console.log("jan")
        break;
    case "feb":
        console.log("feb")
        break;
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("apeil")
        break;
    default:
        console.log("not recorgnize")
        break;
}

// falsy values
// A value is falsy if it converts to "false" in a Boolean context.
// values like - false, 0, -0, BigInt On, "" (empty string), null, undefined, NaN
const str=""
if (str) {
    console.log("ture")
} else{
    console.log("false")
}

// truthy values
// A value is truthy if it is not in the falsy list.
// values like- [], {}, "0", "false", " ", function(){} etc
const check=" "
if (check) {
    console.log("ture")
} else{
    console.log("false")
}

const arr=[]
if (arr.length==0) {
    console.log("empty array")
}

const obj={}
if (Object.keys(obj).length==0) {
    console.log("empty object")
}


// nullish coalescing operator(??)-- is used to provide a default value when a variable is null or undefined.
let num1 =2??4
let num2=null??10
let num3=undefined??15

console.log(num1)
console.log(num2)
console.log(num3)

// tearnary operator(? :) - shorthand of if-else
2==2 ? console.log("equal"):console.log("not equal");