what is control statements why we requried ?
   Control statements are used to control the flow of execution in a program. They help check conditions — for example, if a condition is true, we follow one path; otherwise, we follow another. They are especially useful in loops and decision-making scenarios.
   it are mainly used for
                         Make decisions (e.g., if, else)
                         Repeat tasks (e.g., for, while loops)
                         Skip or exit blocks based on conditions (e.g., break, continue, switch)

    if condition:
        it used check condition and if it is ture that if block will execute 
        syntax:
                if(condition){
                    // code to execute;
                }
    if-else :
        it used change paths like if it is true one path that is write in if block other wise else block code will execute
        syntax:
                if(condition){
                    //code
                }
                else
                {
                    //code
                }
    if -else if -else:
     it used check multipul condtions 
     syntax:
        if(condition){
            //code
        }
        else if(condition)
        {
            //code
        }
        else
        {
            //code
        }

        we can write nested if condtions if else ladder and if elseif laber etc based on our requrirements
    
    switch:
     it also conditional like it case based and based on our requriement we write cases the passed value will match than we got result what we write 
     it as default case that returns the default thing which we write 
     syntax:
        switch(value)
        {
            case value ://code
            case value ://code
            case value ://code
            defult://code
        }

        LOOPS:
what is loop why is it require?
    used to repeat the task or block of code num of times untill the condition is true it reduce the code length  
        forloop :
            when you know number of times  iterations to be done  then we use for loop
            Syntax:
                    for(varible,condition,inc/dec)
                    {
                        //code
                    }
        whileloop:
            when you dosnot know how many times the loop ittreted then we use while loop
            Syntax:
                while(conditon)
                {
                    //code
                }
        do-while loop
         when want to at least one time loop will loop execute then we use do while loop it executes on time code then it will check the conditions
         Syntax:
                do{
                    //code
                }while(condition);
        Event looping
            The Event Loop is a mechanism that allows JavaScript to perform non-blocking I/O operations (like fetching data, reading files, or timers) despite being single-threaded.
         How it Works (Simplified)
                Call Stack – Executes code line-by-line (synchronous code).
                Web APIs – Handles asynchronous functions like setTimeout, fetch, DOM events, etc.
                Callback Queue (Task Queue) – Stores callback functions once async tasks complete.
                Event Loop – Monitors the call stack and task queue.
                If the stack is empty, it pushes the next task from the queue to the stack for execution.