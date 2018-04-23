// This line imports the dogs array from data.js. You don't need to do anything with it :)
// import dogs from "./data.js"

const dogs = [
    { "name": 'Pongo', "age": 3, "spots": 35, "height": 15, "weight": 24 },
    { "name": 'Perdita', "age": 3, "spots": 60, "height": 15, "weight": 31 },
    { "name": 'Prince', "age": 8, "spots": 51, "height": 21, "weight": 21 },
    { "name": 'Patches', "age": 3, "spots": 84, "height": 16, "weight": 18 },
    { "name": 'Lucky', "age": 2, "spots": 69, "height": 24, "weight": 54 },
    { "name": 'Rolly', "age": 11, "spots": 72, "height": 13, "weight": 20 },
    { "name": 'Penny', "age": 2, "spots": 35, "height": 12, "weight": 17 },
    { "name": 'Freckles', "age": 4, "spots": 41, "height": 14, "weight": 16 },
    { "name": 'Pepper', "age": 12, "spots": 79, "height": 14, "weight": 27 },
    { "name": 'Charlie', "age": 10, "spots": 54, "height": 19, "weight": 29 },
    { "name": 'Cooper', "age": 9, "spots": 40, "height": 16, "weight": 35 },
    { "name": 'Buddy', "age": 5, "spots": 1, "height": 11, "weight": 25 },
    { "name": 'Jack', "age": 9, "spots": 84, "height": 19, "weight": 23 },
    { "name": 'Duke', "age": 9, "spots": 10, "height": 14, "weight": 14 },
    { "name": 'Lucy', "age": 13, "spots": 49, "height": 15, "weight": 34 },
    { "name": 'Rufus', "age": 12, "spots": 1, "height": 17, "weight": 30 },
    { "name": 'Bear', "age": 2, "spots": 44, "height": 22, "weight": 23 },
    { "name": 'Maggie', "age": 7, "spots": 99, "height": 18, "weight": 37 },
    { "name": 'Lola', "age": 8, "spots": 4, "height": 13, "weight": 30 },
    { "name": 'Luna', "age": 2, "spots": 4, "height": 16, "weight": 38 },
    { "name": 'Margaret', "age": 3, "spots": 31, "height": 22, "weight": 28 },
    { "name": 'Barbara', "age": 9, "spots": 41, "height": 20, "weight": 13 },
    { "name": 'Bo', "age": 3, "spots": 41, "height": 13, "weight": 26 },
    { "name": 'Princess', "age": 3, "spots": 2, "height": 12, "weight": 54 },
    { "name": 'Bella', "age": 1, "spots": 46, "height": 23, "weight": 24 },
    { "name": 'Beau', "age": 11, "spots": 65, "height": 11, "weight": 20 },
    { "name": 'Fluffy', "age": 10, "spots": 12, "height": 17, "weight": 32 },
    { "name": 'Molly', "age": 11, "spots": 13, "height": 23, "weight": 34 },
    { "name": 'Bingo', "age": 2, "spots": 80, "height": 11, "weight": 12 },
    { "name": 'Dapper', "age": 2, "spots": 97, "height": 21, "weight": 33 },
    { "name": 'Abigail', "age": 11, "spots": 83, "height": 13, "weight": 15 },
    { "name": 'Ella', "age": 1, "spots": 97, "height": 15, "weight": 21 },
    { "name": 'Goober', "age": 11, "spots": 98, "height": 11, "weight": 16 },
    { "name": 'Henry', "age": 2, "spots": 15, "height": 21, "weight": 27 },
    { "name": 'Isidore', "age": 6, "spots": 87, "height": 20, "weight": 29 },
    { "name": 'Marbles', "age": 4, "spots": 61, "height": 12, "weight": 13 },
    { "name": 'Bernard', "age": 10, "spots": 9, "height": 24, "weight": 39 },
    { "name": 'Luther', "age": 10, "spots": 17, "height": 14, "weight": 26 },
    { "name": 'Trooper', "age": 12, "spots": 48, "height": 20, "weight": 26 },
    { "name": 'Scruffles', "age": 4, "spots": 91, "height": 11, "weight": 43 },
    { "name": 'Barkley', "age": 7, "spots": 80, "height": 20, "weight": 40 },
    { "name": 'Zippy', "age": 12, "spots": 89, "height": 17, "weight": 34 },
    { "name": 'Skipper', "age": 13, "spots": 75, "height": 17, "weight": 28 },
    { "name": 'Snoopy', "age": 6, "spots": 64, "height": 11, "weight": 23 },
    { "name": 'Hunter', "age": 2, "spots": 39, "height": 20, "weight": 33 },
    { "name": 'Sergeant', "age": 5, "spots": 41, "height": 19, "weight": 34 },
    { "name": 'Buster', "age": 8, "spots": 76, "height": 16, "weight": 23 },
    { "name": 'King', "age": 12, "spots": 78, "height": 21, "weight": 32 },
    { "name": 'Chuck', "age": 11, "spots": 80, "height": 20, "weight": 30 },
    { "name": 'Captain', "age": 6, "spots": 35, "height": 12, "weight": 16 },
    { "name": 'Boss', "age": 2, "spots": 38, "height": 21, "weight": 38 },
    { "name": 'Dottie', "age": 1, "spots": 45, "height": 21, "weight": 13 },
    { "name": 'Beyonce', "age": 4, "spots": 22, "height": 11, "weight": 27 },
    { "name": 'Cher', "age": 4, "spots": 74, "height": 22, "weight": 37 },
    { "name": 'Becks', "age": 6, "spots": 87, "height": 15, "weight": 45 },
    { "name": 'Posh', "age": 5, "spots": 67, "height": 16, "weight": 25 },
    { "name": 'Frank', "age": 13, "spots": 53, "height": 14, "weight": 35 },
    { "name": 'Sport', "age": 7, "spots": 0, "height": 24, "weight": 20 },
    { "name": 'Rusty', "age": 2, "spots": 85, "height": 23, "weight": 42 },
    { "name": 'Chewy', "age": 7, "spots": 21, "height": 10, "weight": 39 },
    { "name": 'Rover', "age": 9, "spots": 43, "height": 12, "weight": 49 },
    { "name": 'Fido', "age": 11, "spots": 34, "height": 17, "weight": 18 },
    { "name": 'Kitty', "age": 5, "spots": 91, "height": 15, "weight": 22 },
    { "name": 'Fifi', "age": 9, "spots": 49, "height": 13, "weight": 26 },
    { "name": 'Checkers', "age": 13, "spots": 79, "height": 21, "weight": 13 },
    { "name": 'Rupert', "age": 2, "spots": 37, "height": 17, "weight": 20 },
    { "name": 'Mongo', "age": 5, "spots": 64, "height": 14, "weight": 24 },
    { "name": 'Updog', "age": 8, "spots": 60, "height": 23, "weight": 20 },
    { "name": 'Ricky', "age": 2, "spots": 37, "height": 13, "weight": 16 },
    { "name": 'Tucker', "age": 6, "spots": 22, "height": 18, "weight": 15 },
    { "name": 'Trusty', "age": 5, "spots": 20, "height": 14, "weight": 26 },
    { "name": 'Muffin', "age": 5, "spots": 16, "height": 16, "weight": 26 },
    { "name": 'Cupcake', "age": 11, "spots": 46, "height": 15, "weight": 32 },
    { "name": 'Ace', "age": 12, "spots": 38, "height": 19, "weight": 25 },
    { "name": 'Trixie', "age": 3, "spots": 15, "height": 19, "weight": 15 },
    { "name": 'Dwayne', "age": 11, "spots": 75, "height": 13, "weight": 18 },
    { "name": 'Andre', "age": 5, "spots": 61, "height": 20, "weight": 29 },
    { "name": 'Bart', "age": 2, "spots": 26, "height": 14, "weight": 17 },
    { "name": 'Seamus', "age": 10, "spots": 62, "height": 17, "weight": 30 },
    { "name": 'Joe', "age": 1, "spots": 29, "height": 13, "weight": 27 },
    { "name": 'Marge', "age": 2, "spots": 76, "height": 15, "weight": 32 },
    { "name": 'Paddy', "age": 4, "spots": 100, "height": 23, "weight": 50 },
    { "name": 'Gilligan', "age": 4, "spots": 67, "height": 15, "weight": 13 },
    { "name": 'Skippy', "age": 7, "spots": 60, "height": 17, "weight": 42 },
    { "name": 'Cherry', "age": 3, "spots": 101, "height": 14, "weight": 30 },
    { "name": 'Missy', "age": 2, "spots": 36, "height": 17, "weight": 41 },
    { "name": 'Underdog', "age": 8, "spots": 1, "height": 20, "weight": 45 },
    { "name": 'Vera', "age": 7, "spots": 18, "height": 16, "weight": 53 },
    { "name": 'Rex', "age": 7, "spots": 43, "height": 23, "weight": 49 },
    { "name": 'Max', "age": 2, "spots": 57, "height": 18, "weight": 49 },
    { "name": 'Arthur', "age": 6, "spots": 48, "height": 18, "weight": 50 },
    { "name": 'Scooter', "age": 7, "spots": 69, "height": 17, "weight": 6 },
    { "name": 'Mopsy', "age": 4, "spots": 24, "height": 13, "weight": 46 },
    { "name": 'Puff', "age": 4, "spots": 71, "height": 19, "weight": 26 },
    { "name": 'Pippi', "age": 4, "spots": 25, "height": 19, "weight": 42 },
    { "name": 'Scrappy', "age": 9, "spots": 19, "height": 23, "weight": 29 },
    { "name": 'Spot', "age": 3, "spots": 0, "height": 21, "weight": 24 },
    { "name": 'Dipstick', "age": 12, "spots": 30, "height": 10, "weight": 32 },
    { "name": 'Jewel', "age": 5, "spots": 72, "height": 23, "weight": 36 },
    { "name": 'Fidget', "age": 9, "spots": 29, "height": 17, "weight": 15 },
    { "name": 'Hooper', "age": 6, "spots": 42, "height": 15, "weight": 22}
];

