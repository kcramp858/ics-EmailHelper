```javascript
// Importing required dependencies
const fs = require('fs');
const path = require('path');

// Function to display the popup
function displayPopup() {
    // Get the email metadata
    let emailData = Office.context.mailbox.item;

    // Populate the left column with email metadata
    document.getElementById('emailMetadata').innerHTML = `
        From: ${emailData.from}
        To: ${emailData.to}
        Date: ${emailData.dateTimeCreated}
        Subject: ${emailData.subject}
        Body: ${emailData.body}
    `;

    // Clear the user input fields
    document.getElementById('userExplanation').value = '';
    document.getElementById('userTasks').value = '';
}

// Function to save the data to the .json file
function saveDataToJson() {
    // Get the user input
    let userInput = {
        explanation: document.getElementById('userExplanation').value,
        tasks: document.getElementById('userTasks').value
    };

    // Combine the email data and user input
    let combinedData = {
        emailData: Office.context.mailbox.item,
        userInput: userInput
    };

    // Read the existing .json file
    let jsonData = fs.readFileSync(path.join(__dirname, '../JSON/EmailData.json'));

    // Parse the .json file
    let data = JSON.parse(jsonData);

    // Append the new submission to the .json file
    data.push(combinedData);

    // Write the updated data back to the .json file
    fs.writeFileSync(path.join(__dirname, '../JSON/EmailData.json'), JSON.stringify(data));
}

// Event listener for the 'showPopup' message
Office.initialize = function() {
    Office.context.mailbox.addHandlerAsync(Office.EventType.DialogMessageReceived, showPopup);
};

// Event listener for the 'saveData' message
document.getElementById('submit').addEventListener('click', saveDataToJson);
document.getElementById('cancel').addEventListener('click', displayPopup);
```