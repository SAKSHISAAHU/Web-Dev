                    // declaration of symbol in oject keys- we use [] bracket, we cannot wite it direclty
                    const mySym=Symbol("hii")

// declaration by literals
const objName={
    user: "sakshi",
    "full name": "sakshi sahu",
    [mySym]:"hii",
    age: 22,
    college: "SSIPMT",
    profile: "developer"
}
// object access
    // mostly used
    console.log(objName)
    console.log(objName.user)
// whernever if we want to acess any key which is wrtten as "string" or "symbol" we access them as,
console.log(objName["full name"])
console.log(objName[mySym])

// changes in object
objName.user="apeksha"
console.log(objName.user)
// Object.freeze(objName)
objName.user="vivaan"
console.log(objName.user)

// we can also declare function inside object
objName.greet=function () {
    console.log("hello")
}
console.log(objName.greet())

// whenever we have to reference same object we do it using "this"
objName.greet2=function(){
    console.log(`my name is ${this.user}`)
}
console.log(objName.greet2())

// ***************************************************************

// declaration by constructor gives singleton object
const obj1=new Object()
console.log(obj1)

// declration using another method 
const obj2={}
obj2.id=1
obj2.name="sakshi"
console.log(obj2)

// nested object
const obj3={
    id:1,
    userName:{
        fullName:{
            firstName:"sakshi",
            lastName:"sahu"
        }
    }
}
console.log(obj3.userName.fullName.lastName)

// Object merging 1.object.assign 
//                2.spread operator
const one={1:"a", 2:"b"}
const two={3:"c", 4:"d"}
const three=Object.assign({},one,two)
console.log(three)

const spread={...one,...two}
console.log(spread)

// we can store an object inside an array
const arr=[
    {
        id:1,
        user:"sam"
    },
    {
        id:2,
        user:"viv"
    }
]
console.log(arr[1].user)

//objects methods
console.log(Object.keys(obj2))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))
console.log(obj2.hasOwnProperty('age'))

// object destructuring
const course={
    coursename:"javascript",
    courseinstructor:"sakshi",
    price:1000
}
// console.log(course.coursename) instead of writting this we write
const {coursename}=course
console.log(coursename)
const{courseinstructor:teacher}=course
console.log(teacher)