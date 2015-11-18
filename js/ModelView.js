var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var MovieModel = require('./ItemModel');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: _.template($('#movTemplate').html()),
  events: {
    'click span': 'onSpanClick'
  },
  onSpanClick: function() {

  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function() {

  }
});
