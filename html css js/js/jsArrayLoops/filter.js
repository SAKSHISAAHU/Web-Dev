// FILTER
// it is method in array is used to returns a new array that contains only the elements that meet a certain condition
// use when you want to REMOVE some elements based on a condition.
// 3 parameters items, index and array.
let arr=[1,2,3,4,5,6,7,8,9,10]
const value=arr.filter((item)=>{
    return item>5
})
console.log(value)

// same consition using foreach
let newArr=[]
arr.forEach((item)=>{
    if(item<=5){
        newArr.push(item)
    }
})
console.log(newArr)

const people = [
    { id: 1, name: "Alice", age: 25, city: "New York", isEmployed: true },
    { id: 2, name: "Bob", age: 30, city: "Los Angeles", isEmployed: false },
    { id: 3, name: "Charlie", age: 22, city: "Chicago", isEmployed: true },
    { id: 4, name: "David", age: 35, city: "Houston", isEmployed: false },
    { id: 5, name: "Eve", age: 28, city: "Miami", isEmployed: true }
];
const data=people.filter((item)=>{
    return item.age>30 && item.isEmployed==false
})  
console.log(data)

// --------------------------------------------------------------------------------------

// MAP method
// it is used to return a new array by modifying each element in the original array.
// use when you want to CHANGE all elements.
// 3 parameters items, index and array.
let myarr=[1,2,3,4,5]
// declaration
const val=myarr.map((item)=>{
    return item*10
})
console.log(val)

// printing every item as list
myarr.map((item)=>{
    console.log(item)
})

// method chaining
const chain=myarr.map((item)=>(item*2)).map((item)=>(item-1)).filter((item)=>(item>6))
console.log(chain)

// ------------------------------------------------------------------------------------------------------------------------

// REDUCE method
// it is a method used to reduce an array to a single value by performing a function on each element.
// it have 4 parameter accumulator, currentvalue(arrayitems), index, array, initialvalue(0, starting value of accumulator)
let num=[1,2,3,4]
let sum=num.reduce((acc, item)=>{
    return acc+item;
},0);
console.log(sum)

// example - object under array
let cart=[
    {
        item:"cap",
        price:300
    },
    {
        item:"shirt",
        price:500
    },
    {
        item:"purse",
        price:3000
    }
]
let price=cart.reduce((acc,items)=>{
    return acc+items.price;
},0)
console.log(price)