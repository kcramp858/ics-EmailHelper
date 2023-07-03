// Import dependencies
const Office = require('@microsoft/office-js');
const { showPopup } = require('./popup.js');
const { getEmailMetadata } = require('./email_metadata.js');
const { interpretEmail } = require('./email_interpretation.js');
const { createEmailReply } = require('./email_reply.js');
const { saveEmail } = require('./email_save.js');
const { updateSettings } = require('./settings.js');

// Define the button click handlers
Office.initialize = function() {
  Office.ribbon.requestCreateControls([
    {
      tab: 'Tab1',
      group: 'group1',
      control: {
        id: 'showPopupButton',
        action: function() {
          // Fetch the email metadata
          const emailData = getEmailMetadata();
          // Show the popup
          showPopup(emailData);
        }
      }
    },
    {
      tab: 'Tab1',
      group: 'group1',
      control: {
        id: 'interpretEmailButton',
        action: function() {
          // Fetch the email metadata
          const emailData = getEmailMetadata();
          // Interpret the email
          const interpretation = interpretEmail(emailData);
          // Show the popup with the interpretation
          showPopup(interpretation);
        }
      }
    },
    {
      tab: 'Tab1',
      group: 'group1',
      control: {
        id: 'createReplyButton',
        action: function() {
          // Fetch the email metadata
          const emailData = getEmailMetadata();
          // Create the email reply
          createEmailReply(emailData);
        }
      }
    },
    {
      tab: 'Tab1',
      group: 'group1',
      control: {
        id: 'saveEmailButton',
        action: function() {
          // Fetch the email metadata
          const emailData = getEmailMetadata();
          // Save the email
          saveEmail(emailData);
        }
      }
    },
    {
      tab: 'Tab1',
      group: 'group1',
      control: {
        id: 'updateSettingsButton',
        action: function() {
          // Update the settings
          updateSettings();
        }
      }
    }
  ]);
};