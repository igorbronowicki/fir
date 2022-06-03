import Router from './router';
import appModel from './modules/app/app.model.instance';
import _ from 'underscore';
import device from "./util/device.util";
import formatter from "./common/formatter";
import i18n from "./util/i18n.util";
import config from './modules/configuration/configuration.instance';

import './css/index.css';

config.add(window.fir.variables);
window.tmpl = {
    _: _,
    device: device,
    formatter: formatter,
    i18n: i18n.t.bind(i18n)
};

appModel.fetch();
new Router();
