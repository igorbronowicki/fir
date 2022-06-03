import _ from 'underscore';

const i18n = {
    translations: {},

    addTranslations(translations) {
        _.extend(this.translations, translations);
    },

    t(key, ...params) {
        let value = this.translations[key] || key;

        if (params.length) {
            value = this.format(value, params);
        }

        return value;
    },

    format: function(string, params) {
        return params.reduce((string, param, idx) => {
            let regexp = new RegExp('\\{' + idx + '\\}', 'g');
            return string.replace(regexp, params[idx]);
        }, string);
    }
};

export default i18n;