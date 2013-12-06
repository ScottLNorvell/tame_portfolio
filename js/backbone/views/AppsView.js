var app = app || {};

app.AppsView = Backbone.View.extend({
  el: $('#main-container'),

  initialize: function() {
    
  },

  render: function() {
    var template = Handlebars.getTemplate('apps');
    this.$el.hide();
    this.$el.html(template());
    this.$el.fadeIn();
    
  },

  destroy: function() {
    
  }
})