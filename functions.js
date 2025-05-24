// function greet(){
//     console.log("hello");
// }

// greet()

// function greet(msg){
//     console.log(msg)
// }

// greet("hello");

// function greet(msg="hi"){
//     console.log(msg);
// }
// greet()
// greet("hello")

// function outter(){
//     console.log("i am outer");
//     function inner(){
//         console.log("i am child");
        
//     }
//     inner()
// }
// outter();

// function main(a,b){
//     console.log("i am in main function",a);
//     b();
// }
// function greet(){
//     console.log("hi");
    
// }
// main("hello",greet)



// let greet=function(){
//         console.log("goodmorning");
// }
// greet()

// let greet=function(msg){
//     console.log(msg);
// }
// greet("hi");

// let greet=function(msg ="hi"){
//     console.log(msg);
// }
// greet();
// greet("hello");
// let outer=function(){
//     console.log("i am outter");
//     let inner=function()
//     {
//         console.log("I am child");
//     }
//     inner()
// }
// outer()


// let main=function(a,b){
//     console.log("in main",a);
//     b();
// }
// let greet=function(){
//     console.log("hi hello");
// }
// main("ee",greet)

// let greet=()=>{
//     console.log("hello");
// }
// greet()

// let greet=()=>console.log("hello");
// greet()

// let greet=(msg)=>{
//     console.log(msg)
// }
// greet("hi all")

// let outer=()=>{
//     console.log("i am outter");
//     let inner=()=>{
//         console.log("i am inner");
//     }
//     inner();
// }
// outer();

// let call =(a)=>{
//     console.log("hi normal");
//     a();
// }
// let back=()=>console.log("hi hello");
// call(back)

//self calling function

// (function (){
//     console.log("i am self calling function");
// })()
// (function(a){
//     console.log(a);
// })("msg")

// COnstrater function
// function Person(name,age){
//             this.name=name;
//             this.age=age;
// }

// let obj1=new Person("chandu",22)

// console.log(obj1);

// Return Keyword
// function sum(a,b){
//             return a+b;
// }
// console.log(sum(1,2));

// what is closure?
// closure is like a function that remembers the scope of varaibles simplly A closure gives you access to an outer function’s variables from an inner function, even after the outer function has returned.

function person(name,age){
        let score=0;
        return {
            getName:()=>name,
            getAge:()=>age,
            incScore:()=>score++,
            getScore:()=>score
        }
}
let b= person("chandu",21)
console.log(b.getName());
console.log(b.getAge());
b.incScore();
console.log(b.getScore());
