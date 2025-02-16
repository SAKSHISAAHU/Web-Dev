//array declaration
let arr=[1,2,3,4,5]
let arr1=[1,"sakshi",false,null]
let arr2=["sakshi","apeksha","vivaan"]
let arr3=new Array(1,2,3,4)

// array methods
console.log(arr.length)
console.log(arr[3]);

arr.push(6)
// console.log(arr);

arr.pop()
// console.log(arr)

arr.unshift(0)
// console.log(arr)

arr.shift()
// console.log(arr)

// console.log(arr1.includes("sakshi"))

// console.log(arr1.indexOf("sakshi"))

// console.log(arr1.join("-"))
let newarr = arr.join("-")
// console.log(newarr)
// console.log(typeof newarr)

// let slice_arr=arr.slice(0,2)
// console.log(slice_arr)
// console.log(arr)

// let splice_arr=arr.splice(0,2)
// console.log(splice_arr)
// console.log(arr)

console.log(arr.toString())

// console.log(arr2.sort())

// arr.push(arr3)
// console.log(arr)

let another_arr=arr.concat(arr3)
console.log(another_arr)

let spread=[...arr,...arr2]
console.log(spread)

let flat_arr=[1,2,3,[4,5],6,[[7,8]],9]
console.log(flat_arr.flat(3))

console.log(Array.isArray(["sakshi"]))
console.log(Array.from("sakshi"))
console.log(Array.of("sakshi","apeksha","vivaan"))
console.log(Array.of())

console.log(arr2.reverse())

