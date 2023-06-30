// Importing required dependencies
const Office = require('@microsoft/office-js');
const fs = require('fs');
const path = require('path');

// Function to show the popup
function showPopup() {
    Office.context.ui.displayDialogAsync('https://localhost:3000/commands/commands.html');
}

// Function to get email metadata
async function getMetadata() {
    const item = Office.context.mailbox.item;
    const emailMetadata = {
        from: item.from,
        to: item.to,
        date: item.dateTimeCreated,
        subject: item.subject,
        body: await item.body.getAsync(Office.CoercionType.Text)
    };
    return emailMetadata;
}

// Function to get user input
function getUserInput() {
    const explanation = document.getElementById('explanationBox').value;
    const tasks = document.getElementById('tasksBox').value;
    const userInput = { explanation, tasks };
    return userInput;
}

// Function to save the information to a .json file
function saveToJson(emailMetadata, userInput) {
    const data = { emailMetadata, userInput };
    const json = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname, '../assets/json/data.json'), json);
}

// Function to append new submission to the .json file
function appendToJson(emailMetadata, userInput) {
    const data = { emailMetadata, userInput };
    const json = JSON.stringify(data);
    fs.appendFileSync(path.join(__dirname, '../assets/json/data.json'), json);
}

// Event listener for the submit button
document.getElementById('submitButton').addEventListener('click', async () => {
    const emailMetadata = await getMetadata();
    const userInput = getUserInput();
    appendToJson(emailMetadata, userInput);
    hidePopup();
});

// Event listener for the cancel button
document.getElementById('cancelButton').addEventListener('click', () => {
    hidePopup();
});

// Function to hide the popup
function hidePopup() {
    Office.context.ui.messageParent('cancelMessage');
}

// Initialize the add-in
Office.onReady(() => {
    showPopup();
});