'use strict';

module.exports = function(app) {
  var cats = require('../controller/catsController');
  app.route('/cats')
    .get(cats.readCatalogues)
    .post(cats.createCatalogue);

  app.route('/cats/:catalogueId')
    .get(cats.readCatalogue)
    .put(cats.updateCatalogue)
    .delete(cats.deleteCatalogue);
};
