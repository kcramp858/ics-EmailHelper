// Importing required modules
const fs = require('fs');
const path = require('path');

// Function to get email metadata
function getMetadata() {
    // Get the current message object
    let item = Office.context.mailbox.item;

    // Create the emailMetadata object
    let emailMetadata = {
        from: item.from,
        to: item.to,
        date: item.dateTimeCreated,
        subject: item.subject,
        body: item.body
    };

    return emailMetadata;
}

// Function to get user input
function getUserInput() {
    // Get the user input from the DOM
    let explanation = document.getElementById('explanationBox').value;
    let tasks = document.getElementById('tasksBox').value;

    // Create the userInput object
    let userInput = {
        explanation: explanation,
        tasks: tasks
    };

    return userInput;
}

// Function to save the information to a .json file
function saveToJson(emailMetadata, userInput) {
    // Create the data object
    let data = {
        emailMetadata: emailMetadata,
        userInput: userInput
    };

    // Convert the data object to a JSON string
    let dataJson = JSON.stringify(data);

    // Write the JSON string to the data.json file
    fs.writeFileSync(path.join(__dirname, '../assets/json/data.json'), dataJson);
}

// Function to append new submission to the .json file
function appendToJson(emailMetadata, userInput) {
    // Read the existing data from the data.json file
    let dataJson = fs.readFileSync(path.join(__dirname, '../assets/json/data.json'));
    let data = JSON.parse(dataJson);

    // Create the new submission object
    let newSubmission = {
        emailMetadata: emailMetadata,
        userInput: userInput
    };

    // Append the new submission to the data
    data.push(newSubmission);

    // Convert the updated data to a JSON string
    let updatedDataJson = JSON.stringify(data);

    // Write the updated JSON string back to the data.json file
    fs.writeFileSync(path.join(__dirname, '../assets/json/data.json'), updatedDataJson);
}