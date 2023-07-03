```javascript
// Importing required dependencies
const Office = require('@microsoft/office-js');

// Function to show the popup
function showPopup() {
    // Create a new dialog
    Office.context.ui.displayDialogAsync('https://localhost:3000/popup.html', 
    { height: 60, width: 60, displayInIframe: true }, 
    function (asyncResult) {
        if (asyncResult.status === Office.AsyncResultStatus.Failed) {
            console.error(asyncResult.error.message);
        } else {
            // Dialog has been opened, now we can close it or pass information to it
            const dialog = asyncResult.value;
            dialog.addEventHandler(Office.EventType.DialogMessageReceived, function(arg) {
                if (arg.message === 'submit') {
                    // Fetch email metadata
                    const emailData = getEmailMetadata();
                    // Interpret email
                    const interpretation = interpretEmail(emailData);
                    // Save email data
                    saveEmailData(emailData, interpretation);
                    // Close the dialog
                    dialog.close();
                } else if (arg.message === 'cancel') {
                    // Close the dialog
                    dialog.close();
                }
            });
        }
    });
}

// Exporting the function
module.exports = {
    showPopup
};
```