var app = app || {};

(function ($) {
	'use strict';

	app.BeatlesView = Backbone.View.extend({

        el: $("#app-container"),
        initialize: function () {
            this.$lista = $('#lista-container');
            this.render();
        },
        render: function() {
            var that = this;
            theBeatles.forEach(function(model, index){
                that.$lista.append('<li>' + model.get('id') +
                                   ' - ' + model.get('firstName') +
                                   ' ' + model.get('lastName') + '</li>');
            });
        }
        		
	});
})(jQuery);

