var app = app || {};

app.HomeView = Backbone.View.extend({
  el: $('#main-container'),

  initialize: function() {
    if ($('.top-bar').hasClass('expanded')) {
      // $('.top-bar').attr('style', '');
      // $('.top-bar-section').attr('style', 'left: 0%');
      $('.top-bar').removeClass('expanded');
    }
  },

  render: function() {
    var template_id = this.options.template_id || 'about'
    var template = Handlebars.getTemplate(template_id);
    this.$el.html('');
    this.$el.hide();
    this.$el.html(template());
    this.$el.fadeIn(function() {
      
    });
  },

  destroy: function() {
    this.undelegateEvents();
    this.$el.removeData().unbind();
  }

});