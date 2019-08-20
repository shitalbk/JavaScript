/* Variables and data types */

var firstName = 'Shital';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);
var job;
console.log(job);
job = 'Teacher';
console.log(job);

//Variable mutation and type coercion
var firstName = 'John';
var age = 28;
//type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;  

console.log(firstName + ' is a ' + age + 'year old' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + 'year old' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

//Basic Operators

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
var yearJohn = now - ageJohn;
var yeahMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than JOHN');
var x;
console.log(typeof x);

//Operator precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;


//Multiple operator
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) /2;
console.log(average);

//Multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More Operators
x *= 2;
console.log(x);
x+= 10;
console.log(x);
x--;
console.log(x);

//Coding Challenge 1

var massMark = 123;
var massJohn = 434;
var height_Mark = 120;
var height_John = 111;

var mark_BMI = massMark / (height_Mark * height_Mark);
console.log(mark_BMI);

var john_BMI = massJohn / (height_John * height_John);
console.log(john_BMI);

var markHigherBMI = mark_BMI > john_BMI;
console.log('Is Mark\'s BMI higher than John\'s BMI ? '+ markHigherBMI);


//if-else statements
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married')
    {
        console.log(firstName + ' is Married');
    }
else{
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if(isMarried)
    {
        console.log(firstName + ' is Married');
    }
else{
    console.log(firstName + ' will hopefully marry soon :)');
}


var massMark = 123;
var massJohn = 434;
var height_Mark = 120;
var height_John = 111;

var mark_BMI = massMark / (height_Mark * height_Mark);
console.log(mark_BMI);

var john_BMI = massJohn / (height_John * height_John);
console.log(john_BMI);

if(mark_BMI > john_BMI)
    {
        console.log('Mark\'s BMI is higher than John\'s.');
    }
else{
    console.log('John\'s BMI is higher than Mark\'s.');
}


//Boolean Logic Statements
var firstName = 'John';
var age = 16;

if(age < 13)
    {
        console.log(firstName + ' is a boy.');
    }
else if(age >= 13 && age < 20)
    {
        console.log(firstName + ' is a teenager.');
    }
else
    {
        console.log(firstName + ' is a man.');  
    }

//Ternary Operator and switch statements

//Ternary Operator
var firstName = 'John';
var age = 22;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + 'drinks juice.');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statements
var job = 'teacher';
switch(job){
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
age= 12;
switch(true)
    {
        case age<13:
            console.log(firstName + ' is a boy.');
            break;
        case age >= 13 && age < 20:
            console.log(firstName + ' is a teenager.');
            break;
        default:
            console.log(firstName + ' is a man.');
    }

//Truthy and falsy values and equality operators
//falsy values: undefined, null, 0, '',NaN
//truthy values: NOT falsy values

var height;
height = 23;
if(height || height === 0)
    {
        console.log('Variable is defined');
    }
else{
    console.log('Variable has NOT been defined');
}

//Equality Operators
if(height == '23')
    {
        console.log('The  == operator does type coercion');
    }

//Coding Challenge 2
var john_score = (89 + 120 + 103)/3;
var mike_score = (116 + 94 + 123)/3;
var mary_score = (97 + 34 + 105)/3;

console.log(john_score,mike_score);

if(john_score > mike_score && john_score > mary_score)
    {
        console.log('John\'s team wins with' + john_score + 'points.');
    }
else if(mike_score > john_score && mike_score > mary_score)
    {
        console.log('Mike\'s team wins with' + mike_score + 'points.');
    }
else if(mary_score > john_score && mary_score > mike_score)
    {
        console.log('Mary\'s team wins with' + mary_score + 'points.');
    }
else{
    console.log('The result is draw. ');
}

//Functions
function calculateAge(birthYear){
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1994);
var ageMike = calculateAge(1989);
var ageMary = calculateAge(1902);
console.log(ageJohn,ageMike,ageMary);

function yearsUntilRetirement(year,firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    else{
        console.log(firstName + ' is already retired.');
    }
    
}
yearsUntilRetirement(1994, 'John');
yearsUntilRetirement(1989, 'Mike');
yearsUntilRetirement(1974, 'Joane');

//Functions Statements and Expressions

//Function Declaration
// function whatDoYouDo(job, firstName){} 

//Function Expression
 var whatDoYouDo = function(job, firstName)
 {
     switch(job)
         {
             case 'teacher':
                 return firstName + 'teaches kids how to code.';
             case 'driver':
                 return firstName + 'drives a cab in Lisbon.';
             case 'designer':
                 return firstName + 'designs beautiful websites.';
             default:
                 return firstName + ' does something else.';
         }
 }
console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('driver','Jane'));
console.log(whatDoYouDo('designer','Mike'));


