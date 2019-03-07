var app = app || {};

(function ($) {
	'use strict';

	app.ItemListView = Backbone.View.extend({

        el: $("#app-container"),

        initialize: function() {
            this.$lista   = $('#lista-container');
            this.$txtItem = $('#txt-item');
        },
        
        events: {
            "click #btn-salvar" : "salvar",
            'keypress #txt-item': 'updateOnEnter',
        },

        // If you hit `enter`, we're through editing the item.
		updateOnEnter: function (e) {
			if (e.which === ENTER_KEY) {
				this.salvar();
			}
		},

        salvar: function() {
            var li = "<li>" + this.$txtItem.val() + "</li>";
            this.$lista.append(li);
            this.$txtItem.val("");
            this.$txtItem.focus();
        }
        		
	});
})(jQuery);
