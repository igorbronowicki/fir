import Backbone from 'backbone';
import fetchUtil from "../../util/fetch.util";
import config from '../configuration/configuration.instance';
import i18n from '../../util/i18n.util';
import core from '../../core';
import user from '../../modules/user/user.model.instance';

const AppModel = Backbone.Model.extend({
    initialize: function() {
        core.on('user:action:changeLanguage', this.changeLanguage.bind(this));
    },

    changeLanguage(lang) {
        user.set('lang', lang);
        this.fetchAndRefreshPage();
    },

    fetchAndRefreshPage() {
        this.fetch();
        core.trigger('page:refresh');
    },

    fetch() {
        const lang = user.get('lang');
        const data = fetchUtil.getInitialResources(lang);
        config.add(data);
        i18n.addTranslations(data.translations);
    }
});

export default AppModel;