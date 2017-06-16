'use strict';

var mongoose = require('mongoose');

var Catalogue = mongoose.model('Catalogue');

exports.readCatalogues = function(req, res) {
  Catalogue.find({}, function(err, catalogue) {
    if (err) {
      res.send(err);
    }
    res.json(catalogue);
  });
};

exports.readCatalogue = function(req, res) {
  Catalogue.findById(req.params.catalogueId, function(err, catalogue) {
    if (err) {
      res.send(err);
    }
    res.json(catalogue);
  });
};

exports.createCatalogue = function(req, res) {
  var newCatalogue = new Catalogue(req.body);
  newCatalogue.save(function(err, catalogue) {
    if (err) {
      res.send(err);
    }
    res.json(catalogue);
  });
};

exports.updateCatalogue = function(req, res) {
  Catalogue.findOneAndUpdate(req.params.catalogueId, req.body, {new: true}, function(err, catalogue) {
    if (err) {
      res.send(err);
    }
    res.json(catalogue);
  });
};

exports.deleteCatalogue = function(req, res) {
  Catalogue.remove({
    _id: req.params.catalogueId
  }, function(err, task) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Catalogue successfully deleted' });
  });
};
