let a = 2
console.log(typeof a);
// typeof directly use
console.log(typeof (a));
// use typeof as a method typeof()

// type conversion
let b = true
// console.log(typeof b);
let value = Number(b)
console.log(value);
console.log(typeof value);

// in Number conversion
// "3" = 3
// "3abc" = NaN
// null = 0
// undefine = NaN
// true = 1
// false= 0

let c = null
let num = String(c)
console.log(num);
console.log(typeof num);

// in String conversion
// 3=3
// ""=
// true=true

let d=undefined
let check=Boolean(d)
console.log(check);
console.log(typeof check);

// in Boolean conversion
// 1= true
// 0 = false
// ""= false
// "hii"= true
// null= false
// undefined=false




