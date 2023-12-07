//array of freelancers on the list
// has their name, ocupation, and starting price
const freelancerList = [
  { name: "Alice", ocupation: "Writer", price: 30 },
  { name: "Bob", ocupation: "Teacher", price: 50 },
];

const averagePrice = document.querySelector("averagePrice");

//create table header
function createTableHeader(table) {
  //create thead
  const thead = document.createElement("thead");
  //create the header for rows for our table
  const headerRow = document.createElement("tr");
  //create an array that will store all the headings we want for out table
  const headers = ["name", "occupation", "price"];

  // loop over to get every element
  for (const header of headers) {
    // create a new table heading th
    //add the header text inbewtween tags <th>name</th>
    const th = document.createElement("th");
    //take the text from our header array and add it between th tags
    th.innerText = headers;
    //add th to out tr
    headerRow.appendChild(th);
  }
  // add header row to thead
  thead.appendChild(headerRow);
  //add thead to the table
  table.appendChild(thead);
}

//* ******* table body table rows ******** */
function createTableBody(table, freelancers) {}
