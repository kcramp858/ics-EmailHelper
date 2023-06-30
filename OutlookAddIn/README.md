# Outlook Email Metadata Add-In

This is an Outlook add-in that allows the user to click a button in the ribbon to display a pop-up. The pop-up contains two columns: the left side displays the email metadata (from, to, date, subject, body) and the right side contains two stacked free-form text boxes. The top box is for the user to enter an explanation of the email body, and the bottom box is for the user to enter tasks derived from the email body. The pop-up is user-friendly and contains the standard buttons required to operate it (cancel, submit, etc.). All of the information is saved in a structured .json format and each new submission is appended to the .json file.

## How to Use

1. Install the add-in to your Outlook application.
2. Open an email and click on the add-in button in the ribbon.
3. A pop-up will appear with the email metadata on the left and two text boxes on the right.
4. Enter your explanation of the email body in the top text box.
5. Enter tasks derived from the email body in the bottom text box.
6. Click the 'Submit' button to save your input to a .json file, or 'Cancel' to discard your input.

## Files

- `manifest.xml`: Contains the add-in manifest.
- `commands.js`, `commands.html`, `commands.css`: Contains the code for the add-in commands.
- `functions.js`, `functions.html`, `functions.css`: Contains the code for the add-in functions.
- `taskpane.js`, `taskpane.html`, `taskpane.css`: Contains the code for the task pane.
- `data.json`: Contains the saved user input in .json format.

## Dependencies

- `emailMetadata`: Object containing email metadata (from, to, date, subject, body).
- `userInput`: Object containing user's explanation and tasks derived from the email body.

## Functions

- `showPopup()`: Shows the pop-up.
- `hidePopup()`: Hides the pop-up.
- `getMetadata()`: Gets email metadata.
- `getUserInput()`: Gets user input.
- `saveToJson()`: Saves the information to a .json file.
- `appendToJson()`: Appends new submission to the .json file.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)