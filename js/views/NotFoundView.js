define(["backbone", "jquery", "handlebars", "text!templates/notFound.html"],
function(Backbone, $, Handlebars, template) {

    var HomeView = Backbone.View.extend({

        template: Handlebars.compile(template),

        initialize: function(options) {
            this.render();
        },

        render: function() {
            this.el.innerHTML = this.template(); // DON'T use this.$el.html() because it removes the jQuery event handlers of existing sub-views
            return this;
        }
    });
    return HomeView;
});