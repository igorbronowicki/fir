import Backbone from 'backbone';
import Template from "../class/template.class";
import fetchUtil from "../util/fetch.util";

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

    parseReplacers(templateString) {
        var template = new Template(templateString, this);

        return template.replace();
    },

    loadContent(contentId) {
        return fetchUtil.getContentById(contentId);
    }
});

export default BaseView;