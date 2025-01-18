console.log("Hello")
//global variable - var
var a =2;
var b= 3;
{
    var a = 4;
    console.log(a+b)
}
console.log(a+b)

//block variable - let
let c =3;
let d= 3;
{
    let c = 5;
    console.log(c+d)
}
console.log(c+d)

//primitive data type
let p = 22;
let q=23.8;
let r = "Sakshi";
let x = true;
let y = undefined;
let z = null;

console.log(p, q, r, x, y, z)
console.log(typeof p, typeof q, typeof r, typeof x, typeof y, typeof z)

//object datatype
let obj = {
    "Name":"Sakshi Sahu",
    "Job":"developer",
    "Age": 22,
    "is_inteligent":true,
}
console.log(obj)
console.log(typeof obj)

