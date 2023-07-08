import _ from 'underscore';
import Configuration from "../../class/configuration.class";

class AppConfig extends Configuration {
    constructor(config) {
        super(config);
        this.add(window.fir.variables);
    }

    add(config) {
        super.add(config);
        _.extend(window.fir.variables, config);
    }
}

export default AppConfig;