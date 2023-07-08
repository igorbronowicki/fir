import Backbone from 'backbone';
import PageModel from './modules/page/page.model';
import appView from './modules/app/app.view.instance';
import core from './core';

const Router = Backbone.Router.extend({
    initialize: function() {
        Backbone.Router.prototype.initialize.apply(this, arguments);
        Backbone.history.start({pushState: true});
        this.subscribe();
    },

    subscribe() {
        this.listenTo(core, 'page:refresh', this.handlePageRefresh);
    },

    routes: {
        '*path': 'defaultAction'
    },

    defaultAction(path) {
        const pageModel = new PageModel({friendlyURL: path || '/'});

        appView.render();
        appView.renderPage(pageModel);

        console.log('Router::defaultAction ', path);
    },

    handlePageRefresh() {
        Backbone.history.loadUrl(Backbone.history.fragment);
    }
});

export default Router;