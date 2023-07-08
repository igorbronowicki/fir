import ReplacerView from "../../common/replacer.view";
import user from "../../modules/user/user.model.instance";
import config from '../../modules/configuration/configuration.instance';
import core from "../../core";

const LanguageView = ReplacerView.extend({
    events: {
        'click .fn-change-language': 'changeLanguage'
    },

    render() {
        this.$el.html(this.tmpl('language', {
            allowedLocales: config.get('allowedLocales'),
            selected: user.get('lang')
        }));

        return this;
    },

    changeLanguage(e) {
        core.trigger('user:action:changeLanguage', e.currentTarget.dataset.lang);
    }
}, {
    nameOfReplacers: [
        'LANGUAGE_SELECTOR'
    ]
});

export default LanguageView;