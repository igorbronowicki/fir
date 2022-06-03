import _ from 'underscore';

class Configuration {
    config = {};

    add(config) {
        _.extend(this.config, config);
    }

    set(key, value) {
        const keys = key.split('.');
        let config = this.config;

        for (let i = 0; i < keys.length - 1; i++) {
            let key = keys[i];
            if (!config[key]) {
                config[key] = {};
            }
            config = config[key];
        }

        config[keys[keys.length - 1]] = value;
    }

    get(key) {
        const keys = key.split('.');
        let config = this.config;

        return keys.reduce(function(value, key) {
            return value[key];
        }, config);
    }
}

export default Configuration;