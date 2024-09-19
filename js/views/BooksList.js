app.views.BooksList = Backbone.View.extend({

    initialize: function(options) {
        this.options = options;
        this.listenTo(this.collection, "change reset", this.render);
    },

    render: function(){
        console.log("BooksList:render");

        this.$el.html('<ul class="thumbs"></ul>');
        var $ul = this.$('ul');

        var bookPath = "#category/" + this.collection.catId + "/book/";

        this.collection.each(function(model) {
            $ul.append(
                '<li class="thumb">' +
                    '<a class="thumb-link" href="' + bookPath + model.get("id") + '">' +
                        '<span class="overlay"></span>' +
                        '<img src="' + model.get("volumeInfo").imageLinks.thumbnail + '">' +
                    '</a>' +
                '</li>'
            );
        });



        return this;
    }
});
