import Backbone from 'backbone';
import $ from 'jquery';
import Template from "../class/template.class";
import fetchUtil from "../util/fetch.util";
import i18n from "../util/i18n.util";
import user from "../modules/user/user.model.instance";

const BaseView = Backbone.View.extend({
    replacers: {},

    initialize: function(options = {}) {
        Backbone.View.prototype.initialize.apply(this, arguments);
        this.childViews = [];
        this.options = options;
        if (this.options.model) {
            this.options.model = this.options.model.toJSON();
        }
        this._setRender();
        this.subscribe.apply(this, arguments);
    },

    subscribe() {},

    _setRender() {},

    tmpl(name, data) {
        var template = new Template(name, data, this);

        return template.replace();
    },

    translate: i18n.t.bind(i18n),

    showInfo(options) {
        const $info = $(this.tmpl('common.info', options));
        const timeout = options && options.timeout || 3000;

        $('.app').append($info);

        setTimeout(function() {
            $info.remove();
        }, timeout);
    },

    renderOverlay() {
        var $overlay = $('.fn-overlay');

        if ($overlay.length) {
            return;
        }

        $(this.tmpl('popup.overlay')).appendTo('.app');
    },

    removeOverlay() {
        $('.fn-overlay').remove();
    },

    parseReplacers(templateString) {
        var template = new Template(templateString, this);

        return template.replace();
    },

    loadContent(contentId) {
        const lang = user.get('lang');
        return fetchUtil.getContentById(contentId, lang);
    },

    close() {
        // TODO
        // this.$('*').off();
        // _.invoke(this.childViews, 'close');
        // !!!!!!!this.form.undelegateEvents();

        this.remove();
    }
});

export default BaseView;