//Hoisting

//Hoisting is the process of calling the function before it is declared 
//Hoisting only works for the function declaration, doesn't works for function expression


//function

calculateAge(1994);
function calculateAge(year)
{
    console.log(2018 - year);
}

//retirement(1956);
var retirement = function(year){
    console.log(65 - (2016 - year));
} 

//variables
console.log(age);
var age = 25;   

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

//Scoping

//First Scoping Example

var a = 'Hello!';
first();
    
function first()
{
    var b = 'Hi!';
    second();   
    
    function second()
    {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

//Example to show the difference of execution stack and scope chain

var a = 'Hello!';
first();
    
function first()
{
    var b = 'Hi!';
    second();   
    
    function second()
    {
        var c = 'Hey!';
        third();
    }
}

function third()
{
    var d = 'John';
    //console.log(c);
    console.log(a + d);
}

//this keyword
 
//console.log(this);
calculateAge(1985);

function calculateAge(year)
{
    console.log(2016 - year);
    console.log(this);
}


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function()
    {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction()
        {
            console.log(this);
        }
        innerFunction();
        */
    }
}
john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();































