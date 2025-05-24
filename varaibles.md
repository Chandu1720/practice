what is variable?
genarally variable means that somthing that changed at different point of time intervels
variable means that that can store data like container data can be changed at any time
        Syntax:
                let/var/const <varname>=data;
                here let/var/const are the key words 
                    varname is the name which we want to give for varible data 
                    there some rules for "varname"\
                     that should start with SMALL LETTER or "WITH UNDERSCIORE(_)" OR "$" AND COMBINATION OF SECONDWORD FRISTLETTER MUST BE CAPITAL
                     that DONT START WITH NUMBER can end with numbers 
                     that shouldnot contain REVESED KEYWORDS LIKE "IF IF ELSE"
                     that are CASE SENSITIVE;
                    varaibles are IDENTIFERS must be CONTAIN UNIQUE NAME


        let car="shift"
        the above one is variable delclaration and assing the value to it 
        let car
        the above one is variable declaration in thise case the value can be assigned later like user input or in some part of code but no values are assigned then the value of car will be UNDEFINED
        van ="tata"
        the above one is that we get error that varible cannot be declared  it will pass withiout using strict mode 

        DIFFERNCE B/W LET VAR CONST  
        VAR: Declare the variable with function or global scope and allows redeclaration and reassigning in the same scope
            ex: function hello(){
                    var  greet="hello hi";
                    console.log(greet);
                } 
            in above example varabile greet is declared with funtion scope     
             ex: if(true)  {
                 n="hi";
                console.log(n);
             } 
             console.log(n);
             here it is a globle level scope
             ex: var name="chandu"
                 var name="chandu kampasati"
                 console.log(name)//"chandu kampasati"
        LET :Decalre the varibles with block level scope and allows to updating the value but not allows redecalration
            with in the same scope
            ex: if(true)
                        {
                            let name ="chandu"
                            console.log(name)//it will print chandu
                        }
                        console.log(name)//we will get error that is reference error name is dont defined
                let name="chandu";
                let name="chanduk"//for thise we will get error because let doesnot allow redeclaration like var
                name="chanduk"//it will fine it allows the updateing or reassigning 
        Const: same as let but the value we declares with const assigning the value once we assign that data cannot be     changed ;   that means const doesnot allows upadting and redeclaration


finally the varabile may containe any type of data 