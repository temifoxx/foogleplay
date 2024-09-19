app.views.TopBar = Backbone.View.extend({
    events: {
        'click [data-id=category-toggle]': 'toggleCategories',
        'click [data-id=category]' : 'selectCategory'
    },

    toggleCategories: function(evt) {
        evt.preventDefault();
        //this.$('[data-id=categories]').toggle();
        this.$('[data-id=categories]').toggleClass('is-visible');
    },

    selectCategory: function(evt) {
        this.$('[data-id=categories]').removeClass('is-visible');
        //this.$('[data-id=categories]').hide();
    }
});
