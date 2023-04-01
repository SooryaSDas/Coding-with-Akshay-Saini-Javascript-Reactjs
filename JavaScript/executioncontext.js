// varibale num created and assign 2 to num.
var num = 2;
// funciton created taking parameter num
function square(num){
    // creating variable ans and assign the result and return it
    var ans = num * num;
    return ans;
}
// calling the function in variables.
var square1 = square(4);
var square2 = square(num);


// everything in js is happend inside on execution context.
// it has 2 phases 1) memory creation phase  2) code execution phase
// memory creation phase --> creating memory for num, square1, square2, taking all the funciton code
// In code exection part, assign the values to the variables.
// in the case of function, whole function is executed, this whole execution context will be deleted.
// call stack is also known as --> execution context stack, program stack, machine stack, control stack, runtime stack.