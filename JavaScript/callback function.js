setTimeout(function(){
    console.log("timer");
},3000);
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("one");
});

// output
// x
// one
// timer