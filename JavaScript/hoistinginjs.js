// Hoisting
getName(); // My name is Soorya S Das
console.log(num); // Undefined

var num = 7;
function getName(){
    console.log("My name is Soorya S Das");
}
getName(); // My name is Soorya S Das
console.log(num); // 7

// if the getName funciton is arrow function, it show an error in hoising because it works same as variable.
var getName = ()=>{
    console.log("My name is soorya");
}

// we can declare the funciton in another way
var getName = function(){
    console.log("My name is Soorya S Das"); // same error will shown here
}

// Hoisting --> If we try to access the variable before it inializing it.
