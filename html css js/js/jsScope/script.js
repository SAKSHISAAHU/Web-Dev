const a=2
//  a=4
{
    const a=200
    console.log(a)
}
console.log(a)

// nested scope
function funOne() {
    const user="sakshi"
    function funTwo() {
        const greet="hii"
        console.log(user)
    }
    funTwo()
    // console.log(greet)
}
funOne()

// hoisting- when we declare a function using variable then we cannt call the function first
    // give error
    // console.log(funName(33))
    const funName=function name(num1) {
        return num1
    }
    // console.log(funName(33))

    // not give error
    console.log((fun(22)))
    function fun(num) {
        return num
    }
    // console.log((fun(22)))