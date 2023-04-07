// SetTimeout in Closures

function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },3000);
    console.log("settimeout");
}
x();

// output
// settimeout
// 1

function one(){
    for(var i=1;i<=5;i++){
        setTimeout(function x(){
            console.log(i);
        },i*1000);
    }
    console.log("settimeout in var");
}
one();

// output
// settimeout in var
// 6
// 6
// 6
// 6
// 6

function two(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*2000);
    }
    console.log("settimeout in let");
}
two();

// output
// settimeout in let
// 1
// 2
// 3
// 4
// 5
