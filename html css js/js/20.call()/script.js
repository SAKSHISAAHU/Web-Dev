// Using call() in Constructor Functions
let fun1=function(name){
    this.name=name
    console.log("called")  //it is execute and remove along with its execution context from call stack that is why it doent able to provide its contect to "fun2"
}
let fun2=function(name, email){
    // fun1(name)    //it seems that fun1 is called but it dosent otherwise this.name would contain "name value" context
    // this.name=name
    fun1.call(this, name)   //so we have call method to explicitly call and holding refrence -- functionName.call(thisArg, arg1, arg2, ...) thisArg → The object that should be used as this inside the function.
    this.email=email
}
let user1= new fun2("sakshi","sakshi@demo.com")
console.log(user1)

// passing parameter
function introduce(place, country) {
    console.log(`hello, i am ${this.name} from ${place},${country}`)
}
let person={name:'sakshi'}

introduce.call(person, "Raipur", "India")