//array of freelancers on the list
// has their name, ocupation, and starting price
const freelancerList = [
  { name: "Alice", ocupation: "Writer", price: 30 },
  { name: "Bob", ocupation: "Teacher", price: 50 },
];

//a message diplaying on the screen of the average starting price
let averagePrice = calculateAverage(freelancerList);

//call displayFreelancers function
displayFreelancers(freelancerList);

//call displayAveragePrice function
displayAveragePrice();

// a new freelancer is added (carol)
setInterval(() => {
  const newFreelancer = { name: "Carol", ocupation: "Programer", price: 40 };
  freelancerList.push(newFreelancer);
  averagePrice = calculateAverage(freelancerList);

  displayFreelancers(freelancerList);
  displayAveragePrice();
}, 5000);

//create a function to calculate the average starting price
function calculateAverage(freelancers) {
  const totalPrices = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return totalPrices / freelancers.length;
}

function displayFreelancers(freelancers) {
  const freelancersList = document.getElementById("freelancers");
  freelancersList.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const listItem = document.createElement("li");
    listItem.className = "freelance";
    listItem.innerHTML =
      "${freelancer.name} ${freelancer.occupation} ${freelancer.price}";
    freelancersList.appendChild(listItem);
  });
}

function displayAveragePrice() {
  const avgPrice = document.getElementById("averagePrice");
  avgPrice.textContent = averagePrice.toFixed(2);
}

function main() {
  const heading = document.querySelector("#heading");
  const h1 = document.createElement("h1");
  h1.innerText = "Freelancer Forum";
  heading.appendChild(h1);
}
