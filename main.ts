// Question # 1
//just installation

//Question # 2
//Personal Message:
let Name : string = 'Aashra Saleem';
console.log(`Hey ${Name}, Would you like to learn some typescript today?`);

//Question # 3
//Name cases
let personName : string = 'ALex';
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase());

//Question # 4
//Famous Quote
console.log(`"Albert Einstein once said,'A person who never made a mistake never tried anything new'"`);

//Question # 5
//Famous Quote 2
let famousPersonName : string = 'Albert Einstein';
let message : string = `'${famousPersonName} once said,"A person who never made a mistake never tried anything new"'`;
console.log('message: ', message);

//Question # 6
let $name : string = `\t\n Alex \t\n`;
//name with whitespace
console.log($name);
console.log($name.trim());

//Question # 7
//Number Eight
console.log(5+3);
console.log(10-2);
console.log(16/2);
console.log(4*2);

//Question # 9
const fvrtNmbr : number = 4;
console.log(`My favorite number is ${fvrtNmbr}`);

//Question # 10
//comment

//Question # 11
//List of friends
let nameOfFriends : string[] = [
    'Ayesha','Nida','Yasna','Raiba'
];
for(let i = 0; i < nameOfFriends.length; i++){
    console.log(nameOfFriends[i]);
};

//Question # 12
//message to persons
for(let i = 0; i < nameOfFriends.length; i++){
    console.log(nameOfFriends[i],' is my friend');
}

//Question # 13
//transports you would like to own
const transports : string[] = [
    'Porcshe','Fortuner','Revo','Kawasaki'
];
transports.forEach((transport)=>{
    console.log(`I would like to own a ${transport}`)
});

//Question # 14
//List of Guests
let guests : string[] = [
    'Ayesha','Yasna','Nida'
];
guests.forEach((guest)=>{
    console.log(guest , 'You are invited to dinner at my home');
});

//Question # 15
//Change Guest List
guests[1] = 'Raiba';
console.log('guests: ', guests);
guests.forEach((guest)=>{
    console.log(guest,'You are invited to dinner at my home')
});

//Question # 16
//More guests
console.log('I found a bigger dinner table');
guests.splice(0,0,'Muqaddas');
guests.splice(2,0,'Hadia')
guests.push('Yusra');
guests.forEach((guest)=>{
    console.log(guest , 'You are invited to dinner at my home')
});

//Question # 17
//Shrinking list
console.log('I can invite only two people for dinner');
let pop = [guests.pop(),guests.pop(),guests.pop(),guests.pop()];
pop.forEach((popped)=>{
    console.log(popped,'We are sorry, we cannot invite you to dinner')
});

//Question # 18
let places : string[] = [
    'SwitzerLand','Bavaria','Paris','Cappadocia'
];
console.log(places);//original
console.log([...places].sort());//alphabetical order
console.log(places);//still original
console.log([...places].sort().reverse());//reverse alphabetical order
console.log(places);//still original
places.reverse();
console.log(places);//order changed
places.reverse();
console.log(places);//back to original order
places.sort();
console.log(places)//changed in alphabetical order
places.sort().reverse();
console.log(places);//reverse alphabetical order

//Question # 19
//Dinner Guests
console.log(`I am inviting ${guests.length} people to dinner`);

//Question # 20
const lunch:string[] = ['Prawns','Spaghetti','Fish','Biryani'];
console.log(lunch);

//Question # 21
//Object
let student:{name:string,age:number,id:number} = {
    name: 'Muhammad Ali',
    age: 20,
    id: 2
};
console.log(student);

//Question # 22
//Intentional Error
let sports:string[] = ['Cricket','Football','Badminton']
console.log(sports[4]);//intentional error
console.log(2);//correct

//Question # 23
//Conditional tests
let car:string = 'Porsche';
let fvrtcolor:string = 'Black';
let Bike:string = 'Kavasaki';
let coffee:string = 'Capuccino';
let cake:string = 'Red velvet'

console.log(`Is car == 'Porsche', I predict true`);
console.log(car == 'Porsche');

console.log(`Is car == 'Lamborghini', I predict false`);
console.log(car == 'Lamborghini');

console.log(`Is favorite color == 'BLack', I predict true`);
console.log(fvrtcolor == 'Black');

console.log(`Is favorite color == 'Pink', I predict false`);
console.log(fvrtcolor == 'Pink');

console.log(`Is bike == 'Honda', I predict false`);
console.log(Bike == 'Honda');

