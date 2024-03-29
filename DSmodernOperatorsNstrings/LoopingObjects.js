// Looping Objects: Object Keys, values,Entries properties of an Object transform the values in an Array  

const weekdays = ['mon','tue','wed','thru','fri','sat','sun']

openingHours = {
// we destructured the array
    
[weekdays[3]]: {
      open: 12,
      close: 22,
    },
[weekdays[4]]: {
      open: 11,
      close: 23,
    },
[weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours,


    order(starterIndex, mainIndex){
    
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];  
    
      },

    orderDelivery({starterIndex = 1 , mainIndex = 0 , address, time = '20:00'}){
  
        console.log(`Order Received! ${this.starterMenu[starterIndex]}
                     and ${this.mainMenu[mainIndex]} will be delivered
                     to ${address} at ${time}             
        `);

    },
    
    orderPizza(mainIngridents, ...otherIngridents){

        console.log(mainIngridents);
        console.log(otherIngridents);

    }
    
  };

  // Property NAMES 
  const properties = Object.keys(openingHours);

  console.log(properties);

  let OpenStr = `We are open on ${properties.length} days`;

  for(const day of Object.keys(openingHours)){

    // console.log(day);
    OpenStr += `${day},`
  }

  console.log(OpenStr);

//   Property VALUES 

const values = Object.values(openingHours);

console.log(values);


// Entire Object

const entries = Object.entries(openingHours);

console.log(entries);

// x will give each key and each value 
// we are suppose to destructure like [key, value] but value itself in entries is an object so we
// need to destructure the object futher and the end result is [key, {open,close}]sss 
for(const [key, {open,close}] of entries){

    console.log(`On ${key} we open at ${open} and close at ${close}`);
}