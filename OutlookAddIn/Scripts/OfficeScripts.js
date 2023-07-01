// Importing required modules
const fs = require('fs');
const path = require('path');

// Path to JSON files
const emailDataPath = path.join(__dirname, '../JSON/EmailData.json');
const LLMInterpretationPath = path.join(__dirname, '../JSON/LLMInterpretation.json');

// Function to show the popup
function showPopup() {
    Office.context.mailbox.item.body.getAsync('text', function(result) {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            let emailData = {
                from: Office.context.mailbox.item.from,
                to: Office.context.mailbox.item.to,
                date: Office.context.mailbox.item.dateTimeCreated,
                subject: Office.context.mailbox.item.subject,
                body: result.value
            };
            document.getElementById('emailMetadata').innerText = JSON.stringify(emailData, null, 2);
        } else {
            console.error(result.error);
        }
    });
}

// Function to submit the data
function submitData() {
    let userInput = {
        explanation: document.getElementById('userInputArea').value,
        tasks: document.getElementById('taskArea').value
    };
    let emailData = JSON.parse(document.getElementById('emailMetadata').innerText);
    let dataToSave = {
        emailData: emailData,
        userInput: userInput
    };
    fs.appendFileSync(emailDataPath, JSON.stringify(dataToSave, null, 2));
}

// Function to interpret the email
function interpretEmail() {
    let emailData = JSON.parse(document.getElementById('emailMetadata').innerText);
    let LLMInterpretation = require('./LLMInterpretation.js');
    let interpretation = LLMInterpretation.interpret(emailData);
    fs.writeFileSync(LLMInterpretationPath, JSON.stringify(interpretation, null, 2));
    document.getElementById('LLMOutput').innerText = JSON.stringify(interpretation, null, 2);
}

// Event listeners for the buttons
document.getElementById('showPopupButton').addEventListener('click', showPopup);
document.getElementById('submitDataButton').addEventListener('click', submitData);
document.getElementById('interpretEmailButton').addEventListener('click', interpretEmail);