// Scope Chain
function a(){
    let num = 10;
    function b(){
        var n = 7;
        function c(){
            console.log(num);
        }
        c();
    }
    b();
}
a();

// output 10;
// function c is lexically inside of function b, and the function b is lexically inside the funciton a()
// inside of function a the variable num was created
// inside the function c, consoling num variable, function will search num variable in locally 
// it's not find then move to his lexical parent b
// not find move to the lexical parent a, find the num variable and print in the console.


// lexical environment is the local memory + reference to the lexical environment of it's parentent.