console.log(`Is bike == 'Kavasaki', I predict true`);
console.log(Bike == 'Kavasaki');

console.log(`Is coffee == 'Capccino', I predict true`);
console.log(coffee == 'Capuccino');

console.log(`Is coffee == 'Latte', I predict false`);
console.log(coffee == 'Latte');

console.log(`Is cake == 'Brownie', I predict false`);
console.log(cake == 'Brownie');

console.log(`Is cake == 'Red velvet', I predict true`);
console.log(cake == 'Red velvet');

//Question # 24
//More conditional tests

//with strings
let fruit1 = 'apple';
let fruit2 = 'Apple';
console.log(fruit1 == 'Apple');//false
console.log(fruit2 == 'Apple');//true

//numerical
console.log(5>2);//true
console.log(5!<2);//false
console.log(5<=5);//true
console.log(3!=3);//false

//'and' and 'or' operators
console.log(false && false);//false
console.log(false && true);//false
console.log(false || true);//true
console.log(true || true);//true

let arr:string[] = ['Mango','Strawberry','Cherry'];
console.log(arr.includes('Cherry'));
console.log(!arr.includes('Banana'));

//Question # 25
//alien_color # 1
let alien_color = 'green';
if(alien_color === 'green'){
    console.log('You just earned 5 points');
};
if(alien_color === 'yellow'){
    //condition fail (no output)
};

//Question # 26
// alien_color # 2
//version that runs if block
let AlienColor:string = 'green';
if(AlienColor === 'green'){
    console.log('You just earned 5 points');
}else{
    console.log('You just earned 10 points');
};
//version that runs else block
let Alien_Color = 'yellow'
if(Alien_Color === 'green'){
    console.log('You just earned 5 points');
}else{
    console.log('You just earned 10 points');
};

//Question # 27
//Alien color # 3
//version # 1
let colorOfALien1: string = 'green';
if(colorOfALien1 === 'green'){
    console.log('You just earned 5 points');
}else if(colorOfALien1 === 'yellow'){
    console.log('You just earned 10 points');
}else{
    console.log('You just earned 15 points');
};
//version # 2
let colorOfALien2:string = 'yellow';
if(colorOfALien2 === 'green'){
    console.log('You just earned 5 points');
}else if(colorOfALien2 === 'yellow'){
    console.log('You just earned 10 points');
}else{
    console.log('You just earned 15 points');
};
//version # 3
let colorOfALien3:string = 'red';
if(colorOfALien3 === 'green'){
    console.log('You just earned 5 points');
}else if(colorOfALien3 === 'yellow'){
    console.log('You just earned 10 points');
}else{
    console.log('You just earned 15 points');
};

//Question # 28
//Stages of life
let age : number = 18;
if(age < 2){
    console.log('The person is a baby');
}else if(age == 2 || age < 4){
    console.log('The person is a toddler');
}else if(age == 4 || age < 13){
    console.log('The person is a kid');
}else if(age == 13 || age < 20){
    console.log('The person is a teenager');
}else if(age == 20 || age < 65){
    console.log('The person is an adult');
}else if(age == 65 || age > 65){
    console.log('The person is an older');
};

//Question # 29
//favorite fruits
let favorite_fruits : string[] = [
    'Mango','Cherry','Water Melon'
];
if(favorite_fruits.includes('Mango')){
    console.log('I really like Mango');
};
if(!favorite_fruits.includes('Banana')){
    console.log("I don't like bananas")
};
if(favorite_fruits.includes('Cherry')){
    console.log('I really like Cherry')
};
if(!favorite_fruits.includes('Melon')){
    console.log("I don't like Melon")
};
if(favorite_fruits.includes('Water Melon')){
    console.log('I really like Water Melon')
};

//Question # 30
//Hello Admin
let logIn : string[] = [
    'user1','user2','user3','Admin'
];
logIn.forEach((log)=>{
    if(log==='Admin'){
        console.log('Hello Admin,Would you like to see a status report')
    }else{
        console.log(`Hello ${log}, thank you  for logging in again`)
    }
});

//Question # 31
//No user
console.log(logIn);
let noUser = [logIn.pop(),logIn.pop(),logIn.pop(),logIn.pop()];
if(noUser){
    console.log('We need to add some users')
};

