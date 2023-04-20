const radius = [3,1,2,4];
                                                // DRY PRINCIPLE
// calcualting area
const calculateArea = function(radius){
    const output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

// output
// [
//     28.274333882308138,
//     3.141592653589793,
//     12.566370614359172,
//     50.26548245743669
//   ]



// calculating circumference
const calculatecicumference = function(radius){
    const output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(calculatecicumference(radius));
// output
// [
//     18.84955592153876,
//     6.283185307179586,
//     12.566370614359172,
//     25.132741228718345
//   ]


// calculating diameter
const calculatediameter = function(radius){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculatediameter(radius));
// output
// [ 6, 2, 4, 8 ]



// higher order function

const calcualte = function(radius, logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output;
}

const area = function(radius){
    return Math.PI * radius * radius;
}
console.log(calcualte(radius, area));

// output
// [
//     28.274333882308138,
//     3.141592653589793,
//     12.566370614359172,
//     50.26548245743669
//   ]


const cicumference = function(radius){
    return 2 * Math.PI * radius;
}
console.log(calcualte(radius, cicumference));
//output
// [
//     18.84955592153876,
//     6.283185307179586,
//     12.566370614359172,
//     25.132741228718345
//   ]


const diameter = function(radius){
    return 2 * radius;
}
console.log(calcualte(radius, diameter));
//output
// [ 6, 2, 4, 8 ]
