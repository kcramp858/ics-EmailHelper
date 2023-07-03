```javascript
// Importing required dependencies
const fs = require('fs');
const path = require('path');

// Function to create a reply to the email
function createEmailReply() {
    // Get the email data
    let emailData = getEmailMetadata();

    // Get the user input for instruction and task
    let instruction = document.getElementById('instructionInput').value;
    let task = document.getElementById('taskInput').value;

    // Create the reply template
    let replyTemplate = `
    #INSTRUCTION:
    ${instruction}
    #CONTEXT
    ${emailData.body}
    #TASK
    ${task}
    `;

    // Save the reply template to a file
    fs.writeFile(path.join(__dirname, '../templates/reply_template.txt'), replyTemplate, (err) => {
        if (err) throw err;
        console.log('Reply template saved!');
    });
}

// Event listener for the reply button
document.getElementById('replyButton').addEventListener('click', createEmailReply);
```