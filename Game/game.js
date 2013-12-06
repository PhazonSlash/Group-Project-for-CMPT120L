//Java functions to implement game tasks

//variables
var currentLocation;
var validActions = ['go', 'enter', 'pick', 'get', 'talk', 'inventory', 'examine', 'help'];

var currentAction = '';
var currentSubject = '';
var currentSubjectType = '';

var maximumItems = 10;
var endOfGame = false;

//Object for user
var user = {
	townName: '',
	character: '',
	inventory:[],
};

//object for items
var item = {
	name:'',
	description:'',
	value:'',
	keyword:'',
	obtained:false,
};

/*constructor for item object
 inputs: 	String containing item name
			String containing item description
			Number containing the score value of the item
			String keyword for searching
			Boolean if item is in player's inventory
 */	
 
var Item = function(name, description, value, keyword, obtained){
	this.name = name;
	this.description = description;
	this.value = value;
	this.keyword = keyword;
	this.obtained = obtained;
}

//object for people
var person = {
	name:'',
	description:'',
	dialogue:'',
	keyword:'',
};

/*constructor for person object
 inputs: 	String containing item name
			String containing item description
			String containing dialogue
			A keyword for searching
 */		
var Person = function(name, description, dialogue, keyword){
	this.name = name;
	this.description = description;
	this.dialogue = dialogue;
	this.keyword = keyword;
}

//object for locations
var location = {
	name:'',
	description:'',
	items:[],
	people:[],
	adjacentLocations:[],
	keyword:'',
};

/*constructor for location object
 inputs: 	String containing location name
			String containing location description
			Array containing items in the location
			Array containing people at the location
			Array containing locations adjacent to this location
			A keyword for searching
 */		
var Location = function(name, description, items, people, adjacentLocations, keyword){
	this.name = name;
	this.description = description;
	this.items = items;
	this.people = people;
	this.adjacentLocations = adjacentLocations;
	this.keyword = keyword;
}

//--------------------------------------------------------------------------------------------------
//Function to create items

function createItems(){
	//Library Items
	ancientBook = new Item('Ancient Book', 'Wow looks like it is a thousand years old!.', 3, 'ancient', false);
	hiddenTreasureMap = new Item('Hidden Treasure Map', 'A barely decipherable looking old map.', 5, 'map');
	bookOnDecipheringCode = new Item('Book on Deciphering Code', 'Black leather bound book. Tons of useless information on breaking codes.', 4, 'code', false);
	scienceBook = new Item('Science Book', 'Chemistry book.', 1, 'science', false);
	mathBook = new Item('Math Book', 'Math book on Calculus.', 1, 'math', false);

	//Hotel Items
	roomKeySet = new Item('Room Key Set', 'A huge ring with keys on it, you can access everyone room in the hotel with this key set.', 3, 'room', false);
	luggage = new Item('Luggage', 'A large luggage bag with wheels and Nike Backpack.', 1, 'luggage', false);
	luggageCart = new Item('Luggage Cart', 'Big rolling luggage cart.', 1, 'cart', false);
	pillow = new Item('Pillow', 'A real comforatble down pillow.', 1, 'pillow', false);
	elevatorKey = new Item('Elevator Key', 'A key to turn the elevators on and off.', 3, 'elevator', false);

	//Grocery Store Items
	shoppingBasket = new Item('Shopping Basket', 'A large basket to fit whatever items you want into it.', 1, 'basket', false);
	boxOfCereal = new Item('Box of Cereal', 'Frosted mini wheats, sounds like a good breakfast to me.', 1, 'cereal', false);
	rawSteak = new Item('Raw Steak', 'A delicous porter house steak, find a grill so you can cook a nice meal.', 1, 'steak', false);
	priceGun = new Item('Price Gun', 'Take this price gun and use it to mark down the prices on groceries.', 3, 'price', false);
	cashRegister = new Item('Cash Register', 'Full of money, imagine how much this is worth with all the money in it.', 5, 'register', false);

	//Coffee Shop Items
	hotCoffee = new Item('Hot Coffee', 'Hot! Be careful!', 1, 'hot', false);
	icedCoffee = new Item('Iced Coffee', 'Ice cold, perfect for hot days.', 1, 'iced', false);
	doughnut = new Item('Doughnut', 'Delicous chocalate covered donut, perfect for breakfast.', 1, 'doughnut', false);
	muffin = new Item('Muffin', 'Yummy chocolate chip muffin, warm right out of the oven.', 1, 'muffin', false);
	thermos = new Item('Thermos', 'Stainless steel thermos used to keep your coffee hot.', 2, 'thermos', false);

	//Hardware Store Items
	hammer = new Item('Hammer', 'One of the best tools in carpentry, used for many jobs.', 3, 'hammer', false);
	screwdriver = new Item('Screwdriver', 'You will used this tool for a lot of small jobs.', 2, 'screwdriver', false);
	wrench = new Item('Wrench', 'Stainless steel adjustable wrench will help you tighten up bolts.', 3, 'wrench', false);
	shovel = new Item('Shovel', 'Use this to do some digging!', 2, 'shovel', false);
	saw = new Item('Saw', 'Hand saw that can be used to cut through small items.', 3, 'saw', false);

	//Police Station Items
	handcuffs = new Item('Handcuffs', 'This is what the officers use to detain the bad guys when arresting them.', 2, 'handcuffs', false);
	nightstick = new Item('Nightstick', 'One of the items officers always carry with them to subdue crooks.', 3, 'nightstick', false);
	handcuffKey = new Item('Handcuff Key', 'The key to a set of handcuffs. Hopefully you will never need this', 3, 'key', false);
	taser = new Item('Taser', 'A very effective tool for self defense.', 5, 'taser', false);
	policeReport = new Item('Police Report', 'This is used to put the arrested ones on file.', 1, 'report', false);

	//Auto Shop Items
	tire = new Item('Tire', 'You can not drive with out good tires on your vehicle.', 1, 'tire', false);
	engine = new Item('Engine', 'The engine is the most essential item to operate a car.', 5, 'engine', false);
	torqueWrench = new Item('Torque Wrench', 'A perfect tool that is great for working on vehicles.', 3, 'wrench', false);
	carJack = new Item('Car Jack', 'Use this to jack the car up to perform certain work on a vehicle.', 2, 'jack', false);
	alternator = new Item('Alternator', 'Keeps a charge on your battery and operates the vehicles electrical system.', 2, 'alternator', false);
}