// .MAP()
// Map creates a new array with the results from applying the callback function to each item in the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// EXAMPLE
// array.map(callback);

// PRACTICE PROBLEMS:
// Create an array of all the dog names
const doggies = dogs.map(dog => dog.name);
console.log(doggies);

// Create an array of all the dog names in uppercase
const doges = dogs.map(dog => dog.name.toUpperCase());
console.log(doges);

// Create an array of all the dog names in lowercase
const dogDog = dogs.map(dog => dog.name.toLowerCase());
console.log(dogDog);

// Create an array of all the dog names spelled backwards
// const dawg = dogs.map(dog => dog.name.reverse());
// console.log(dawg);

// Create an array of the dogs' ages in dog years (One human year is equal to seven "dog years")
const dawgs = dogs.map(dog => dog.age * 7);
console.log(dawgs);

// .REDUCE()
// Reduce collapses an array into a single value by applying the callback function to each item in the array.

// EXAMPLE
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// array.reduce(reducer);
// array.reduce(reducer, startingValue);

// PRACTICE PROBLEMS:
// How many spots do all the dogs have between them?
let spotCount = dogs.reduce((total, spot) => total + spot.spots, 0);
console.log(spotCount);

// How much do all the dogs weigh, in total?
let weightCount = dogs.reduce((total, weights) => total + weights.weight, 0);
console.log(weightCount);

