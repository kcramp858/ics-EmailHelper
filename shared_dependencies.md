1. Exported Variables: 
   - `emailMetadata`: Object containing email metadata (from, to, date, subject, body).
   - `userInput`: Object containing user's explanation and tasks derived from the email body.

2. Data Schemas:
   - `EmailMetadataSchema`: Schema for the email metadata (from, to, date, subject, body).
   - `UserInputSchema`: Schema for the user's explanation and tasks derived from the email body.

3. ID Names of DOM Elements:
   - `emailMetadataColumn`: ID for the left column displaying email metadata.
   - `userInputColumn`: ID for the right column with user input text boxes.
   - `explanationBox`: ID for the top text box for user's explanation.
   - `tasksBox`: ID for the bottom text box for tasks derived from the email.
   - `submitButton`: ID for the submit button.
   - `cancelButton`: ID for the cancel button.

4. Message Names:
   - `submitMessage`: Message sent when the user submits their input.
   - `cancelMessage`: Message sent when the user cancels their input.

5. Function Names:
   - `showPopup()`: Function to show the popup.
   - `hidePopup()`: Function to hide the popup.
   - `getMetadata()`: Function to get email metadata.
   - `getUserInput()`: Function to get user input.
   - `saveToJson()`: Function to save the information to a .json file.
   - `appendToJson()`: Function to append new submission to the .json file.