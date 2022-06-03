import config from '../modules/configuration/configuration.instance';

const logger = {
    _log: function(type, args) {
        let isLoggingEnabled = config.get('isJsLoggingEnabled');

        if (isLoggingEnabled) {
            type = type === 'message' ? 'log' : type;

            switch (type) {
                case 'info':
                    console.info.apply(console, args);
                    break;
                case 'warn':
                    console.warn.apply(console, args);
                    break;
                case 'error':
                    console.error.apply(console, args);
                    break;
                default:
                    console.log.apply(console, args);
            }
        }
    },

    log() {
        this._log('log', arguments);
    },

    info() {
        this._log('info', arguments);
    },

    warn() {
        this._log('warn', arguments);
    },

    error() {
        this._log('error', arguments);
    },

    message(type, data) {
        let args;
        const date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        switch (type) {
            case 'request':
                args = {
                    data: data.data,
                    description: data.description,
                    message: '\u2192',
                    color: '#1E88E5'
                };
                break;
            case 'response':
                args = {
                    data: data.data,
                    description: data.description,
                    message: '\u2190',
                    color: '#43A047'
                };
                break;
            default: {
                args = {
                    data: data.data,
                    description: data.description,
                    message: 'Unknown',
                    color: '#ACACAC'
                };
            }
        }

        this._log('message', [
            '%c [ %s ]: %s | %s | %O',
            'color: ' + args.color,
            args.message,
            args.description,
            time,
            args.data
        ]);
    }
};

export default logger;