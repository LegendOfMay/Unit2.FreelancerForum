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
//create body document 
body = document.body 
body.setAttribute("style", "border : 2px solid black" )

//create headline for home page 
const h1tag = document.createElement("h1");
h1tag.textContent = "Freelancer Forum";
body.append(h1tag);
h1tag.setAttribute("style", "margin:auto; width:50%; text-align:center;");

// show the user the average starting price of all the freelancers (Function)
const functionSection = document.createElement("section");
functionSection.textContent = `The average starting price is $ ${getAverage()}.`;
body.append(functionSection);
functionSection.setAttribute("style", "margin:auto; width:50%; text-align:center; text-decoration:underline; font-size: larger; padding: 30px;");

//create h2 for available freelancers 
const h2tag = document.createElement("h2");
h2tag.textContent = "Available Freelancers";
body.append(h2tag);
h2tag.setAttribute("style", "margin:auto; width:50%; text-align:center; padding: 30px;");
