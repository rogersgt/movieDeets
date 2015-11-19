var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieModel = require('./ItemModel');
var MovieCollection = require('./ItemCollection');
var MovieView = require('./ModelView');
var Template = require('./templates');

module.exports = Backbone.View.extend({
  el: '#addMovie',
  events: {
    'click .addMov': 'onAddMovie',
    'click .reset': 'onReset'
  },
  onAddMovie: function(event) {
    event.preventDefault();
      var self = this;
      var newMov = {
              title: this.$('#movTitle').val() || 'A Bill Murray Movie',
              year: this.$('#movYear').val() || 'Every year',
              picture: this.$('#movBanner').val() || 'http://www.fillmurray.com/g/155/300'
            };
      var newModel = new MovieModel(newMov);
      newModel.save().then(function () {
        self.collection.add(newModel);
        self.addOne(newModel);
      });

      $('#movTitle').val("");
      $('#movYear').val("");
      $('#movBanner').val("");
  },
  addOne: function(movieModel) {
    var movieView = new MovieView({model: movieModel});
    this.$el.siblings('#movieList').prepend(movieView.render().el);
  },
  addEach: function(movieModel) {
    var movieView = new MovieView({model: movieModel});
    this.$el.siblings('#movieList').append(movieView.render().el);
  },
  addAll: function() {
    _.each(this.collection.models, this.addEach, this);
  },
  onReset: function() {
    //this.collection.reset();
  },
  initialize: function() {
    this.addAll();
  }
});