//--------------------------------------------------------------------------------------------------
//Function to create people      Person(name, description, dialogue, keyword)

function createPeople(){
	//Library People
	librarian = new Person('Sally the Librarian','Middle-Aged librarian', 'Welcome to the library! Whatever book, magazine or newspaper you are looking for I bet you can find here. There is even a book on deciphering code and an ancient book which no one knows how old it is!', 'librarian');
	student = new Person('Student', 'Highschool Student Studying', 'Hey, how are you? This book on Math and book on Science is really boring. I heard that there was a book that contains a treasure map in this library but I can not find it.', 'student');

	//Hotel People
	bellboy = new Person('Bobby the Bellboy','Eighteen year old bell boy', 'Hey! It is a lot of fun exploring everything in this hotel! When I am bored I twirl my room key set and ride the luggage cart through the halls. I also use my elevator key to trap other employees on the elevator as a joke, one that they don\t always find funny.', 'bellboy');
	frontDeskHelp = new Person ('Mary at the Front Desk', 'A very friendly young lady, who helps all the guests during their stay.', 'Welcome! As you can see we have all the ammenities you need to enjoy your stay here! Any pillow of ours I guarantee is the most comfy pillow you have slept on. Just leave your luggage with us and we can bring it right to your room.', 'frontdesk');

	//Grocery Store People
	cashier = new Person ('Stephanie the Grocery Store Cashier', '17 year old who is working to buy her first car.', 'I like to shop here with my family when I am not working. The selection of items is great! I also like to play with the price gun and mark any box of cereal that I like to a cheaper price.', 'cashier');
	clerk = new Person  ('John the Deli Clerk', 'Deli Manager of the grocery store. A real nice guy to talk to.', 'Hi! The raw steak would be in the meat department not here and the cash register is up front. Have a good day now!', 'clerk');
	shopper = new Person ('Mrs. Smith the Grocery Store Shopper', 'Crazy older lady always looking for a deal on her groceries.', 'Do you work here! Aren\'t these steaks supposed to be cheaper!?!? I am about to leave my shopping basket and go home!', 'shopper');

	//Coffee Shop People
	employee = new Person ('Ryan the Coffee Shop Employee', 'A sweet girl, who may have had too much coffee.', 'Can you figure out what my favorite item in here is?? Do you think it\s the Iced Coffee, Hot Coffee, donut, or muffin?', 'employee');
	hipster = new Person ('Anthony the Hipster', 'Thick black glasses, tight pants, and a coffee in hand.', 'Hey pal, want to sit down and chat I got plenty of time, I\'m not doing anything else. I bring my own thermos of coffee instead of buying what they have here.', 'hipster');

	//Hardware Store People
	worker = new Person ('Bill the Hardware Store Owner', 'Educated in business and took over this hardware store his dad started 34 years ago.', 'Welcome, if you need any help let me know. We have a lot of high quality products here including a hammer, screwdriver, and wrench for any home improvement needs you have.', 'worker');
	contractor = new Person ('Patrick the Contractor', 'The best contractor in town. Whatever you need fixed he is the guy to do it.', 'Alright lets see I need a new shovel for my wife for her garden and I need a new saw because my old one is too dull now. Well at least this is the right place to get those items!','contractor');

	//Police Station People
	officer = new Person ('Officer Erika', 'Police woman ready for any duty.', 'Don\'t get in trouble because I have no problem slapping these handcuffs on you or using my night stick or taser if you resist arrest!', 'officer');
	crook = new Person ('Steve the Crook', 'Bald with a big beard, who knows what he did this time to land himself in jail.', 'I didn\'t do it, I swear! Hey get those handcuff keys and help me get out of here...no ones looking! Also grab the police report so there is no record of me being arrrested.', 'crook');

	//Auto Shop People
	mechanic = new Person ('Mike the Mechanic', 'A big guy who knows everything about mechanics.', 'I love working on cars all day long. I can do anything as little as change a tire, changing and alternator, or swithcing out an engine.', 'mechanic');
	customer = new Person ('Erin the Customer', 'Tall lady with two kids gettting her mini-van fixed.', 'I don\'t know what is wrong with my mini-van. It won\'t start for some reason. He said all he needed to do was get the car jack underneath it and use the torque wrench to do something....I don\t know what he is talking about but as long as he fixes it I will be happy.', 'customer');
}

