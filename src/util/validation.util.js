import _ from 'underscore';
import $ from 'jquery';

const validationUtil = {
    methods: {
        // options: form, $controls, values, methodCfg

        required(options) {
            const iterator = options.$controls[0].type === 'radio'
                ? 'some'
                : 'every';
            return options.values[iterator](function(value) {
                return _.isBoolean(value)
                    ? value
                    : value !== '';
            });
        },

        length(options) {
            return options.values.every(function(value) {
                if (value === '') {
                    return true;
                }
                const strLength = value.length;
                return strLength >= options.methodCfg.min && strLength <= options.methodCfg.max;
            });
        },

        regexp(options) {
            return options.values.every(function(value) {
                return value === ''
                    ? true
                    : options.methodCfg.regexp.test(value);
            });
        },

        fn(options) {
            const args = ['$controls', 'methodCfg', 'form'].map(function(key) {
                return options[key];
            });

            return options.methodCfg.fn.apply(options.methodCfg, args);
        }
    },

    validateField($field, options) {
        const dfd = $.Deferred();

        const $controls = $field.find('input:not([disabled]), select:not([disabled]), textarea:not([disabled])').filter(function(idx, control) {
            return !control.classList.contains('no-validate');
        });

        if (!$controls.length) {
            return $.Deferred().resolve();
        }

        const values = _.map($controls, function(control) {
            if (control.type === 'checkbox' || control.type === 'radio') {
                return control.checked;
            } else {
                return control.value;
            }
        });

        const validationType = $field.data('validation-type');
        const fieldCfg = options.formCfg[validationType];
        const methodsNames = _.keys(fieldCfg);
        let methodCfg;

        const isFieldValid = methodsNames.every(function(methodName) {
            methodCfg = fieldCfg[methodName];
            return this.methods[methodName]({
                ..._.omit(options, 'formCfg'), // form
                $controls,
                values,
                methodCfg
            });
        }, this);

        if (isFieldValid) {
            dfd.resolve();
        } else {
            dfd.reject(methodCfg.message);
        }

        return dfd.promise();
    }
};

export default validationUtil;