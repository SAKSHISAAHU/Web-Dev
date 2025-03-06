// IIFE(immediately invoke function expression)

// used when we have to immediately runs a function after it is defined

// used when we have some variable declare in global scope and we dont want it to affect function scope or visa versa.

// Creates a private scope
// syntax--(function defin)(execution call);
// if we write 2 IIFE we have to seperate them using semicomma or it will give error


function fun() {        //normal function
    console.log("hello")
}
fun();      //here we have to call this function

(function fun1() {       //named IIFE
    console.log("good mrng")
})();       //here we dont need to call explixitly

((user) => {              //plane IIFE
    console.log(`hello ${user}`)
})("sakshi");