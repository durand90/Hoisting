console.log(hello);     // hello would get hoisted but console output would be undefined.                           
var hello = 'world';    // hello is assign but it is assigned below the console log and doesn't get hoisted.

console.log(hello);     // reference error                          
let hello = 'world';    // let anchors the assignment and prevents hoisting

var needle = 'haystack'; // needle gets hoisted.
test();                     //test function gets hoisted and returns undefined
function test() {
    var needle = 'magnet';  //needle get hoisted inside of the test function.
    console.log(needle);    // console log 'magnet'    
}

var needle = 'haystack'; // needle gets hoisted.
test();                     //test function gets hoisted and returns undefined
function test() {
    let needle = 'magnet';  //needle doesn't get hoisted inside of the test function because of let.
    console.log(needle);    // console log 'magnet'    
}

var brendan = 'super cool';  //brendan variable gets hoisted
function print() {              //print function gets hoisted
    brendan = 'only okay';     // brendan get hoisted inside of print function scope
    console.log(brendan);       //console log 'only okay' for print function scope
}
                                    //here brendan would get assigned
console.log(brendan);           //console log 'supercool' for brendan variable global scope

let brendan = 'super cool';  //brendan variable doesn't gets hoisted
function print() {              //print function gets hoisted
    brendan = 'only okay';     // brendan get hoisted inside of print function scope
    console.log(brendan);       //console log 'only okay' for print function scope
}
console.log(brendan);           //console log 'supercool' for brendan variable global scope

var food = 'chicken';           //var food gets hoisted 1st
console.log(food);              // console.log food returns chicken
eat();                          //eat function returns undefined
function eat() {                    //funnction gts hoisted 2nd
    food = 'half-chicken';      //food get hoisted inside of eat function local scope
    console.log(food);          //returns value of food inside eat function scope which is half-chicken
    var food = 'gone';              //var food gets hoisted to the top of function 1st but is assigned last inside the function
}

let food = 'chicken';           //let food doesn't gets hoisted
console.log(food);              // console.log food get hoisted above let food and returns reference error
eat();                          //eat function returns undefined
function eat() {                    //funnction gts hoisted 1st
    food = 'half-chicken';      //food get hoisted inside of eat function local scope
    console.log(food);          //returns value of food inside eat function scope which is half-chicken
    let food = 'gone';              //var food gets hoisted to the top of function 1st but is assigned last inside the function
}


mean();                         //mean doesn't get hoisted but reference error because mean we tried invoke it before apply it the function
console.log(food);              //food return undefined
var mean = function () {         //var mean get hoisted 1st
    food = "chicken";           //food is assigned
    console.log(food);          //console prints food inside of variable mean local scope
    var food = "fish";          //var fish get histed 1st inside of function 
    console.log(food);          //console prints food variable in mean local scope
}
console.log(food);                // console print out food at mean local level

mean();                         //mean doesn't get hoisted but reference error because mean we tried invoke it before apply it the function
console.log(food);              //food return undefined
let mean = function () {         //let mean doesn't get hoisted 1st
    food = "chicken";           //food is assigned
    console.log(food);          //console prints food inside of variable mean local scope
    let food = "fish";          //let fish get histed 1st inside of function 
    console.log(food);          //console prints food variable in mean local scope
}
console.log(food);                // console print out food at mean local level

console.log(genre);             //console.log should return undefined
var genre = "disco";        //var genre get hoisted 1st to the top
rewind();
function rewind() {           //function get hoisted 2nd
    genre = "rock";
    console.log(genre);     //console log returns "rock"
    var genre = "r&b";      //var genre get hoisted to the top 1st of inside function 
//     console.log(genre);     //console log returns "r&b"
}
console.log(genre);             //console prints genre global value "disco"

console.log(genre);             //console.log should return reference error
let genre = "disco";        //let genre get doesn't get hoisted
rewind();
function rewind() {           //function get hoisted 1st to the top
    genre = "rock";
    console.log(genre);     //console log returns "rock"
    let genre = "r&b";      //let genre doesn't get hoisted to the top of function 
    console.log(genre);     //console log returns "r&b"
}
console.log(genre);             //console prints genre global value "disco"

dojo = "san jose";              //dojo is assigned
console.log(dojo);              //console prints dojo value "san jose"
learn();                        //learn should console log function learn
function learn() {                  //function learn is hoisted 1st
    dojo = "seattle";
    console.log(dojo);          //console prints dojo local scope value "seattle"
    var dojo = "burbank";           //var dojo get hoisted to the top of function 1st
    console.log(dojo);          //console prints dojo learn local value "burbank"
}
console.log(dojo);              //console prints dojo global scope value "san jose"

dojo = "san jose";              //dojo get assined but return reference error
console.log(dojo);              //console prints dojo value "san jose"
learn();                        //learn should console log function learn
function learn() {                  //function doesn't get  hoisted because of let keyword
    dojo = "seattle";
    console.log(dojo);          //console prints dojo local scope value "seattle"
    let dojo = "burbank";           //let dojo doesn't get hoisted to the top of function
    console.log(dojo);          //console prints dojo learn local value "burbank"
}
console.log(dojo);              //console prints dojo global scope value "san jose"


console.log(makeDojo("Chicago", 65));  //log should return make dojo function
console.log(makeDojo("Berkeley", 0));  //log should return make dojo function
function makeDojo(name, students) {     //function doesn't get hoisted because of const keyword
    const dojo = {};                    //const dojo doesn't get hoisted becuse of const keyword
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
















