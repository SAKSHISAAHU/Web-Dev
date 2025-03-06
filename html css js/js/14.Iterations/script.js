// for loops
for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element)
}

let arr=["apple", "mango", "grapes"]
for (let index = 0; index <arr.length; index++) {
    const element =arr[index];
    console.log(element)
}

//nested for loop
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        // console.log(`Inner : ${j}`)
        
    }
    // console.log(`***Outer : ${i}`)
}

// break keyword
for (let i = 0; i <= 5; i++) {
    if (i===3) {
        console.log("stop")
        // break;   //semicolon is mandatory otherwise give error
        continue;
    }
    console.log(i)
}