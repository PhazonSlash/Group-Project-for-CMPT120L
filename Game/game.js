//Java functions to implement game tasks

//object for player
var player = {
	name:'',
	townName:'',
	inventory:[], // an array of items the player has collected
};

//object for items
var item = {
	name:'',
	description:'',
	value:'',
};

/*constructor for item object
 inputs: 	String containing item name
			String containing item description
			Number containing the score value of the item
 */			
var Item = function(name, description, value){
	this.name = name;
	this.description = description;
	this.value = value;
}

//object for people
var person = {
	name:'',
	description:'',
	dialouge:'',
};

/*constructor for person object
 inputs: 	String containing item name
			String containing item description
			String containing dialogue
 */		
var Person = function(name, description, dialogue){
	this.name = name;
	this.description = description;
	this.dialouge = dialogue;
}

//object for locations
var location = {
	name:'',
	description:'',
	items:[],
	people:[],
	adjacentLocations:[],
};

/*constructor for location object
 inputs: 	String containing location name
			String containing location description
			Array containing items in the location
			Array containing people at the location
			Array containing locations adjacent to this location
 */		
var Location = function(name, description, items, people, adjacentLocations){
	this.name = name;
	this.description = description;
	this.items = items;
	this.people = people;
	this.adjacentLocations = adjacentLocations;
}

// add a connect() function which adds each Location to the other's adjacentLocations
function connectLocations(){




}

//--------------------------------------------------------------------------------------------------
//Items will be created here

//Library Items
ancientBook = new Item('Ancient Book', 'Wow looks like it is a thousand years old!.', 1);
hiddenTreasureMap = new Item('Hidden Treasure Map', 'A barely decipherable looking old map.', 1);
bookOnDecipheringCode = new Item('Book on Deciphering Code', 'Black leather bound book. Tons of useless information on breaking codes.', 1);
scienceBook = new Item('Science Book', 'Chemistry book.', 1);
mathBook = new Item('Math Book', 'Math book on Calculus.', 1);

//Hotel Items
roomKeySet = new Item('Room Key Set', 'A huge ring with keys on it, you can access everyone room in the hotel with this key set.', 1);
luggage = new Item('Luggage', 'A large luggage bag with wheels and Nike Backpack.', 1);
luggageCart = new Item('Luggage Cart', 'Big rolling luggage cart.', 1);
pillow = new Item('Pillow', 'A real comforatble down pillow.', 1);
elevatorKey = new Item('Elevator Key', 'A key to turn the elevators on and off.', 1);

//Grocery Store Items
shoppingBasket = new Item('Shopping Basket', 'A large basket to fit whatever items you want into it.', 1);
boxOfCereal = new Item('Box of Cereal', 'Frosted mini wheats, sounds like a good breakfast to me.', 1);
rawSteak = new Item('Raw Steak', 'A delicous porter house steak, find a grill so you can cook a nice meal.', 1);
priceGun = new Item('Price Gun', 'Take this price gun and use it to mark down the prices on groceries.', 1);
cashRegister = new Item('Cash Register', 'Full of money, imagine how much this is worth with all the money in it.', 1);

//Coffee Shop Items
hotCoffee = new Item('Hot Coffee', 'Hot! Be careful!', 1);
icedCoffee = new Item('Iced Coffee', 'Ice cold, perfect for hot days.', 1);
doughnut = new Item('Doughnut', 'Delicous chocalate covered donut, perfect for breakfast.', 1);
muffin = new Item('Muffin', 'Yummy chocolate chip muffin, warm right out of the oven.', 1);
thermos = new Item('Thermos', 'Stainless steel thermos used to keep your coffee hot.', 1);

//Hardware Store Items
hammer = new Item('Hammer', 'One of the best tools in carpentry, used for many jobs.', 1);
screwdriver = new Item('Screwdriver', 'You will used this tool for a lot of small jobs.', 1);
wrench = new Item('Wrench', 'Stainless steel adjustable wrench will help you tighten up bolts.', 1);
shovel = new Item('Shovel', 'Use this to do some digging!', 1);
saw = new Item('Saw', 'Hand saw that can be used to cut through small items.', 1);

//Police Station Items
handcuffs = new Item('Handcuffs', 'This is what the officers use to detain the bad guys when arresting them.', 1);
nightstick = new Item('Nightstick', 'One of the items officers always carry with them to subdue crooks.', 1);
handcuffKey = new Item('Handcuff Key', 'The key to a set of handcuffs. Hopefully you will never need this', 1);
taser = new Item('Taser', 'A very effective tool for self defense.', 1);
policeReport = new Item('Police Report', 'This is used to put the arrested ones on file.', 1);

//Auto Shop Items
tire = new Item('Tire', 'You can not drive with out good tires on your vehicle.', 1);
engine = new Item('Engine', 'The engine is the most essential item to operate a car.', 1);
torqueWrench = new Item('Torque Wrench', 'A perfect tool that is great for working on vehicles.', 1);
carJack = new Item('Car Jack', 'Use this to jack the car up to perform certain work on a vehicle.', 1);
alternator = new Item('Alternator', 'Keeps a charge on your battery and operates the vehicles electrical system.', 1);

//--------------------------------------------------------------------------------------------------
//People will be created here      Person(name, description, dialogue)

