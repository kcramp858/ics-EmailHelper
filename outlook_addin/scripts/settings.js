// Importing the required dependencies
const fs = require('fs');
const path = require('path');

// Defining the settings data variable
let settingsData = {};

// Function to load settings from the settings.json file
function loadSettings() {
    fs.readFile(path.join(__dirname, '../json/settings.json'), (err, data) => {
        if (err) throw err;
        settingsData = JSON.parse(data);
    });
}

// Function to update settings
function updateSettings(newSettings) {
    // Merging the new settings with the existing settings
    settingsData = {...settingsData, ...newSettings};

    // Saving the updated settings back to the settings.json file
    fs.writeFile(path.join(__dirname, '../json/settings.json'), JSON.stringify(settingsData, null, 2), (err) => {
        if (err) throw err;
    });

    // Sending a message to indicate that the settings have been updated
    Office.context.mailbox.item.notificationMessages.replaceAsync('updateSettings', {
        type: 'informationalMessage',
        icon: 'icon16',
        message: 'Settings have been updated successfully.',
        persistent: false
    });
}

// Loading the settings when the script is loaded
loadSettings();

// Exporting the settings data variable and the updateSettings function
module.exports = {
    settingsData,
    updateSettings
};