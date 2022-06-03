import Backbone from 'backbone';
import fetchUtil from "../../util/fetch.util";
import config from '../configuration/configuration.instance';
import i18n from '../../util/i18n.util';

const AppModel = Backbone.Model.extend({
    fetch() {
        const data = fetchUtil.getInitialResources();
        config.add(data);
        i18n.addTranslations(data.translations);
    }
});

export default AppModel;