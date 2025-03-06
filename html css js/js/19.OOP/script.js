// OOP in JavaScript is a programming paradigm(pattern) based on the concept of objects that contain properties and methods.
// key concepts of oops
//      object literls - Objects store data in key-value pairs.
//      constructor function - A blueprint for creating multiple objects with the same structure.
//      prototype - Every JavaScript object inherits properties and methods from its prototype.
//      inheritance - Allows one object to inherit properties and methods from another.
//      classes
//      instances - An instance is a specific object created from a constructor function or class.

// object literals
let obj= {
    username:"sakshi",
    job:"developer",
    greet:function(){
        console.log(`hello ${this.username}`)
        console.log(this)
    }
}
console.log(this)
console.log(obj.job)
console.log(obj.greet())

// constructor function - used to create objects with the same structure.
function user(name, profile){    //user is a constructor function
    this.name=name               //"this" refers to the object that will be created using "new" keyword - It assigns the "name value" to the object's "name" property.
    this.profile=profile
}
let person1= user("sakshi","developer")
let person2=new user("apeksha","designer")
console.log(person1)   // 🔹 Without new, this would refer to the global object (or undefined in strict mode).
console.log(person2);  // 🔹 With new, this correctly refers to the new "person2" object.
// person1 and person2 are instances of the "user" constructor function.


// 🔹 What Does new Do?
// 1️⃣ Creates a new empty object {}.
// 2️⃣ Assigns this inside function to refer to that newly object.
// 3️⃣ Sets properties (this.name = name) on that object.
// 4️⃣ Returns the object automatically.


// Prototype Chain
//              array --------> object----->null     
//              string --------> object----->null     
//              function --------> object----->null   
// In JavaScript, everything is based on objects, and objects inherit properties and methods through a prototype chain.  
// Array, Function, and String are special objects in JavaScript, and they all inherit from Object.prototype.
// Object.prototype is the top-level prototype, and it ultimately points to null, which means there's nothing beyond it.

//prototype - Every JavaScript object automatically has a prototype, which allows it to share methods and properties with other objects.
    let size="  Sakshi  "
    console.log(size.length)
    String.prototype.trueLength=function(){   //we have created a method name trueLength and using it for different values
        console.log(this)
        console.log(this.trim().length)
    }
    size.trueLength()
    "apeksha".trueLength()

    // example2
    let obj2={
        num:1,
        username:'sakshi'
    }
    Object.prototype.greet=function(){
        console.log(`good morning`)
    }
    obj2.greet()
    let arr=[1,2,3,4]
    arr.greet()   //as array is also made up of object so it also consist of object proprties


// Inheritance
// Inheritance in JavaScript allows an object to access properties and methods from another object using prototypes instead of traditional classes.
// Objects inherit from other objects via __proto__ (or Object.create()).

let details={
    name:'sakshi',
    age:30
}
let teacher={
    isChecker:true,
    __proto__:details  // teacher inherits from details
}
console.log(teacher.age);

let avail={
    isAvailble:true
}
teacher.__proto__=avail;   // teacher inherits from avail
//in morden syntax can write as Object.setPrototypeOf(teacher,avail)
console.log(teacher.isAvailble);



// Everything in JavaScript is either an object or can behave like one??????? because JavaScript uses a prototype-based inheritance system, where even primitive values get temporarily wrapped in objects when accessing properties or methods. 