Data types in js are mainley dived into the mainley two types
That are 1->premitive 2->complex
Premitive data stores in the "STACK MEMORY"
Complex data stores in the "HEAP MEMORY"
DATATYPE of varible depends on the the value that stored in the variable
premitive data types are 
    1->number : it reprasents the data in numaric like let a=42
    2->string : it represents the data is enquoted with double qutation and single qutaion b="hi hello"
    3->boolean : it represents the logical values like true flase ex: let c=true
    4->nUll :	Represents the intentional absence of any value ex: let d=null
    5->Undefined: represents the varable is declared but value not assigned
    6->Symbol:Often used to create hidden properties in objects (to avoid name clashes)
    7->bigint:it is newly introduced Represents large integers beyond the safe range of Number
premitive data types are immutable that means we cannot change the varibble value once assigned 
complex data types are:
    complex data types al+so known as the refernce data types They store a reference (memory address) to the actual value.
When you copy them, you're copying the reference, not the value itself.

    1->objects:it a key-value pair it store data like key and value ex:let obj={name:"chandu"} it can store any type of data
    2->arrays:it is collection of differnt data like a orderlist it is index based it also a speail type of object
    3->functions: functions are the frist class objects in js

    
    we can find the datatypes of the varible using typeof operator


    DATA CONVERSATIONS ;
    There are two types of conversions:
    1--> Implicit Conversion (Type Coercion)
            JavaScript automatically converts types when needed.
            ex: console.log("5"+2)-->"52" it convertes numbers to string
                console.log("5"-2)-->3 it converts the string to number
                console.log(true+1)-->2 it converts the bollean to number
                console.log(false+"3")-->false3 it converts the bollean to string
                console.log(null+1)-->null to number
                console.log(undefined+1)-->NaN
    2--> Explicit Conversion (Manual Conversion)
        You manually convert using JavaScript built-in functions.
        1-> To String:
                    String(123);      // "123"
                    String(true);     // "true"
                    String(null);     // "null"
                    String(undefined);// "undefined"
                    (123).toString(); // "123"
        2-> To Number:
                    Number("123");     // 123
                    Number("abc");     // NaN
                    Number(true);      // 1
                    Number(false);     // 0
                    Number(null);      // 0
                    Number(undefined); // NaN
                    parseInt("123px"); // 123
                    parseFloat("3.14");// 3.14
        3-> To Boolean:
                    Boolean(0);        // false
                    Boolean("");       // false
                    Boolean(null);     // false
                    Boolean(undefined);// false
                    Boolean(NaN);      // false
                    Boolean("hello");  // true
                    Boolean(123);      // true
        Falsy Values:
            0
            false
            undefined
            ""
            null
            NaN
    