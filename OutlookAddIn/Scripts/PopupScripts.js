// Importing required dependencies
const fs = require('fs');
const path = require('path');

// Function to show the popup
function showPopup(emailData) {
    // Get the DOM elements
    const emailMetadata = document.getElementById('emailMetadata');
    const userInputArea = document.getElementById('userInputArea');
    const taskArea = document.getElementById('taskArea');

    // Populate the email metadata
    emailMetadata.innerHTML = `
        <p>From: ${emailData.from}</p>
        <p>To: ${emailData.to}</p>
        <p>Date: ${emailData.date}</p>
        <p>Subject: ${emailData.subject}</p>
        <p>Body: ${emailData.body}</p>
    `;

    // Clear the user input and task areas
    userInputArea.value = '';
    taskArea.value = '';

    // Show the popup
    $('#popup').modal('show');
}

// Function to submit the data
function submitData() {
    // Get the DOM elements
    const userInputArea = document.getElementById('userInputArea');
    const taskArea = document.getElementById('taskArea');

    // Get the user input and tasks
    const userInput = userInputArea.value;
    const tasks = taskArea.value;

    // Create the data object
    const data = {
        emailData,
        userInput,
        tasks
    };

    // Append the data to the JSON file
    fs.appendFile(path.join(__dirname, '../JSON/EmailData.json'), JSON.stringify(data, null, 2), (err) => {
        if (err) throw err;
        console.log('Data saved to JSON file.');
    });

    // Hide the popup
    $('#popup').modal('hide');
}

// Event listener for the showPopup message
Office.initialize = function() {
    Office.context.mailbox.addHandlerAsync(Office.EventType.ItemChanged, showPopup);
};

// Event listener for the submitData message
document.getElementById('submit').addEventListener('click', submitData);