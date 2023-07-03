```javascript
// Importing the Office JS library
const Office = require('@microsoft/office-js');

// Function to get the email metadata
function getEmailMetadata() {
    // Using the Office JS library to get the current item (email)
    let email = Office.context.mailbox.item;

    // Creating an object to hold the email metadata
    let emailData = {
        from: email.from,
        to: email.to,
        date: email.dateTimeCreated,
        subject: email.subject,
        body: email.body
    };

    // Returning the email metadata
    return emailData;
}

// Exporting the getEmailMetadata function
module.exports = getEmailMetadata;
```