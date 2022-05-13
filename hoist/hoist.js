// #1
console.log(hello);                                   
var hello = 'world';

// below is prediction of what the terminal will run   ; Output would be undefined
var hello           
console.log(hello);                                   
hello = 'world';

// with ES6, output would still be undefined:
console.log(hello);                                   
let hello = 'world';

// #2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log

// below is prediction of what the terminal will run   ; Output would be undefined
var needle
needle = 'haystack'
test();
function test(){
    var needle
    needle = 'magnet';
    console.log

// with ES6, output would still be undefined:
let needle = 'haystack'
test();
function test(){
    let needle = 'magnet';
    console.log;
}


// #3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log (brendan);

// below is prediction of what the terminal will run   ; Output would be super cool
var brendan
brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log (brendan);
// with ES6, output would be super cool:

let brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log (brendan);

// #4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// below is prediction of what the terminal will run   ; Output would be chicken, half-chicken

var food;
food = 'chicken';
console.log(food);
eat();
function eat(){
    var food
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}

// with ES6 below:

let food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    let food = 'gone';
}

// #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// below is prediction of what the terminal will run   ; Output would be undefined since function is calling food but there is nothing to call.

var mean
mean = function() { {
    var food;
    food = "fish";
    food = "chicken";
    console.log(food);
    console.log(food);
}
console.log(food);

// with ES6 below:
mean();
console.log(food);
let mean = function() {
    food = "chicken";
    console.log(food);
    let food = "fish";
    console.log(food);
}
console.log(food);

// #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// below is prediction of what the terminal will run   ; Output would be undefined, rock, r&b, disco

var genre
genre = "disco";

rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre;
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// with ES6 below:
console.log(genre);
let genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    let genre = "r&b";
    console.log(genre);
}
console.log(genre);


// #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// below is prediction of what the terminal will run   ; Output would be san jose, seattle,burbank,san jose

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo;
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// with ES6 below:

let dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    let dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// below is prediction of what the terminal will run   ; Output would be undefined as there is nothing to call on the console.log

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// terminal doesnt run anything as there is nothing calling the function