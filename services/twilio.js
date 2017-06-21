'use strict';

import twilio from 'twilio';

module.exports.sendSms = function(to, message) {

  const client = new twilio.Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  return client.messages.create({
      body: message,
      to: to,
      from: process.env.TWILIO_NUMBER,
    }).then((data) => {
      console.log('Users notified', data.body);
    }).catch((err) => {
      console.error('Could not notify users');
      console.error(err);
    });
};
