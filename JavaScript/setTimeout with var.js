function x(){
    for(var i=1;i<=5;i++){
        function one(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        one(i);
    }
    console.log("setTimeout in var");
}
x();