//Question # 32
//Checking Usernames
let current_users : string[] = ['user1','user2','user3','user4'];
let new_users : string[] = ['User3','user5','User6','USER2'];
new_users.forEach((user)=>{
    if(current_users.some(current_user=>current_user.toLowerCase()===user.toLowerCase())){
        console.log('The person need to enter a new username')
    }else{
        console.log(`${user} is available`)
    }
});

//Question # 33
let ordinalNumbers : number[] = [1,2,3,4,5,6,7,8,9,10];
ordinalNumbers.forEach((number)=>{
    if(number === 1){
        console.log(`${number}st`)
    }else if(number===2){
        console.log(`${number}nd`)
    }else if(number===3){
        console.log(`${number}rd`)
    }else{
        console.log(`${number}th`)
    };
});

//Question # 34
let pizzas : string[] = ['Pizza Margherita','Cheese Pizza','Hawaiian Pizza'];
for (let i = 0; i < pizzas.length; i++){
    console.log(`I like ${pizzas[i]}`);
};
console.log(`I like cheese pizza because it's like a creamy, melted river of delight and the Hawaiian is sweet and savory, juicy ham and caramelized pineapple-a match made in heaven on bed of melted cheese and the classic margherita is a masterclass in fresh flavors and textures.I really love pizza!`);

//Question # 35
const animals : string[] = ['dog','cat','horse'];
for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
};
for(let i = 0; i < animals.length; i++){
    console.log(`${animals[i]} would make a great pet`)
};
console.log('Any of these animal would make a great pet');

//Question # 36
function make_shirt (size : number, message : string){
    console.log(`Make a T-shirt of size ${size}  with this message "${message}" printed on it`)
};
make_shirt(28,'I love coding');

//Question # 37
function large_shirt (size:string='large',message:string='I love typescript'){
    console.log(`Make a shirt of ${size} size with a message "${message}" on it`)
};
large_shirt();
 
function medium_shirt (size:string,message:string='I love programming'){
    console.log(`Make a T-shirt of ${size} size with a message "${message}"printed on it`)
};
medium_shirt('medium');

function small_shirt(size:string,message:string='I love programming'){
    console.log(`Make a T-shirt of ${size} size with a message "${message}" printed on it`)
};
small_shirt('small');

//Question # 38
function describe_city(city:string,country:string='Pakistan'){
    if(city==='New York'){
        console.log(`${city} is not in ${country}`);
    }else{
        console.log(`${city} is in ${country}`);
    }
};
describe_city('Karachi');
describe_city('Islamabad');
describe_city('New York');

//Question # 39
function city_country(city:string,country:string){
    console.log(`"${city},${country}"`);
};
city_country('Karachi','Pakistan');
city_country('New York','United States of America');
city_country('Paris','France');

//Question # 40
function make_album (artist:string,title:string,tracks?:number):object{
    return {artist,title,tracks}
};
console.log(make_album('Radiohed','OK Computer'));
console.log(make_album('Pink Floyd','The Dark Side of the Moon'));
console.log(make_album('Kendrick Lamar','To Pimp a Butterfly',16));

//Question # 41
let magicians : string[] = [
    'Alice','David','Chris','John'
];
function show_magicians(magicians:string[]){
    console.log(magicians)
};
show_magicians(magicians);

//Question # 42
function make_great(magician:string[]){
    magician.forEach((magician)=>{
        console.log(magician,'The Great')
    })
};
make_great(magicians);

//Question # 43
//unchanged magicians
function add_great (magician){
    let magician_copy : string[] = [];
    magician.forEach((magician)=>{
        magician_copy.push (`${magician} The Great`)
    });
    return magician_copy;
};
let magician_copy : string[] = add_great(magicians);
console.log(magician_copy);
console.log(magicians);

//Question # 44
//sandwich
function sandwich(...ingredients:string[]){
    console.log(`Make sandwich with ${ingredients}`)
};
sandwich('Grilled Chicken breast','Lettuce','Tomato','Mayonnaise','Chedder Cheese');
sandwich('Papperoni','Lettuce','Tomato','Crusty sub roll');
sandwich('Avocado','Hummus','Sprouts','Bell paper','Cucumber');

//Question # 45
//cars
function cars (manufacturer:string,model:string,option?:string[]):object{
    return {
        manufacturer,
        model,
        option
    }
};
console.log(cars('Toyota','Corolla',['Color: Silver metallic','Moon Roof']));
console.log(cars('Ford','Mustang',['Color: Race Red']));
console.log(cars('Honda','Civic',['Extra feature: Navigation System with Touchscreen display']))