//--------------------------------------------------------------------------------------------------
// Locations will be created here    Location(name, description, items, people, adjacentLocations, keyword)
function createLocations(){

	//Uptown Areas
	library = new Location('Library', 'This is the Library of ' + user.townName + '. It is filled with thousand of books, Magazines, and newspaper articles. Any information you are looking for you will find here. Take a look around and see what you can find!', [ancientBook, hiddenTreasureMap, bookOnDecipheringCode, scienceBook, mathBook], [librarian, student], [], 'library');

	hotel = new Location ('Hotel', 'The hotel of ' + user.townName + ' is a hundred year old building with 42 beautiful rooms for travelers, tourists, and businessmen to stay in', [roomKeySet, luggage, luggageCart, pillow, elevatorKey], [bellboy, frontDeskHelp], [], 'hotel');

	//Shopping District Areas
	groceryStore = new Location ('Grocery Store', 'You will find a lot of ' + user.townName + ' residents here on the weekend shopping for their groceries. Get your freshest food and other essential groceries here all at once!', [shoppingBasket, boxOfCereal, rawSteak, priceGun, cashRegister], [cashier, clerk, shopper], [], 'grocery');

	coffeeShop = new Location ('Coffee Shop', 'A nice little place to get any type of coffee you would like along with a little something to eat. Anyday of the year is a good time to stop in!', [hotCoffee, icedCoffee, doughnut, muffin, thermos], [employee, hipster], [], 'coffee');

	hardwareStore = new Location ('Hardware Store', 'With aisles and aisles of home and yard improvement items this is the perfect place to get the tool for the job. ', [hammer, screwdriver, wrench, shovel, saw], [worker, contractor], [], 'hardware');

	//Downtown Areas
	policeStation = new Location ('Police Station', 'You do not want to end up here in the ' + user.townName + ' Police Station. The town is not highly crime plagued but this Station has eight holding cells and twelve officers prepared for anything. ', [handcuffs, nightstick, handcuffKey, taser, policeReport], [officer, crook], [], 'police');

	autoShop = new Location ('Auto Shop', 'This Auto Shop features a six bay garage with four lifts. They have everything possible to fix any vehicle. Do not go anywhere else to get your car, truck, or any other motorized vehicle fixed!', [tire, engine, torqueWrench, carJack, alternator], [mechanic, customer], [], 'auto');

	//Districts
	downtown = new Location ('Downtown', 'This is Downtown ' + user.townName + ' where you will find our lovely Police Station and Auto Shop. If you get into trouble with the law or car problems you will find yourself here. If you travel north from here, you will find yourself in the Shopping District.', [], [], [], 'downtown');

	shoppingDistrict = new Location ('Shopping District', 'You find yourself in the busy Shopping District of ' + user.townName +'. You see a large grocery store on your right. Across the street from the grocery store you see a road that leads west to Uptown. On one side of this road you see a small coffee shop. Across the street from the coffee shop you see a hardware store. If you take the main road south, you will arrive in Downtown.', [], [], [], 'shopping');

	uptown = new Location ('Uptown', 'While in Uptown ' + user.townName + ' you will experience a nice laid back area. This part of town includes a library, for the book connoisseurs, and a Hotel for individuals visiting on business or some tourists.If you travel South-East you will find the Shopping District and continue South to get to Downtown', [], [], [], 'uptown');
}

