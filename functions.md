what is a function ?
Ans: 
        In JavaScript, a function is a block of reusable code designed to perform a specific task. Functions allow you to divide a large program into smaller, manageable parts, improving readability and maintainability.

        Functions also support code reusability, meaning you can define a function once and use (call) it multiple times without rewriting the same logic
what is Function call?
Ans:
       A function call is the action of executing (or invoking) a function that has been defined. 
       When you call a function, the JavaScript engine runs the code inside that function.
why functions ?
Ans:
    With functions you can reuse code
    You can write code that can be used many times.
    You can use the same code with different arguments, to produce different results.


syntax:
     function  <functionNAme> (parameterlist){
        //code
     }
     here function is a keyword and functionName is idetifer 


defineingfunctions
  function greet(){
    console.log("hello");
  } ...> thise is called defining a function 

  greet()-->calling or invoking the function


function with parameters:
    that means while defining the function we give parameter list that means function acepct the input
    ex: function greet(msg){
        console.log(msg);
    }
    greet("hello")//we need to pass argument
    msg--->parameter
    hello-->argument

function with default parameters:
    that means while defining the function we give parameters with default values
    ex: function sum(a=1,b=2)
        {
            console.log(a+b);
        }
    sum(2,2)//4
    sum()//3

what are the different types of functions?
    IN JS mainley 3 types 
        1.Function Declaration:
                A function declaration is the most common and traditional way of creating a function in JavaScript.
                function functionName(parameters) {
                                    // code to execute
                                    }
                    function – keyword to declare a function
                    functionName – name of the function (identifier)
                    parameters – inputs to the function (optional)
            Hoisting:
                    Function declarations are hoisted, which means you can call the function even before its definition in the code.
                  sayHi();
                        function sayHi() {
                        console.log("Hi there!");
                        }
        2.Function Expression:
                        A function expression defines a function and assigns it to a variable. The function can be anonymous (no name) or named.
                        syntax :
                          let functionName = function(paramiterlist){//code to execute}
                          const greet = function(name) {
                            console.log("Hello, " + name + "!");
                            };
                            greet("Bob"); // Output: Hello, Bob!
                        not hosted;
        3.arrow functions:
            Arrow functions are a shorter way to write function expressions, introduced in ES6 (ECMAScript 2015). They’re especially useful for writing small, simple functions.
             syntax:
                    let functionname=(parametelist)=>
                    {
                        //code block
                    }
            in arrow functions we cannot use the this keyword
            if only one line code is there without return keyword  it retuns the value
            arrow function with one parameter then we can omit the () paranthises
Return keyword:
why we need?
  because any variable defined in a variable is local to that function only that variable is called localvariable so it is not availbule outside that function so we can use return key word to show the local to global 

  return stmt will returns the output
  it means that end of the code
  CALLBACK FUNCTION:
    passing a function as variable to another and that function will called after some time is called as callback function
    It is called (executed) after the outer function finishes its task.
    Often used in asynchronous code (like setTimeout, API calls, etc.).
    ex: 
    function greet(name, callback) {
    console.log("Hi " + name);
    callback();  // calling the callback function
    }
    function sayBye() {
    console.log("Bye!");
    }
    greet("Alice", sayBye);

nested functions:
  it is nothing but defineing a function inside the function
 Why use nested functions?
    For organizing code into smaller, reusable parts.
    The inner function can access variables of the outer function
Ex:
        function outer() {
                    let name = "John";
                    function inner() {
                        console.log("Hello " + name);
                    }
                     inner();
        }   
outer(); 
Self-Calling Functions (IIFE – Immediately Invoked Function Expression):
        A self-calling function runs immediately after it is defined.
        syntax:
                (function () {
                    console.log("I run myself!");
                    })();
    apped in () to treat it as an expression.
    Followed by () to invoke it right away.
Constructor Function
mustbe start with captial letter
Used to create objects with the new keyword. Common before ES6 classes.
  ex:
     function Person(name, age) {
                this.name = name;
                this.age = age;
}

const p1 = new Person("Alice", 25);
console.log(p1.name); 

Variable Scope:
    there totally three types of scopes :
        global,local,block
        global: means that it is avialable to all Accessible anywhere in the code
        local:it is avible in that function level scope Accessible only inside the function where it's declared
        block: it is avialable in the {} only block

