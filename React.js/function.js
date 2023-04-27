function x(){
    console.log(this);
    function y(){
        console.log(this);
        function z(){
            console.log(this);
        }
        z();
    }
    y();
}
x();

const person = {
    name : "soorya"
}

const person2 = {
    name : "sandra"
}

function n(){
    console.log(this);
}

n();
n.call(this);
n.call(person);
n.call(person2);

// 
const person3 = {
    name : "soorya",
    print : function o(){
        console.log(this);
    }
}
const person4 = {
    name : "sreeja lohidas"
}
person3.print();
person3.print.call();
person3.print.call(this);
person3.print.call(person4);
person3.print.call(person3);

// arrow and normal funciton this
const obj = {
    name : "soorya",
    printName : () =>{
        console.log(this.name)
    },
    printName2 : function (){
        console.log(this.name)
    }
}

obj.printName();
obj.printName2();