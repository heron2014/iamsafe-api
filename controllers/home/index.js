'use strict';

const twilioClient = require('../../services/twilio');
import fs from 'fs';
import data from '../../config/data.json';
import formatMessage from './formatMessage';

module.exports = function(req, res, next) {
  let counter = 0;
  data.forEach((obj) => {
    twilioClient.sendSms(obj.phoneNumber, formatMessage());
    counter++;
    if (counter === data.length) {
      const response = { res: 'sent' };
      return res.status(200).json(response);
    }
  });
  next();
};
