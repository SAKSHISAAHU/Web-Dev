// this keyword- use whenever we have to refer current context(keys) inside object
let obj={
    username:"sakshi",
    age:22,
    greet:function() {
        console.log(`hello ${this.username}`)
        console.log(this)  //this consist of all the context inside of an object
    }
}
obj.greet   //this dosent run coz it only give us the reference (means where the address of value), in order to execute we need to call using ()
obj.greet()

obj.username="apeksha"
obj.greet()

console.log(this)  //gives empty object coz there is no global object (meanwhile if we run same in browser it will give window object as browser have a global object called window)

// this keyword in function
function fun() {
    const username="sakshi"
    // console.log(this);    // inside function "this" dosent consist of function's context it give us some object coz of that "this.username" gives undefine.
    // console.log(`good morning ${this.username}`) 
}
fun()

// this keyword in arrow function-- also dosent work same as nrml function
const arrow=()=>{
    const user="sakshi"
    console.log(this.user)
}
arrow()

// arrow function declaration ()=>{}
// explicit return
    const addTwo=(num1, num2)=>{
        return num1+num2
    }
    console.log(addTwo(4,5))

// implicit return
    const add=(num1,num2)=>num1+num2
            // both are same
    const sum=(num1,num2)=>(num1+num2)
    console.log(sum(4,6));

// if we have to return object implicitly - then we have to wrap object inside the ()
    const obj1=()=>({username:"sakshi",age:20})

    