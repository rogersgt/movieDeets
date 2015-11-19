var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var tmpl = require('./templates.js');
var MovieCollection = require('./ItemCollection');
var MovieModel = require('./ItemModel');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: _.template(tmpl.mov),
  events: {
    'click .delete': 'onDelete',
    'dblclick h2': 'onEdit',
    'dblclick h4': 'onEdit',
    'keypress h2': 'onUpdate',
    'keypress h4': 'onUpdate'
  },
  onDelete: function() {
    this.model.destroy();
    this.remove();
    //this.fadOut("slow");
  },
  onEdit: function() {
    var name = this.$el.find('h2');
    var year = this.$el.find('h4');
    name.attr('contenteditable', true).css('outline', '0').css('background-color', 'white');
    year.attr('contenteditable', true).css('outline', '0').css('background-color', 'white');
  },
  onUpdate: function(e) {
    if (e.charCode === 13) {
      var name = this.$el.find('h2');
      var year = this.$el.find('h4');
      name.attr('contenteditable', false).css('background-color', '#939393');
      year.attr('contenteditable', false).css('background-color', '#939393');

      var updateModel = new MovieModel({
              _id: this.$el.find('div').attr('id'),
              title: this.$el.find('h2')[0].innerText,
              year: this.$el.find('h4')[0].innerText,
              picture: this.$el.find('img').attr('src')
            });
      updateModel.save();
    }
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function() {

  }
});
