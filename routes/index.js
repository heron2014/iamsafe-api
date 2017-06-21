'use strict';

import homeHandler from '../controllers/home';

module.exports = function (app) {
  app.get('/', homeHandler);
};
