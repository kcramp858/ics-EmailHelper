```javascript
const fs = require('fs');
const path = require('path');

// Function to save email data
function saveEmail(emailData, settingsData) {
    // Extract PO# from email body
    const poNumber = emailData.body.match(/\b\d{6}\b/)[0];

    // Construct directory path
    const directoryPath = path.join(settingsData.rootDirectory, `${poNumber}-Damin-Mexico`);

    // Check if directory exists, if not create it
    if (!fs.existsSync(directoryPath)){
        fs.mkdirSync(directoryPath);
    }

    // Construct file path
    const filePath = path.join(directoryPath, `${emailData.subject}.json`);

    // Append email data to file
    fs.appendFileSync(filePath, JSON.stringify(emailData, null, 2));

    // Return success message
    return 'Email saved successfully!';
}

// Export saveEmail function
module.exports = {
    saveEmail
};
```