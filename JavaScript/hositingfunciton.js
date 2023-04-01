// Hoisting in Javascript Funcitons
var num = 10;
// Function invocations
a();
b();
console.log(num);
// function a()
function a(){
    var x=4;
    console.log(x);
}
// function b()
function b(){
    var y = 5;
    console.log(y);
}

// In this code exection, global execution context was created.
// created the memory and code component. firstly created the varibale num and assign the value undefined
// then move to funciton a(),b() , it take full function code.
// creat the code component. assign the value 10 to the variable num.
// move to line number 4, function a() invocation, it create the execution context, if the exection cotext created it will go to call stack.
