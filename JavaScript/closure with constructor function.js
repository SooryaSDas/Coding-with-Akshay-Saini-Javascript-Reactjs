function counter(){
    var count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}
var counter1 = new counter();
//incrementing
counter1.incrementCounter(); // 1
counter1.incrementCounter(); // 2
counter1.incrementCounter();// 3
// decrementing
counter1.decrementCounter(); // 2

// output
// 1
// 2
// 3
// 2