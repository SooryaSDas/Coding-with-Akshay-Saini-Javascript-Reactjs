// Closures

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x(); // 7

function x(){
    var x = 10;
    function y(){
        console.log(x);
    }
    return y;
}
var z = x();
console.log(z); // [Function: y]
z(); // 10