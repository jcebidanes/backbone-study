var app = app || {};

(function ($) {
	'use strict';

	app.HelloView = Backbone.View.extend({

        el: $('body'),
        initialize: function() {
            this.render();
        },
        render: function() {
            $(this.el).append("<h1>Hello World</h1>");
        }
        		
	});
})(jQuery);