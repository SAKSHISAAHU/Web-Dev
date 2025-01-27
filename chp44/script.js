function dosomthing(callback) {
    console.log("I am doing something");
    callback();
}
dosomthing(()=>{
    console.log("I am done");
});
