'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DimensionSchema = new Schema({
  width: Number,
  height: Number,
  depth: Number
});

var ShippingSchema = new Schema({
  weight: Number,
  dimensions: DimensionSchema
});

var PricingSchema = new Schema({
  list: String,
  retail: Number,
  savings: Number,
  pct_savings: Number
});

var DetailSchema = new Schema({
  title: String,
  artist: String,
  genre: [String],
  tracks: [String]
});


var CatalogueSchema = new Schema({
  sku: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  title: String,
  description: String,
  asin: String,
  shipping: ShippingSchema,
  pricing: PricingSchema,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['active', 'inactive']
    }],
    default: ['active']
  },
  details: DetailSchema
});

module.exports = mongoose.model('Catalogue', CatalogueSchema);
