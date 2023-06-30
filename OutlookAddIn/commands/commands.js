// Importing required dependencies
const Office = require('@microsoft/office-js');
const fs = require('fs');
const path = require('path');

// Function to show the popup
function showPopup() {
    Office.context.ui.displayDialogAsync('https://localhost:3000/taskpane.html');
}

// Function to get email metadata
async function getMetadata() {
    const item = Office.context.mailbox.item;
    return {
        from: item.from,
        to: item.to,
        date: item.dateTimeCreated,
        subject: item.subject,
        body: await item.body.getAsync(Office.CoercionType.Text)
    };
}

// Function to get user input
function getUserInput() {
    const explanation = document.getElementById('explanationBox').value;
    const tasks = document.getElementById('tasksBox').value;
    return { explanation, tasks };
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
    const file = fs.readFileSync(path.join(__dirname, '../assets/json/data.json'));
    const jsonData = JSON.parse(file);
    jsonData.push(data);
    fs.writeFileSync(path.join(__dirname, '../assets/json/data.json'), JSON.stringify(jsonData));
}

// Event listener for the submit button
document.getElementById('submitButton').addEventListener('click', async () => {
    const emailMetadata = await getMetadata();
    const userInput = getUserInput();
    appendToJson(emailMetadata, userInput);
    Office.context.ui.messageParent('submitMessage');
});

// Event listener for the cancel button
document.getElementById('cancelButton').addEventListener('click', () => {
    Office.context.ui.messageParent('cancelMessage');
});

// Event listener for the button in the ribbon
Office.ribbon.requestCreateControls([
    {
        tab: 'TabDefault',
        group: 'group1',
        control: {
            id: 'Button1',
            type: 'Button',
            label: 'Show Popup',
            icon: 'Icon.80x80',
            onAction: showPopup
        }
    }
]);