// MAP FILTER REDUCE

// MAP

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