//Arrays

//Initialize new array
var names = ['John', 'Mark','Jane'];
var years = new Array(1989,1960,1948);

console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'designer',false];
john.push('blue');
john.unshift('Mr.');
console.log(john);
john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(10));
var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer': 'John is a designer';
console.log(isDesigner);


//Coding Challenge 2


function tip_calculator(bill)
{
    var percentage;
    if(bill <50)
        {
             percentage = 0.2;
        }
    else if(bill >= 50 && bill <200)
        {
            percentage = 0.15;
        }
    else{
        percentage = 0.1;
    }
    return percentage * bill;
}
var bills = [124,48,268];
var tips = [tip_calculator(bills[0]),
            tip_calculator(bills[1]),
            tip_calculator(bills[2])];
var finalValues = [bills[0]+tips[0],
                   bills[1]+tips[1],
                   bills[2]+tips[2]
                  ];
console.log(tips,finalValues);    


//Objects and Properties
//object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1994,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
    
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


//Objects and Methods

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1994,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function()
    {
       this.age = 2018 - this.birthYear;
    }
    
};

john.calcAge();
console.log(john);



//Coding Challenge 4

var john = {
    firstName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function()
    {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    firstName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function()
    {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if(john.calcBMI() > mark.calcBMI())
    {
        console.log(john.firstName + ' has a higher BMI of ' + john.bmi);
    }
else if(mark.bmi > john.bmi)
    {
        console.log(mark.firstName + ' has a higher BMI of ' + mark.bmi);
    }
else{
         console.log('They have the same BMI');
}



//Loops and Iteration
//for loop
for(var i = 1;i<=20;i+=2)
    {
        console.log(i);
    }
var john = ['John','Smith',1990,'designer',false];
    for(var i = 0;i<john.length;i++)
        {
            console.log(john[i]);
        }
var i = 0;
//while loop
while(i<john.length)
    {
        console.log(john[i]);
        i++;
    }

//continue and break statements
var john = ['John','Smith',1990,'designer',false];
    for(var i = 0;i<john.length;i++)
        {
            if(typeof john[i] !== 'string'){
                continue;
            }
            console.log(john[i]);
        }   

     for(var i = 0;i<john.length;i++)
        {
            if(typeof john[i] !== 'string'){
                break;
            }
            console.log(john[i]);
        }

//Looping backwards
for(var i = john.length -1;i>=0;i--)
    {
        console.log(john[i]);
    }



var john = {
    fullName: 'John Smith',
    bills: [124,48,268,180,42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0;i < this.bills.length; i++)
            {
                //Determine percentage based on tipping rules
                var percentage;
                var bill = this.bills[i];
                if(bill < 50)  
                    {
                        percentage = .2;
                    }
                else if(bill >= 50 && bill < 200)
                    {
                        percentage = .15;
                    }
                else{
                    percentage = .1;
                }
                //Add results to the corresponding arrays
                this.tips[i] = bill * percentage;
                this.finalValues[i] = bill + bill * percentage;
            }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77,475,110,45],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0;i < this.bills.length; i++)
            {
                //Determine percentage based on tipping rules
                var percentage;
                var bill = this.bills[i];
                if(bill < 100)  
                    {
                        percentage = .2;
                    }
                else if(bill >= 100 && bill < 300)
                    {
                        percentage = .1;
                    }
                else{
                    percentage = .25;
                }
                //Add results to the corresponding arrays
                this.tips[i] = bill * percentage;
                this.finalValues[i] = bill + bill * percentage;
            }
    }
}

function calcAverage(tips)
{
    var sum = 0;
    for(var i = 0;i<tips.length;i++)
        {
            sum = sum + tips[i];
        }
    return sum / tips.length;
}
john.calcTips();
mark.calcTips();
console.log(john,mark);

john.average = calcAverage(john.tips); 
mark.average = calcAverage(mark.tips); 
console.log(john,mark);

if(john.average > mark.average)
    {
        console.log(john.fullName + '\s family pays higher tips, with an average of $' + john.average);
    }
else if(mark.average > john.average)
    {
        console.log(mark.fullName + '\s family pays higher tips, with an average of $' + mark.average);
    }
















































