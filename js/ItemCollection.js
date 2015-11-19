var Backbone = require('backbone');
var _ = require('underscore');
var MovieModel = require('./ItemModel');

module.exports = Backbone.Collection.extend({
  url: 'https://tiny-tiny.herokuapp.com/collections/moviedeets',
  model: MovieModel,
  initialize: function() {
    
  }
});
