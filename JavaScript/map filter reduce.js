// MAP FILTER REDUCE

//............ MAP

const arr = [3,2,5,4,10];

function double(x){
    return x * 2;
}
function triple(x){
    return x * 3;
}
function binary(x){
    return x.toString(binary);
}

const output = arr.map(double);
const tripleoutput = arr.map(triple);
const binaryoutput = arr.map(binary);

console.log(output);
console.log(tripleoutput);
console.log(binaryoutput);

// output
// [ 6, 4, 10, 8, 20 ]
// [ 9, 6, 15, 12, 30 ]
// [ '11', '10', '101', '100', '1010' ]


//............... FILTER

const arr2 = [2,4,5,3,1,10];
// function filterarr(x){
//     return x % 2==0;
// }
// const fill = arr2.filter(filterarr);
const fill = arr2.filter((x)=> x%2);
console.log(fill);

// OUTPUT
// [ 5, 3, 1 ]



//............  REDUCE

const arr3 = [2,4,5,9,10,15,5];

// const result = function x(x){
//     let output = 0;
//     for(let i=0;i<arr3.length;i++){
//         output = output + arr3[i];
//     }
//     return output;
// }
// console.log(result(arr3))

const reduceoutput = arr3.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);

console.log(reduceoutput); // 50
// reduce method takes 2 arguments
// 1, accurate 2, current
// curr - > current array values
// acc -> for calculating and accurate the values
// reduce take 2 values 1, function 2, value(if we want to assign any value to acc we can assign with second value, same as line number 51)