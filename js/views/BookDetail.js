app.views.BookDetail = Backbone.View.extend({
    template: _.template($('script[data-id=book-detail-view]').html()),

    initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },

    render: function() {
        var info = this.model.get("volumeInfo");
        var images = info.imageLinks;

        var publisher = "";

        if(info.publisher) {
            publisher = info.publisher + ' - Publisher';
        }

        /*
        this.$el.html(
            '<header class="book-header l-content l-content-constrained l-row">' +
                '<div class="l-column thumb-image">' +
                    '<img src="' + (images.small || images.thumbnail) + '">' +
                '</div>' +
                '<div class="l-column l-pad">' +
                    '<div class="title">' + info.title + '</div>' +
                    '<div>' +
                        (info.authors ? '<em>' + info.authors.join(" - ") + '</em> - ' : "" + info.publishedDate) + '<br>' +
                        publisher +
                    '</div>' +
                '</div>' +
            '</header>' +
            '<div class="book-content l-content l-content-constrained standout">' +
                '<h1 class="title">Description</h1>' + info.description +
            '</div>'
        );
        */
        this.$el.html( this.template({
            info: info,
            publisher: publisher,
            images: images
            })
        );

        return this;
    }
});