// How many inches tall are all of the dogs combined?
let heightCount = dogs.reduce((total, heights) => total + heights.height, 0);
console.log(heightCount);

// What is the total of all the dogs' ages (in human years)?
let ageCount = dogs.reduce((total, ages) => total + ages.age, 0);
console.log(ageCount * 7);

// It costs one dollar per letter to print name tags for the dogs. How many dollars will it cost to print tags for every dog?
let nameCount = dogs.reduce((total, names) => total + names.name.length, 0);
console.log(nameCount);

// .FILTER()
// Filter creates a new array consisting of all the elements of the original array that pass a true/false test implemented by the callback function.

// EXAMPLE
// const callback = (item) => item.value === testValue;
// array.filter(callback);

// PRACTICE PROBLEMS:
// Create an array of dogs who have fewer than ten spots
let spotFilter = (spot) => spot.spots < 10;
console.log(dogs.filter(spotFilter));

// Create an array of dogs who have exactly one spot
let singleSpot = (spot) => spot.spots === 1;
console.log(dogs.filter(singleSpot));

// Create an array of dogs who are three years old or younger
let ageFilter = (ages) => ages.age <= 3;
console.log(dogs.filter(ageFilter));

// Create an array of dogs who are more than 15 inches tall
let heightFilter = (heights) => heights.height > 15;
console.log(dogs.filter(heightFilter));

// Create an array of dogs whose names start with a "P"
let nameLetter = (names) => names.name[0] === "P";
console.log(dogs.filter(nameLetter));

// Create an array of dogs whose names start with "R" or "S"
// let nameLetters = (names) => names.name[0] === "R";
// console.log(dogs.filter(nameLetters));

// Create an array of dogs who are more than 12 inches tall
let dogHeights = (heights) => heights.height > 12;
console.log(dogs.filter(dogHeights));

// Create an array of dogs whose weights are 20 to 30 pounds (inclusive)
// let weightFilter = (weights) => 20 <= weights.weight <= 30;
// console.log(dogs.filter(weightFilter));

// Create an array of dogs whose heights are 15 to 18 inches (inclusive)


// .FOREACH()
// ForEach executes a callback function for each array element.

// EXAMPLE
// const callback = (x) => console.log(x);
// array.forEach(callback);

// PRACTICE PROBLEMS
// Console.log() the name of each dog


// Add a "gender" property to each dog in the original array and randomly assign "M" or "F"


// Console.log() "<dog> is a good boy/girl!" for each dog based on the gender property you added

