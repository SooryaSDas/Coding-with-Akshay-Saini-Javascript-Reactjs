function outer(){
    var i = 10;
    function inner(){
        console.log(i);
    }
    return inner;
}
outer()(); // 10

// outer()() --> directly calling the inner function

// if the function takes any argument

function outer(b){
    function inner(){
        console.log(b);
        console.log(a);
    }
    var a = 10;
    return inner;
}
var closer = outer("Namasthe js");
closer();

 //output
// Namasthe js
// 10


// It take outer function

function outest(){
    var c = 10;
    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
        var a = 20;
        return inner;
    }
    return outer;
}
var a = 30;
var closer = outest()("namasthe js");
closer(); // 20 namasthe js 10