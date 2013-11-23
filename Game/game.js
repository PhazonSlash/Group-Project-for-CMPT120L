//Java functions to implement game tasks

//object for player
var player = {
	name:'',
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


//Items will be created here

//Library Items
ancientBook = new Item('Ancient Book', 'Write a description of the ancient book here.', 1);
hiddenTreasureMap = new Item('Hidden Treasure Map', 'Write a description of the hidden treasure map here.', 1);
bookOnDecipheringCode = new Item('Book on Deciphering Code', 'Write a description of the book on deciphering code here.', 1);
scienceBook = new Item('Science Book', 'Write a description of the science book here.', 1);
mathBook = new Item('Math Book', 'Write a description of the math book here.', 1);

//Hotel Items
roomKeySet = new Item('Room Key Set', 'Write a description of the room key set here.', 1);
luggage = new Item('Luggage', 'Write a description of the luggage here.', 1);
luggageCart = new Item('Luggage Cart', 'Write a description of the luggage cart here.', 1);
pillow = new Item('Pillow', 'Write a description of the pillow here.', 1);
elevatorKey = new Item('Elevator Key', 'Write a description of the elevator key here.', 1);

//Grocery Store Items
shoppingBasket = new Item('Shopping Basket', 'Write a description of the shopping basket here.', 1);
boxOfCereal = new Item('Box of Cereal', 'Write a description of the box of cereal here.', 1);
rawSteak = new Item('Raw Steak', 'Write a description of the raw steak here.', 1);
priceGun = new Item('Price Gun', 'Write a description of the price gun here.', 1);
cashRegister = new Item('Cash Register', 'Write a description of the cash register here.', 1);

//Coffee Shop Items
hotCoffee = new Item('Hot Coffee', 'Write a description of the hot coffee here.', 1);
icedCoffee = new Item('Iced Coffee', 'Write a description of the iced coffee here.', 1);
doughnut = new Item('Doughnut', 'Write a description of the doughnut here.', 1);
muffin = new Item('Muffin', 'Write a description of the muffin here.', 1);
thermos = new Item('Thermos', 'Write a description of the thermos here.', 1);

//Hardware Store Items
hammer = new Item('Hammer', 'Write a description of the hammer here.', 1);
screwdriver = new Item('Screwdriver', 'Write a description of the screwdriver here.', 1);
wrench = new Item('Wrench', 'Write a description of the wrench here.', 1);
shovel = new Item('Shovel', 'Write a description of the shovel here.', 1);
saw = new Item('Saw', 'Write a description of the saw here.', 1);

//Police Station Items
handcuffs = new Item('Handcuffs', 'Write a description of the handcuffs here.', 1);
nightstick = new Item('Nightstick', 'Write a description of the nightstick here.', 1);
handcuffKey = new Item('Handcuff Key', 'Write a description of the handcuff key here.', 1);
taser = new Item('Taser', 'Write a description of the taser here.', 1);
policeReport = new Item('Police Report', 'Write a description of the police report here.', 1);

//Auto Shop Items
tire = new Item('Tire', 'Write a description of the tire here.', 1);
engine = new Item('Engine', 'Write a description of the engine here.', 1);
torqueWrench = new Item('Torque Wrench', 'Write a description of the torque wrench here.', 1);
carJack = new Item('Car Jack', 'Write a description of the car jack here.', 1);
alternator = new Item('Alternator', 'Write a description of the alternator here.', 1);