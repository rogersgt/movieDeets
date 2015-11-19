var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var HeaderView = require('./headerView');
var MovieModel = require('./ItemModel');
var MovieCollection = require('./ItemCollection');
var MovieView = require('./ModelView');
var CollectionView = require('./CollectionView');
var FormView = require('./form');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function() {
    var movieCollection = new MovieCollection();

    var self = this;
    var headerHTML = new HeaderView();
    var formHTML = new FormView();

    movieCollection.fetch().then(function() {
      var collectionView = new CollectionView({collection: movieCollection});

      self.$el.find('nav').html(headerHTML.render().el);
      self.$el.find('#addMovie').html(formHTML.render().el);

    });
  }
});
