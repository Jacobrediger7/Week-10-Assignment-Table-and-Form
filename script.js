// script.js

// Add an event listener to the form that listens for a submit event
document.getElementById('dataForm').addEventListener('submit', function(e) {
    
    e.preventDefault(); // Prevent the form from reloading the page

    // Get the value entered in the 'Name' input field
    const name = document.getElementById('inputName').value;
    
    // Get the value entered in the 'Age' input field
    const age = document.getElementById('inputAge').value;
    
    // Get the value entered in the 'Country' input field
    const country = document.getElementById('inputCountry').value;

    // Create a new table row element (<tr>)
    const newRow = document.createElement('tr');
    
    // Count the current number of rows in the table and add 1 for the new row
    const rowCount = document.getElementById('tableBody').rows.length + 1;

    // Create a new header cell (<th>) for the row index
    const cell1 = document.createElement('th');
    cell1.scope = "row"; // Set the scope attribute to 'row'
    cell1.textContent = rowCount; // Set the text content to the row number
    newRow.appendChild(cell1); // Append this header cell to the new row

    // Create a new cell (<td>) for the 'Name'
    const cell2 = document.createElement('td');
    cell2.textContent = name; // Set the text content to the name entered by the user
    newRow.appendChild(cell2); // Append this cell to the new row

    // Create a new cell (<td>) for the 'Age'
    const cell3 = document.createElement('td');
    cell3.textContent = age; // Set the text content to the age entered by the user
    newRow.appendChild(cell3); // Append this cell to the new row

    // Create a new cell (<td>) for the 'Country'
    const cell4 = document.createElement('td');
    cell4.textContent = country; // Set the text content to the country entered by the user
    newRow.appendChild(cell4); // Append this cell to the new row

    // Append the newly created row to the table body (<tbody>)
    document.getElementById('tableBody').appendChild(newRow);
    
    // Reset the form fields to their default values (clear them)
    document.getElementById('dataForm').reset();
});
