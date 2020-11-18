// Object  Destructuring
const user = {
    name: "Galabuzi",
    age: 23,
    city: {
        name: "Kampala",
        population: "23 Million"
    }
}
const {name: username = "unknown", age} = user;
console.log(username, age);

const {city: {name: cityName = "Unknown City", population: cityPopulation = "Unknown Population"}} = user;

console.log(cityName, cityPopulation);

// Array Destructuring

const item = ["Coffee", "$2.3", "$3.0", "$3.5"];

const [itemName, small, medium, large, ingredients = "Not Defined"] = item;

console.log(`A small ${itemName} costs  ${small}`);
console.log(`A medium ${itemName} costs  ${medium}`);
console.log(`A large ${itemName} costs  ${large} and Ingredients ${ingredients}`);