import Backbone from 'backbone';
import PageModel from './modules/page/page.model';
import appView from './modules/app/app.view.instance';

const Router = Backbone.Router.extend({
    initialize: function() {
        Backbone.Router.prototype.initialize.apply(this, arguments);
        Backbone.history.start({pushState: true});
    },

    routes: {
        '*path': 'defaultAction'
    },

    defaultAction(path) {
        const pageModel = new PageModel({friendlyURL: path || '/'});

        appView.render();
        appView.renderPage(pageModel);

        console.log('Router::defaultAction ', path);
    }
});

export default Router;