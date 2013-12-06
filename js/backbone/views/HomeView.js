var app = app || {};

app.HomeView = Backbone.View.extend({
  el: $('#main-container'),

  initialize: function() {

  },

  render: function() {
    var template_id = this.options.template_id || 'about'
    var template = Handlebars.getTemplate(template_id);
    this.$el.html('');
    this.$el.hide();
    this.$el.html(template());
    this.$el.fadeIn();
  },

  destroy: function() {
    this.undelegateEvents();
    this.$el.removeData().unbind();
  }

});