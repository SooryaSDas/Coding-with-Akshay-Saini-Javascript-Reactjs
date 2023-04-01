// Hoisting in Javascript Funcitons
var x = 10;
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
    var x = 5;
    console.log(x);
}

// In this code exection, global execution context was created.
// created the memory and code component. firstly created the varibale x and assign the value undefined
// then move to funciton a(),b() , it take full function code.
// creat the code component. assign the value 10 to the variable x.
// move to line number 4, function a() invocation, it create the execution context, if the exection cotext created it will go to call stack.
// memory assign x is undefined, after the code component 10 is assigned to x variable.
// Move to funciton a, variable x is assign to 4, in console, searching for varibale x locally and print 4 in console.
// move the function b, assign the value 5 to variable x, console the value x, searching locally and find it is in 5. print it.
// after the full exection completed the execution context was deleted. even the call stack global exection context also deleted.