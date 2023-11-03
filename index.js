// show the user the average starting price of all the freelancers (Function)
//create body document 
//create headline for home page 
//create h2 for available freelancers 



//Create an intial array named freeLancers
const freeLancers = [                 
  {name: "Alice", occupation:"Writer", startingPrice: 30},
  {name: "Bob", occupation:"Teacher", startingPrice: 50},
  {name: "Carol", occupation:"Programmer", startingPrice: 70}  
]

// Use reduce to find sum of starting price 
const totalPrice = freeLancers.reduce((acc, currentValue) => acc + currentValue.startingPrice, 0);

// create a function to find mean 

const getAverage = () => {
  const mean = totalPrice / freeLancers.length;
  return mean; 
};

console.log(totalPrice); 
console.log(getAverage());

