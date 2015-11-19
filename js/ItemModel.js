var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
  urlRoot: 'https://tiny-tiny.herokuapp.com/collections/moviedeets',
  idAttribute: '_id',
  defaults: function() {
    return {
       picture: 'http://www.fillmurray.com/g/155/300',
       title: 'A Bill Murray Movie'
     }
  },
  initialize: function() {

  }
});
