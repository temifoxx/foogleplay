$(function() {
    app.data.router = new app.routers.Router();

    new app.views.TopBar({
        el: '[data-id=topbar]'
    });

    Backbone.history.start();
});
