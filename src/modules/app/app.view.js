import _ from "underscore";
import BaseView from './../../common/base.view';
import PageView from './../page/page.view';
import MenuView from "../menu/menu.view";
import device from "../../util/device.util";
import PopupView from "../popup/popup.view";

const AppView = BaseView.extend({
    initialize: function() {
        BaseView.prototype.initialize.apply(this, arguments);

        this.addBaseClasses();
    },

    el: '.app',

    currentPage: null,

    events: {
        'click a': 'onNavigate',
        'click .fn-popup-open': 'onPopupOpen'
    },

    onNavigate(e) {
        // TODO:
    },

    addBaseClasses() {
        const classList = document.documentElement.classList;

        ['portrait', 'landscape'].forEach(function(item) {
            classList.remove(item);
        });

        ['formFactor', 'orientation'].forEach(function(item) {
            classList.add(device[item]);
        });
    },

    setPageTitle(title) {
        document.title = title;
    },

    render() {
        this.$el.html(this.tmpl('app'));
        this.$('.fn-menu-container').html(new MenuView().render().el);

        return this;
    },

    renderPage(pageModel) {
        this.setPageTitle(pageModel.get('title'));
        this.currentPage && this.currentPage.close();
        this.currentPage = new PageView({model: pageModel});
        this.$('.fn-page').html(this.currentPage.render().el);
    },

    onPopupOpen(e) {
        e.preventDefault();

        new PopupView({
            data: _.extend({}, e.target.dataset)
        });
    }
});

export default AppView;