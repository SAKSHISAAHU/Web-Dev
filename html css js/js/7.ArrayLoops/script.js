// ********************************************** HIGH ORDER LOOPS ************************************************
//                                                    for-of
//                                                    for-in
//                                                   for-each
//                                                 map datatype

// for-of loop - Iterates Over Values

    // in Array
    let num=[1,2,3,4,5]
    for (const value of num) {
        console.log(value)
    }

    // in string
    let name="sakshi"
    for (const user of name) {
        console.log(user)
        // console.log(typeof user)
    }

    //object are not iterable in for of loop
    const obj={
        fruit1:"apple",
        fruit2:"banana",
        fruit3:"kiwi"
    }
    // for (const key of obj) {
    //    console.log(key)
    // }

// Map - Datatype
// stores key-value pairs, similar to an object
const myMap=new Map()
myMap.set("name","sakshi");
myMap.set("age", 22);
console.log(myMap)
// there is the difference between both the loop key's output
for (const [key] of myMap) {
    console.log(key)
}
for (const key of myMap) {
    console.log(key)
}


    // for-in loop
    // Iterates Over Indexes (keys)	

    // in Array
    let arr=[10,20,30,40,50]
    for (const value in arr) {
        console.log(arr[value])
    }

    // in String
    let str="string"
    for (const value in str) {
        console.log(str[value])
    }

    // in Object
    let obj1={
        js:"javascript",
        py:"python"
    }
    for (const key in obj1) {
        console.log(key, obj1[key])
    }


// for-each loop

// ["","",""] string in array
// [{},{},{}] object in array

let arr1=[2,4,6,8]
// arror function
arr1.forEach(item => {
    // console.log(item)
});
// norml fuction
arr1.forEach(function(element) {
    // console.log(element)
});

// function and loop seperately declaring
let arr2=[3,5,7,11]
function print(items){
    console.log(items)
}
arr2.forEach(print)

// as a parameter in for-each we not only can access items but also indexes and array also.
let fruits=["apple","kiwi","Orange"] 
fruits.forEach( function (items, index, fruits) {    //order to call is "items" then "index" then "array"
    console.log(`${items} = ${index} - ${fruits}`)
} )

// for-each loop in objects under array
let people=[
    {
        name:"sakshi",
        age:2
    },
    {
        name:"apeksha",
        age:3
    },
    {
        name:"vivaan",
        age:4
    }
]
people.forEach(items=>{
    console.log(`${items.name} - ${items.age}`)
})