//--------------------------------------------------------------------------------------------------
//General Game Functions

//Function to clear the input text box
function clear(){
	document.getElementById('userInputBox').value = '';
}

//Function to move the player to a new location
function goTo(location){
	currentLocation = location; //set the current location
	document.getElementById('descriptionDiv').innerHTML = currentLocation.description; //display the description of the new location
	document.getElementById('outputDiv').innerHTML = '';
}

//Function to pick up an item
function pickUp(item){
	if(!item.obtained){
		user.inventory.splice(-1, 0, item)
		item.obtained = true;
		document.getElementById('outputDiv').innerHTML= 'You recieved ' + item.name + '! You put it in your inventory. You now have ' + user.inventory.length + ' out of a possible ' + maximumItems + ' items in your inventory!';
		
		//Check to see if user meets the maximum items
		if(user.inventory.length >= maximumItems){
			end();
			return;
		}
	}else{
		document.getElementById('outputDiv').innerHTML= 'You already have that item!';
	}
}

//Function to talk to someone
function talkTo(person){
	document.getElementById('outputDiv').innerHTML= person.dialogue;
	
}

//Function to display inventory
function printInventory(){
	if(user.inventory.length === 0){
		document.getElementById('outputDiv').innerHTML= 'You dont have anything in your inventory!';
	}else if(user.inventory.length === 1){
		document.getElementById('outputDiv').innerHTML= 'You have: ' + user.inventory[0].name + user.inventory.length;
		}else{
				var inventoryString = 'You have ' + user.inventory.length + ' items. They are: ';
				
				for(i = 0; i < user.inventory.length; i++){
					inventoryString = inventoryString + user.inventory[i].name + ', ';
				}
				document.getElementById('outputDiv').innerHTML= inventoryString;
			}
	
	
}

//Game Over Function
function end(){
	var finalScore = 0;
	//Calculate the final score
	for(i = 0; i < user.inventory.length; i++){
		finalScore = finalScore + user.inventory[i].value
	}
	//Hide game specific divs
	document.getElementById('descriptionDiv').style.display='none';
	document.getElementById('textEntryDiv').style.display='none';
	
	//Print Results into outputDiv
	document.getElementById('outputDiv').innerHTML= 'Your final score based on the items you collected is ' + finalScore + '. Thanks for playing ' + user.character + '!';


}

//--------------------------------------------------------------------------------------------------
/*function to search through two arrays for a common element
Assumes:	the firstArray is the list of words from the user
			the second array is either the list of valid actions or an array of subjects
			the type will either be action or subject
			
Returns:	if the element was found or not
*/
function isValid(firstArray, secondArray, type){
	for(i = 0; i < firstArray.length; i++){
		for(j = 0; j < secondArray.length; j++){
				if(type === 'action'){
					if(firstArray[i] === secondArray[j]){ //if there is a matching word
						currentAction = secondArray[j];//this will be the action performed this turn
						return true; //the item is valid
					}
				}else if(firstArray[i] === secondArray[j].keyword){ //if there is a matching word
						currentSubject = secondArray[j];//this will be the subject the action is performed on this turn
						currentSubjectType = type;
						return true; //the item is valid
				}
			}
		}
		return false;//element not found, the user input is not valid
	}


//--------------------------------------------------------------------------------------------------
//function to connect locations to each other's adjacentLocations
function connectLocations(){
	downtown.adjacentLocations = [autoShop, policeStation, shoppingDistrict] 
	shoppingDistrict.adjacentLocations = [coffeeShop, hardwareStore, groceryStore, downtown, uptown]
	uptown.adjacentLocations = [library, hotel, shoppingDistrict]
	autoShop.adjacentLocations = [downtown]
	policeStation.adjacentLocations = [downtown]
	coffeeShop.adjacentLocations = [shoppingDistrict]
	hardwareStore.adjacentLocations = [shoppingDistrict]
	groceryStore.adjacentLocations = [shoppingDistrict]
	library.adjacentLocations = [uptown]
	hotel.adjacentLocations = [uptown]
}

