/* this keyword mistery : below sequence me yaad rakhoge to kabhi nahi bhuloge

1. pehli baat : this ek variable hai , refrence variable jo har execution context(every function) 
ke saath create ho jaata hai 

2. Ye this variable apne owner ko point karta hai jisme hum is keyword ko use kar sakte hai

3. this static variable nahi hota for example , like let x = 5  to poore program me x = 5 hi rahega jabtak 
hum usse change na kare to , Ye depend karta hai function actually kaise call hua hai aur uski value
tabhi assign hoti hai jab function actually call ho for more details check the attached screeshot

4. this never points to a function itself and not it's variable enviournment

5. Arrow function ka apna this keyword nahi hota to wo apne parent ke global(lexical) scope se value uthate hai 

*/ 


// "use strict"

// console.log(this)

let calAge = function(birthyear){

    console.log(2023 - birthyear);
    console.log(this);
}

calAge(1990);

// Example with arrow function 
// arrow function does not have its own 'this' so it refer to its lexical this keyword of its parent function 
// or its parent scope, and point accordingly  

let calAge1 = (birthyear) => {

    console.log(2023 - birthyear);
    console.log(this);
}

calAge1(1990);


// Example no 3: 

// this will point to the jonas object not becoz it;s inside the jonas object 
// Actually this will point to jonas because object jonas is calling the method , that is a very important
// diffrence 
const jonas = {

    year:1990,
    calAge: function(){

        console.log(this);
        console.log(2023 - this.year);
    }
}

jonas.calAge();


const lisa = {

    year: 2017
}

// remember: function is just a value therefore we can write the below line of code 
// here we simply copying the method... also called method bowrrowing 

lisa.calAge = jonas.calAge;

lisa.calAge() // output will be 6, this prooves that this keyword always points to the
// object that is calling the method . it also shows that this keyword is dynamic not the static 


// If we even write the below line of code we will get undefined error ... or if we remove the
// the 'use strict mode' the output will be : 'this' will point to the window object for function f() 
// which is mentioned below 

// Now the function f() is a regular function call its not attached to any object ... there is no
// owner of function f()
const f = lisa.calAge;

f();



