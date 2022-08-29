// import the data from data.js/ declare a variable
const tableData = data;

//Referebce the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear the data
    tbody.html("");

    // lopp through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        ////append a row to the table body
        let row = tbody.append("tr");

        //Object.Values: reference one object from the UFO Sightings
        //(dataRow): arguement: we want the values to go in the dataRow
        // forEach((val)): specify we want one object per row
        Object.values(dataRow).forEach((val) => {
            //appending data into a table data tag
            let cell = row.append("td");
            //this variable holds only each value from the object 
            cell.text(val);
        }
        );
    });     
}
function handleClick() {

    // select datetime: the selector string is the item we're telling D3.js to look for
    //#datetime: look for datetime in HTML tags
    //.property("value") find the information,grab it, and put it in the date variable
    let date = d3.select("#datetime").property("value");
    // set the default filter and save it to the new variable
    let filteredData = tableData;
    if (date) {
        // filter method that will match the datetime value to the filtered date value
        // === test for strict equality, == test for loose equality 
        filteredData = filteredData.filter(row => row.datetime === date);


    };
    //rebuild the table using filtered data
    // if no date was entered, then fill data will just be the origial table data
    buildTable(filteredData);
}

//use the function when a button is clicked  
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
