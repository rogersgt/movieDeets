var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var MovieCollection = require('./ItemCollection');
var MovieModel = require('./ItemModel');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: _.template($('#movTemplate').html()),
  events: {
    'click .delete': 'onDelete'
  },
  onDelete: function() {
    var tag = this.$el.parent('div').context.firstElementChild.attributes[0].nodeValue;
    var movieCollection = new MovieCollection({
      url: 'https://tiny-tiny.herokuapp.com/collections/moviedeets',
      model: MovieModel
    });
    console.log(movieCollection);
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function() {

  }
});
