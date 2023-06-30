// Import getEmailData function from MessageRead.js
const { getEmailData } = require('./MessageRead.js');

// Function to show the popup
function showPopup() {
    // Create a new popup window
    let popup = window.open("", "Popup", "width=600,height=400");

    // Get the email data
    let emailData = getEmailData();

    // Create the HTML for the popup
    let html = `
        <div id="emailMetadata">
            <h2>Email Metadata</h2>
            <p>From: ${emailData.from}</p>
            <p>To: ${emailData.to}</p>
            <p>Date: ${emailData.date}</p>
            <p>Subject: ${emailData.subject}</p>
            <p>Body: ${emailData.body}</p>
        </div>
        <div id="userInput">
            <h2>User Input</h2>
            <textarea id="explanationBox" placeholder="Enter explanation here..."></textarea>
            <textarea id="taskBox" placeholder="Enter tasks here..."></textarea>
            <button id="cancelButton">Cancel</button>
            <button id="submitButton">Submit</button>
        </div>
    `;

    // Write the HTML to the popup
    popup.document.write(html);

    // Add event listeners to the buttons
    popup.document.getElementById("cancelButton").addEventListener("click", () => popup.close());
    popup.document.getElementById("submitButton").addEventListener("click", () => {
        // Get the user input
        let explanation = popup.document.getElementById("explanationBox").value;
        let tasks = popup.document.getElementById("taskBox").value;

        // Add the user input to the email data
        emailData.explanation = explanation;
        emailData.tasks = tasks;

        // Save the data
        saveData(emailData);

        // Close the popup
        popup.close();
    });
}

// Export the showPopup function
module.exports = {
    showPopup
};