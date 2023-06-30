// Importing Office.js library
const Office = require('@microsoft/office-js');

// Function to get email metadata
function getEmailData() {
    // Using Office.js to get the current item
    let item = Office.context.mailbox.item;

    // Extracting metadata
    let from = item.from;
    let to = item.to;
    let date = item.dateTimeCreated;
    let subject = item.subject;
    let body = item.body;

    // Returning metadata as an object
    return {
        from: from,
        to: to,
        date: date,
        subject: subject,
        body: body
    };
}

// Exporting getEmailData function
module.exports = getEmailData;