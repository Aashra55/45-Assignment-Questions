// Question # 1
//just installation
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question # 2
//Personal Message:
var Name = 'Aashra Saleem';
console.log("Hey ".concat(Name, ", Would you like to learn some typescript today?"));
//Question # 3
//Name cases
var personName = 'ALex';
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
//Question # 4
//Famous Quote
console.log("\"Albert Einstein once said,'A person who never made a mistake never tried anything new'\"");
//Question # 5
//Famous Quote 2
var famousPersonName = 'Albert Einstein';
var message = "'".concat(famousPersonName, " once said,\"A person who never made a mistake never tried anything new\"'");
console.log('message: ', message);
//Question # 6
var $name = "\t\n Alex \t\n";
//name with whitespace
console.log($name);
console.log($name.trim());
//Question # 7
//Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(16 / 2);
console.log(4 * 2);
//Question # 9
var fvrtNmbr = 4;
console.log("My favorite number is ".concat(fvrtNmbr));
//Question # 10
//comment
//Question # 11
//List of friends
var nameOfFriends = [
    'Ayesha', 'Nida', 'Yasna', 'Raiba'
];
for (var i = 0; i < nameOfFriends.length; i++) {
    console.log(nameOfFriends[i]);
}
;
//Question # 12
//message to persons
for (var i = 0; i < nameOfFriends.length; i++) {
    console.log(nameOfFriends[i], ' is my friend');
}
//Question # 13
//transports you would like to own
var transports = [
    'Porcshe', 'Fortuner', 'Revo', 'Kawasaki'
];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport));
});
//Question # 14
//List of Guests
var guests = [
    'Ayesha', 'Yasna', 'Nida'
];
guests.forEach(function (guest) {
    console.log(guest, 'You are invited to dinner at my home');
});
//Question # 15
//Change Guest List
guests[1] = 'Raiba';
console.log('guests: ', guests);
guests.forEach(function (guest) {
    console.log(guest, 'You are invited to dinner at my home');
});
//Question # 16
//More guests
console.log('I found a bigger dinner table');
guests.splice(0, 0, 'Muqaddas');
guests.splice(2, 0, 'Hadia');
guests.push('Yusra');
guests.forEach(function (guest) {
    console.log(guest, 'You are invited to dinner at my home');
});
//Question # 17
//Shrinking list
console.log('I can invite only two people for dinner');
var pop = [guests.pop(), guests.pop(), guests.pop(), guests.pop()];
pop.forEach(function (popped) {
    console.log(popped, 'We are sorry, we cannot invite you to dinner');
});
//Question # 18
var places = [
    'SwitzerLand', 'Bavaria', 'Paris', 'Cappadocia'
];
console.log(places); //original
console.log(__spreadArray([], places, true).sort()); //alphabetical order
console.log(places); //still original
console.log(__spreadArray([], places, true).sort().reverse()); //reverse alphabetical order
console.log(places); //still original
places.reverse();
console.log(places); //order changed
places.reverse();
console.log(places); //back to original order
places.sort();
console.log(places); //changed in alphabetical order
places.sort().reverse();
console.log(places); //reverse alphabetical order
//Question # 19
//Dinner Guests
console.log("I am inviting ".concat(guests.length, " people to dinner"));
//Question # 20
var lunch = ['Prawns', 'Spaghetti', 'Fish', 'Biryani'];
console.log(lunch);
//Question # 21
//Object
var student = {
    name: 'Muhammad Ali',
    age: 20,
    id: 2
};
console.log(student);
//Question # 22
//Intentional Error
var sports = ['Cricket', 'Football', 'Badminton'];
console.log(sports[4]); //intentional error
console.log(2); //correct
//Question # 23
//Conditional tests
var car = 'Porsche';
var fvrtcolor = 'Black';
var Bike = 'Kavasaki';
var coffee = 'Capuccino';
var cake = 'Red velvet';
console.log("Is car == 'Porsche', I predict true");
console.log(car == 'Porsche');
console.log("Is car == 'Lamborghini', I predict false");
console.log(car == 'Lamborghini');
console.log("Is favorite color == 'BLack', I predict true");
console.log(fvrtcolor == 'Black');
console.log("Is favorite color == 'Pink', I predict false");
console.log(fvrtcolor == 'Pink');
console.log("Is bike == 'Honda', I predict false");
console.log(Bike == 'Honda');
console.log("Is bike == 'Kavasaki', I predict true");
console.log(Bike == 'Kavasaki');
console.log("Is coffee == 'Capccino', I predict true");
console.log(coffee == 'Capuccino');
console.log("Is coffee == 'Latte', I predict false");
console.log(coffee == 'Latte');
console.log("Is cake == 'Brownie', I predict false");
console.log(cake == 'Brownie');
console.log("Is cake == 'Red velvet', I predict true");
console.log(cake == 'Red velvet');
//Question # 24
//More conditional tests
//with strings
var fruit1 = 'apple';
var fruit2 = 'Apple';
console.log(fruit1 == 'Apple'); //false
console.log(fruit2 == 'Apple'); //true
//numerical
console.log(5 > 2); //true
console.log(5 < 2); //false
console.log(5 <= 5); //true
console.log(3 != 3); //false
//'and' and 'or' operators
console.log(false && false); //false
console.log(false && true); //false
console.log(false || true); //true
console.log(true || true); //true
var arr = ['Mango', 'Strawberry', 'Cherry'];
console.log(arr.includes('Cherry'));
console.log(!arr.includes('Banana'));
//Question # 25
//alien_color # 1
var alien_color = 'green';
if (alien_color === 'green') {
    console.log('You just earned 5 points');
}
;
if (alien_color === 'yellow') {
    //condition fail (no output)
}
;
//Question # 26
// alien_color # 2
//version that runs if block
var AlienColor = 'green';
if (AlienColor === 'green') {
    console.log('You just earned 5 points');
}
else {
    console.log('You just earned 10 points');
}
;
//version that runs else block
var Alien_Color = 'yellow';
if (Alien_Color === 'green') {
    console.log('You just earned 5 points');
}
else {
    console.log('You just earned 10 points');
}
;
//Question # 27
//Alien color # 3
//version # 1
var colorOfALien1 = 'green';
if (colorOfALien1 === 'green') {
    console.log('You just earned 5 points');
}
else if (colorOfALien1 === 'yellow') {
    console.log('You just earned 10 points');
}
else {
    console.log('You just earned 15 points');
}
;
//version # 2
var colorOfALien2 = 'yellow';
if (colorOfALien2 === 'green') {
    console.log('You just earned 5 points');
}
else if (colorOfALien2 === 'yellow') {
    console.log('You just earned 10 points');
}
else {
    console.log('You just earned 15 points');
}
;
//version # 3
var colorOfALien3 = 'red';
if (colorOfALien3 === 'green') {
    console.log('You just earned 5 points');
}
else if (colorOfALien3 === 'yellow') {
    console.log('You just earned 10 points');
}
else {
    console.log('You just earned 15 points');
}
;
//Question # 28
//Stages of life
var age = 18;
if (age < 2) {
    console.log('The person is a baby');
}
else if (age == 2 || age < 4) {
    console.log('The person is a toddler');
}
else if (age == 4 || age < 13) {
    console.log('The person is a kid');
}
else if (age == 13 || age < 20) {
    console.log('The person is a teenager');
}
else if (age == 20 || age < 65) {
    console.log('The person is an adult');
}
else if (age == 65 || age > 65) {
    console.log('The person is an older');
}
;
//Question # 29
//favorite fruits
var favorite_fruits = [
    'Mango', 'Cherry', 'Water Melon'
];
if (favorite_fruits.includes('Mango')) {
    console.log('I really like Mango');
}
;
if (!favorite_fruits.includes('Banana')) {
    console.log("I don't like bananas");
}
;
if (favorite_fruits.includes('Cherry')) {
    console.log('I really like Cherry');
}
;
if (!favorite_fruits.includes('Melon')) {
    console.log("I don't like Melon");
}
;
if (favorite_fruits.includes('Water Melon')) {
    console.log('I really like Water Melon');
}
;
//Question # 30
//Hello Admin
var logIn = [
    'user1', 'user2', 'user3', 'Admin'
];
logIn.forEach(function (log) {
    if (log === 'Admin') {
        console.log('Hello Admin,Would you like to see a status report');
    }
    else {
        console.log("Hello ".concat(log, ", thank you  for logging in again"));
    }
});
//Question # 31
//No user
console.log(logIn);
var noUser = [logIn.pop(), logIn.pop(), logIn.pop(), logIn.pop()];
if (noUser) {
    console.log('We need to add some users');
}
;
//Question # 32
//Checking Usernames
var current_users = ['user1', 'user2', 'user3', 'user4'];
var new_users = ['User3', 'user5', 'User6', 'USER2'];
new_users.forEach(function (user) {
    if (current_users.some(function (current_user) { return current_user.toLowerCase() === user.toLowerCase(); })) {
        console.log('The person need to enter a new username');
    }
    else {
        console.log("".concat(user, " is available"));
    }
});
//Question # 33
var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
ordinalNumbers.forEach(function (number) {
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
    ;
});
//Question # 34
var pizzas = ['Pizza Margherita', 'Cheese Pizza', 'Hawaiian Pizza'];
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i]));
}
;
console.log("I like cheese pizza because it's like a creamy, melted river of delight and the Hawaiian is sweet and savory, juicy ham and caramelized pineapple-a match made in heaven on bed of melted cheese and the classic margherita is a masterclass in fresh flavors and textures.I really love pizza!");
//Question # 35
var animals = ['dog', 'cat', 'horse'];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
;
for (var i = 0; i < animals.length; i++) {
    console.log("".concat(animals[i], " would make a great pet"));
}
;
console.log('Any of these animal would make a great pet');
//Question # 36
function make_shirt(size, message) {
    console.log("Make a T-shirt of size ".concat(size, "  with this message \"").concat(message, "\" printed on it"));
}
;
make_shirt(28, 'I love coding');
//Question # 37
function large_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love typescript'; }
    console.log("Make a shirt of ".concat(size, " size with a message \"").concat(message, "\" on it"));
}
;
large_shirt();
function medium_shirt(size, message) {
    if (message === void 0) { message = 'I love programming'; }
    console.log("Make a T-shirt of ".concat(size, " size with a message \"").concat(message, "\"printed on it"));
}
;
medium_shirt('medium');
function small_shirt(size, message) {
    if (message === void 0) { message = 'I love programming'; }
    console.log("Make a T-shirt of ".concat(size, " size with a message \"").concat(message, "\" printed on it"));
}
;
small_shirt('small');
//Question # 38
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    if (city === 'New York') {
        console.log("".concat(city, " is not in ").concat(country));
    }
    else {
        console.log("".concat(city, " is in ").concat(country));
    }
}
;
describe_city('Karachi');
describe_city('Islamabad');
describe_city('New York');
//Question # 39
function city_country(city, country) {
    console.log("\"".concat(city, ",").concat(country, "\""));
}
;
city_country('Karachi', 'Pakistan');
city_country('New York', 'United States of America');
city_country('Paris', 'France');
//Question # 40
function make_album(artist, title, tracks) {
    return { artist: artist, title: title, tracks: tracks };
}
;
console.log(make_album('Radiohed', 'OK Computer'));
console.log(make_album('Pink Floyd', 'The Dark Side of the Moon'));
console.log(make_album('Kendrick Lamar', 'To Pimp a Butterfly', 16));
//Question # 41
var magicians = [
    'Alice', 'David', 'Chris', 'John'
];
function show_magicians(magicians) {
    console.log(magicians);
}
;
show_magicians(magicians);
//Question # 42
function make_great(magician) {
    magician.forEach(function (magician) {
        console.log(magician, 'The Great');
    });
}
;
make_great(magicians);
//Question # 43
//unchanged magicians
function add_great(magician) {
    var magician_copy = [];
    magician.forEach(function (magician) {
        magician_copy.push("".concat(magician, " The Great"));
    });
    return magician_copy;
}
;
var magician_copy = add_great(magicians);
console.log(magician_copy);
console.log(magicians);
//Question # 44
//sandwich
function sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Make sandwich with ".concat(ingredients));
}
;
sandwich('Grilled Chicken breast', 'Lettuce', 'Tomato', 'Mayonnaise', 'Chedder Cheese');
sandwich('Papperoni', 'Lettuce', 'Tomato', 'Crusty sub roll');
sandwich('Avocado', 'Hummus', 'Sprouts', 'Bell paper', 'Cucumber');
//Question # 45
//cars
function cars(manufacturer, model, option) {
    return {
        manufacturer: manufacturer,
        model: model,
        option: option
    };
}
;
console.log(cars('Toyota', 'Corolla', ['Color: Silver metallic', 'Moon Roof']));
console.log(cars('Ford', 'Mustang', ['Color: Race Red']));
console.log(cars('Honda', 'Civic', ['Extra feature: Navigation System with Touchscreen display']));