//--------------------------------------------------------------------------------------------------
//Function where user can enter a town name and Character name

function createUser (){
	//create user and get names from the user
	user.townName = document.getElementById('townName').value;
	user.character = document.getElementById('charName').value;

	//hide the user creation div and show the output div
	
	document.getElementById('outputDiv').style.display='block';
	document.getElementById('descriptionDiv').style.display='block';
	document.getElementById('textEntryDiv').style.display='block';
	document.getElementById('inputDiv').style.display='none';
 
	//Inititalize stuff
	clear();
	createItems();
	createPeople();
	createLocations();
	connectLocations();
	goTo(downtown); //Start the user in this location
	
	//Welcome the user
	document.getElementById('outputDiv').innerHTML=
	'Welcome to ' + user.townName + ', have fun playing our game ' + user.character + '! ' + user.townName + 'is divided intothree sections Uptown, the Shopping District, and Downtown.';
 }
 
 //--------------------------------------------------------------------------------------------------
//The main function of the game
//This function will run when the user clicks the enter button next to the text box
function mainGame(){
	
	//get the command from the user and make sure it's valid
	var userInput = document.getElementById('userInputBox').value; //need to add a userInputBox text box
	userInput = userInput.toLowerCase(); //makes the whole string lowercase for comparison reasons
	inputArray = userInput.split(" "); //split up individual words into an array using blank spaces as the delimiter
		
	//search to see if the first action word of the user is valid and set the currentAction variable to that action
	if(!isValid(inputArray, validActions, 'action')){
		//print message about invalid input
		document.getElementById('outputDiv').innerHTML= 'Do what now?';
		clear();
		return; //leave the main function and wait for another user input
	}
	
	//see if the action is help
	if(currentAction === 'help'){
		help(); //run the help function
		clear();
		return; //leave the main function and wait for another user input
	
	}
	
	//see if the action is inventory
	if(currentAction === 'inventory'){
		printInventory();
		clear();
		return; //leave the main function and wait for another user input
	
	}
	
	
	//search to see if the first subject word of the user is valid and set the currentSubject variable to that subject
	//first, see if the subject is a person
	if(!isValid(inputArray, currentLocation.people, 'person')){
		//next, see if the subject is an item
		if(!isValid(inputArray, currentLocation.items, 'item')){
			//finally, see if the subject is an adjacent location
			if(!isValid(inputArray, currentLocation.adjacentLocations, 'location')){
				//if it gets this far then the input must not contain a valid subject
				//print message about invalid input
				document.getElementById('outputDiv').innerHTML= 'That doesn\'t make any sense.';
				clear();
				return; //leave the main function and wait for another user input
			}
		
		}
	}
	
	//at this point, everything should be valid
	//time to perform the action
	
	switch(currentAction){
		case 'go':
			if(currentSubjectType === 'location'){
				goTo(currentSubject);				
			} else{
				
				document.getElementById('outputDiv').innerHTML= 'How exactly do you go to ' + currentSubject.name + '?';
			}
			break;
		case 'enter':
			if(currentSubjectType === 'location'){
				goTo(currentSubject);				
			} else{
				//print a message saying you can't go to a non location
				document.getElementById('outputDiv').innerHTML= 'How exactly do you enter ' + currentSubject.name + '?';
			}
			break;
		case 'pick':
			if(currentSubjectType === 'item'){
				pickUp(currentSubject);				
			} else{
				//print a message saying you can't pick up a non item
				document.getElementById('outputDiv').innerHTML= 'How do you expect to pick up a ' + currentSubject.name + '?';
			}
			break;
		case 'get':
			if(currentSubjectType === 'item'){
				pickUp(currentSubject);				
			} else{
				//print a message saying you can't pick up a non item
				document.getElementById('outputDiv').innerHTML= 'How do you expect to get a ' + currentSubject.name + ' in your inventory?';
			}
			break;
		case 'talk':
			if(currentSubjectType === 'person'){
				talkTo(currentSubject);				
			} else{
				//print a message saying you can't talk to a non person
				document.getElementById('outputDiv').innerHTML= 'You can talk to that ' + currentSubject.name + ' all you want. It\'s not going to respond.';
			}
			break;
		case 'examine':
			document.getElementById('outputDiv').innerHTML= currentSubject.description;
			break;
	
	}
	clear();
	
	//Is the game over yet?
	if(endOfGame){
		end();
	}
}




