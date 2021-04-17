// from data.js
var tableData = data;
var tbody = d3.select("tbody");

data.forEach(ufo => {
var row = tbody.append('tr')
row.append('td').text(ufo.datetime)
row.append('td').text(ufo.city)
row.append('td').text(ufo.state)
row.append('td').text(ufo.country)
row.append('td').text(ufo.shape)    
row.append('td').text(ufo.durationMinutes)  
row.append('td').text(ufo.comments)  
})


var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var dateInput = inputElement.property("value");

    console.log(dateInput);
    console.log(tableData);

    // var filteredData = tableData.filter( test => test.datetime === dateInput);
    var filteredData = tableData;    if (dateInput){ 
        filteredData = filteredData.filter(addRow => addRow.datetime === dateInput);    }

    console.log(filteredData);

    tbody.html("");

    filteredData.forEach(ufo => {
        var row = tbody.append('tr')
        row.append('td').text(ufo.datetime)
        row.append('td').text(ufo.city)
        row.append('td').text(ufo.state)
        row.append('td').text(ufo.country)
        row.append('td').text(ufo.shape)    
        row.append('td').text(ufo.durationMinutes)  
        row.append('td').text(ufo.comments)  
        })

};
