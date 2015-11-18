var $ = require('jquery');
var _ = require('underscore');
var MovieCollection = require('./ItemCollection');
var MovieCollectionView = require('./CollectionView');

$(function() {
  var movies = new MovieCollection();

  movies.fetch().then(function(data) {
    new MovieCollectionView({collection: movies});
  });

});
