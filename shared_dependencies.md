1. Exported Variables:
   - `emailData`: This variable will hold the email metadata (from, to, date, subject, body).
   - `userInput`: This variable will hold the user's explanation of the email body and tasks derived from the email body.
   - `LLMInterpretation`: This variable will hold the local LLM's interpretation of the email.

2. Data Schemas:
   - `EmailData.json`: This JSON file will follow a schema that includes fields for from, to, date, subject, and body of the email.
   - `LLMInterpretation.json`: This JSON file will follow a schema that includes fields for the email data and the LLM's interpretation.

3. ID Names of DOM Elements:
   - `emailMetadata`: This ID will be used for the left column of the pop-up that displays the email metadata.
   - `userInputArea`: This ID will be used for the top free-form text box where the user enters an explanation of the email body.
   - `taskArea`: This ID will be used for the bottom free-form text box where the user enters tasks derived from the email body.
   - `LLMOutput`: This ID will be used for the area that displays the LLM's interpretation of the email.

4. Message Names:
   - `showPopup`: This message will be sent when the user clicks the button in the ribbon to show the pop-up.
   - `submitData`: This message will be sent when the user clicks the submit button in the pop-up.

5. Function Names:
   - `showPopup()`: This function will be triggered when the `showPopup` message is received.
   - `submitData()`: This function will be triggered when the `submitData` message is received.
   - `interpretEmail()`: This function will take the email data as an input, insert that data into a pre-defined prompt, and then show the output in the new pop-up window.