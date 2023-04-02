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
