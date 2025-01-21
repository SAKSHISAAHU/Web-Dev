let boxes=document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="red";

document.getElementsByClassName("box")[1].style.backgroundColor="blue"; 
// document.getElementsByClassName("box[1]").style.backgroundColor="pink"; is wrong

document.getElementById("blue").style.backgroundColor="yellowgreen";

document.querySelector(".box").style.backgroundColor="yellow";
// here we can only use class selector for calling out

console.log(document.querySelectorAll(".box"));
// document.querySelectorAll(".box").forEach(Element=>{
//     Element.style.backgroundColor="yellowgreen"
// })
console.log(document.getElementsByTagName("div"));