//Library People
librarian = new Person('Sally','Middle-Aged librarian', 'Welcome to the library! Whatever book, magazine or newspaper you are looking for I bet you can find here.');
student = new Person('Student', 'Highschool Student Studying', 'Hey, how are you? This book on Math is really boring. I heard that there was a book that contains a treasure map in this library but I can not find it.');

//Hotel People
Bellboy = new Person('Bobby','Eighteen year old bell boy', 'Hey! It is a lot of fun exploring everything in this hotel!');
Front Desk Help = new Person ('Mary', 'A very friendly young lady, who helps all the guests during their stay.', 'Welcome! As you can see we have all the ammenities you need to enjoy your stay here!');

//Grocery Store People
Cashier = new person ('Stephanie', '17 year old who is working to buy her first car.', 'I like to shop here with my family when I am not working. The selection of items is great!');
Clerk = new person  ('John', 'Deli Manager of the grocery store. A real nice guy to talk to.', 'Hi!');
Shopper = new person ('Mrs.Smith', 'Crazy older lady always looking for a deal on her groceries.', 'Do you work here! Aren\'t these steaks supposed to be cheaper!?!?');

//Coffee Shop People
Employee = new person ('Ryan', 'A sweet girl, who may have had too much coffee.', 'Can you figure out what the best item in here is??');
Hipster = new person ('Anthony', 'Thick black glasses, tight pants, and a coffee in hand.', 'Hey pal, want to sit down and chat I got plenty of time, I\'m not doing anything else.');

//Hardware Store People
Worker = new person ('Bill', 'Educated in business and took over this hardware store his dad started 34 years ago.', 'Welcome, if you need any help let me know. We have a lot of high quality products here for any home improvement needs you have.');
Contractor = new person ('Patrick', 'The best contractor in town. Whatever you need fixed he is the guy to do it.', 'What do you think would be best for building a house?(sarcasm)');

//Police Station People
Officer = new person ('Erika', 'Police woman ready for any duty.', 'Don\'t get in trouble because I have no problem arresting you!');
Crook = new person ('Steve', 'Bald with a big beard, who knows what he did this time to land himself in jail.', 'I didn\'t do it, I swear! Hey get those handcuff keys and help me get out of here...no ones looking!');

//Auto Shop People
Mechanic = new person ('Mike', 'A big guy who knows everything about mechanics.', 'I love working on cars all day long. I do have a lot of items here I do not need though.');
Customer = new person ('Erin', 'Tall lady with two kids gettting her mini-van fixed.', 'I don\'t know what is wrong with my mini-van. It won\'t start for some reason. ');

//--------------------------------------------------------------------------------------------------
// Locations will be created here    Location(name, description, items, people, adjacentLocations)

//Leave the adjacentLocations array blank, we will have a function that will assign those.
Library = new Location('Library', 'This is the Library of ' + user.townName + '. It is filled with thousand of books, Magazines, and newspaper articles. Any information you are looking for you will find here. Take a look around and see what you can find!', [ancientBook, hiddenTreasureMap, bookOnDecipheringCode, scienceBook, mathBook], [librarian, student], []); //<---- location array blank

Hotel = new Location ('Hotel', 'The hotel of ' + user.townName + ' is a hundred year old building with 42 beautiful rooms for travelers, tourists, and businessmen to stay in', [roomKeySet, luggage, luggageCart, pillow, elevatorKey], [Bellboy, Front Desk Help], []);

Grocery Store = new Location ('Grocery Store', 'You will find a lot of ' + user.townName + 'residents here on the weekend shopping for their groceries. Get your freshest food and other essential groceries here all at once!', [shoppingBasket, boxOfCereal, rawSteak, priceGun, cashRegister], [Cashier, Clerk, Shopper], []);

Coffee Shop = new Location ('Coffee Shop', 'A nice little place to get any type of coffee you would like along with a little something to eat. Anyday of the year is a good time to stop in!', [hotCoffee, icedCoffee, doughnut, muffin, thermos], [Employee, Hipster], []);

Hardware Store = new Location ('Hardware Store', 'With aisles and aisles of home and yard improvement items this is the perfect place to get the tool for the job. ', [hammer, screwdriver, wrench, shovel, saw], [Worker, Contractor], []);

Police Station = new Location ('Police Station', 'You do not want to end up here in the ' + user.townName + 'Police Station. The town is not highly crime plagued but this Station has eight holding cells and twelve officers prepared for anything. ', [handcuffs, nighstick, handcuffKey, taser, policeReport], [Officer, Crook], []);

Auto Shop = new Location ('Auto Shop', 'This Auto Shop features a six bay garage with four lifts. They have everything possible to fix any vehicle. Do not go anywhere else to get your car, truck, or any other motorized vehicle fixed!', [tire, engine, torqueWrench, carJack, alternator], [Mechanic, Customer], []);

//--------------------------------------------------------------------------------------------------
//Location where user can enter a town name and Character name

function createUser ()
{
var user = {townname: '', character: ''};
user.townname = document.getElementById('townName').value;
user.character = document.getElementById('charName').value;

document.getElementById('outputDiv').innerHTML=
 'Welcome to ' + user.townname + ' have fun playing our game ' + user.character + '!';
 document.getElementById('outputDiv').style.display='block';
 document.getElementById('inputDiv').style.display='none';
 }