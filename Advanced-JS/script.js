    // Function constructor

var john =  {
    name: 'John',
    yearOfBirth: 1994,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.hair = 'Curly';

Person.prototype.calculateAge = function()
{
    console.log(2019 - this.yearOfBirth);
};

var john = new Person('John', 1994, 'teacher');
var jane = new Person('Jane', 1967, 'developer');
var mark = new Person('Mark', 1977, 'singer');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.hair);
console.log(jane.hair);
console.log(mark.hair);


//Object.create

var personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1994;
john.job = 'Developer';

var jane = Object.create(personProto,
{                        
        name: { value: 'Jane'},
        yearOfBirth: {value: 1994},
        job: {value: 'Developer'}
});


//Primitives VS Objects

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a,b)
{
    a = 30;
    b.city = 'San Francisco';
}

change(age,obj);
console.log(age);
console.log(obj.name);


//Passing Functions as an arguments
    
var years = [1990,1965,1978,1987,2009];

function arrayCalc(arr,fn)
{
    var arrRes = [];
    for(var i = 0;i<arr.length;i++)
        {
            arrRes.push(fn(arr[i]));
        }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;   
}

function isFullAge(el)
{
    return el >= 18;
}

function maxHeartRate(el)
{
    if(el >= 18 && el <= 81)
        {
            return Math.round(206.9 - (0.69 * el));
        }
    else
        return -1;
    
}

var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);


//Functions returning functions

function interviewQuestion(job){
    if(job === 'designer')
        {
            return function(name){
                console.log(name + ', can you please explain what UX design is? ');
            }
        }
    else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    
    else
        {
            return function(name){
                console.log('Hello' + name + 'what do you do? ');
            }
        }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Mark');
designerQuestion('Jane');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');



//IIFE (Immediately Invoked Function Expressions)

function game()
{
    var score = Math.random() * 10;
    console.log(score >=5);
}

//game();

(function (){
    var score = Math.random() * 10;
    console.log(score >=5);
})();

(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score >=5) - goodLuck;
})(9);



//Lecture Closures

function retirement(retirementAge)
{
    var a = ' years left until retirement.';
    return function(yearOfBirth)
    {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(68);
var retirementGermany = retirement(65);
var retirementIceland = retirement(68);
retirementUS(1994);
retirementGermany(1990);
retirementIceland(1989);



//Closures example
function interviewQuestion(job)
{
    return function(name)
    {
        if(job === 'designer')
            {
                console.log(name + ', can you please explain what UX design is? ');
            }
        else if(name)
            {
                console.log('What subject do you teach, ' + name + '?');
            }
        else
            {
                console.log('Hello' + name + 'what do you do? ');
            }
    }
}

interviewQuestion('designer')('Jane');


//Bind, Call and Apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style,timeOfDay)
    {
        if(style === 'formal')
            {
                console.log('Good' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name
                           + 'I\'m' + this.job + 'and I\'m' + this.age + ' years old.');
            }
        else if(style === 'friendly')
            {
                console.log('Hey! What\'s up? I\'m ' + this.name
                           + 'I\'m' + this.job + 'and I\'m' + this.age + ' years old. Have a nice' + timeOfDay);
            }
        else if(timeOfDay === 'day'){
            console.log('Hello' + timeOfDay);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('friendly','evening');
john.presentation.call(emily,'formal','afternoon');
//john.presentation.apply(emily,['friendly','afternoon']);


var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('morning');
johnFriendly('night');

var johnDay = john.presentation.bind(john,'day');
johnDay('formal');

var johnCheck = john.presentation.bind(john,'day');
johnCheck('friendly');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');


var years = [1990,1965,1978,1987,2009];

function arrayCalc(arr,fn)
{
    var arrRes = [];
    for(var i = 0;i<arr.length;i++)
        {
            arrRes.push(fn(arr[i]));
        }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;   
}

function isFullAge(limit,el)
{
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));

console.log(fullJapan);


prompt('Please select the correct answer (just type the number).');



var q1 = console.log('Is JavaScript the coolest programming language?',
                ['Yes', 'No'],0);


var q2 = console.log('What is the name of the course\'s teacher?',
                    ['John','Jane','Jonas'],2);

var q3 = console.log('Where is Kathmandu located?', ['Japan','Nepal','Singapore'],3);

var arr = [q1,q2,q3];

Math.floor(Math.random() * arr);



















































