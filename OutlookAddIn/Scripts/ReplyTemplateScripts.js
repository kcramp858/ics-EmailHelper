// Importing required dependencies
const Office = require('@microsoft/office-js');

// Function to create a reply using the template
function createReply() {
    // Get the currently selected email
    Office.context.mailbox.item.getCallbackTokenAsync({ isRest: true }, function (result) {
        if (result.status === "succeeded") {
            let accessToken = result.value;
            let getMessageUrl = Office.context.mailbox.restUrl +
                '/v2.0/me/messages/' + Office.context.mailbox.item.itemId;

            // Fetch the email data
            fetch(getMessageUrl, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + accessToken }
            })
            .then(response => response.json())
            .then(data => {
                // Extract the email body
                let emailBody = data.Body.Content;

                // Get user input for instruction and task
                let instruction = document.getElementById('userExplanation').value;
                let task = document.getElementById('userTasks').value;

                // Create the reply template
                let replyTemplate = `#INSTRUCTION:\n\n${instruction}\n\n#CONTEXT\n\n${emailBody}\n\n#TASK\n\n${task}`;

                // Create a reply to the currently selected email with the template
                Office.context.mailbox.item.displayReplyForm(replyTemplate);
            });
        } else {
            console.error(result.error);
        }
    });
}

// Add event listener to the button
document.getElementById('createReply').addEventListener('click', createReply);