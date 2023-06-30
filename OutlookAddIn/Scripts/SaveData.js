```javascript
const fs = require('fs');
const path = require('path');

// Import the showPopup function from Popup.js
const { showPopup } = require('./Popup.js');

// Define the path to the emailData.json file
const dataPath = path.join(__dirname, '../Data/emailData.json');

// Define the saveData function
function saveData(emailData, explanation, tasks) {
    // Read the existing data from the .json file
    let existingData = fs.readFileSync(dataPath, 'utf8');

    // Parse the existing data into a JavaScript object
    existingData = existingData ? JSON.parse(existingData) : [];

    // Create a new entry with the email data, explanation, and tasks
    const newEntry = {
        emailData,
        explanation,
        tasks
    };

    // Add the new entry to the existing data
    existingData.push(newEntry);

    // Write the updated data back to the .json file
    fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');

    // Close the popup
    showPopup(false);
}

// Export the saveData function
module.exports = {
    saveData
};
```