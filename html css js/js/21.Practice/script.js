function check(num) {
    if(num%2===1){
        console.log(`${num} is odd`)
    }else{
        console.log(`${num} is even`)
    }
}
check(3)

function largest(arr) {
   return Math.max(...arr)
}
console.log(largest([2,5,3,7,8]))

function larger(arr) {
    let max= arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(max<arr[i]){
            max=arr[i]
        }
        
    }return max
    
}console.log(larger([2,5,3,7,8,11]))

function reverse(str) {
   return str.split("").reverse().join("")
}
console.log(reverse("hello"))
