import _ from 'underscore';
import $ from 'jquery';
import validationUtil from "../util/validation.util";

class Form {
    constructor($form, options) {
        this.$form = $form;

        this.options = _.extend({
            validationConfig: {}
        }, options);
    }

    get $fields() {
        return this.$form.find('.fn-validate');
    }

    validateField($field) {
        const dfd = validationUtil.validateField($field, {
            form: this,
            formCfg: this.options.validationConfig
        });

        dfd
            .done(() => {
                this.setFieldValid($field);
            })
            .fail((errorMessage) => {
                this.setFieldInvalid($field, errorMessage);
            });

        return dfd.promise();
    }

    validate() {
        const process = $.Deferred();

        this.hideErrorMessage();

        var validations = _.map(this.$fields, (field) => {
            return this.validateField($(field));
        });

        $.when(...validations)
            .done(() => {
                process.resolve(this.data(), this);
            })
            .fail(() => {
                process.reject();
            });

        return process;
    }

    data() {
        return _.toArray(this.$form[0].elements)
            .filter((el) => {
                let type = el.type;

                if (el.disabled) {
                    return false;
                }

                if (type === 'submit' || type === 'reset' || type === 'button') {
                    return false;
                }

                if ((type === 'radio' || type === 'checkbox') && !el.checked) {
                    return false;
                }

                return Boolean(el.name);
            })
            .reduce((memo, el) => {
                memo[el.name] = el.value;
                return memo;
            }, {});
    }

    setFieldInvalid($field, errorMessage) {
        $field.removeClass('valid').addClass('invalid');
        this.showErrorTooltip($field, errorMessage);
    }

    setFieldValid($field) {
        $field.removeClass('invalid').addClass('valid');
        this.hideErrorTooltip($field);
    }

    showErrorTooltip($field, errorMessage) {
        var $errorTooltip = $field.find('.error-tooltip');

        if ($errorTooltip.length) {
            $errorTooltip.html(errorMessage);
        } else {
            $field.append('<div class="error-tooltip">' + errorMessage + '</div>');
        }
    }

    hideErrorTooltip($field) {
        $field.find('.error-tooltip').remove();
    }

    showErrorMessage(errorMessage) {
        this.$form.find('.fn-form-messages').html(errorMessage);
    }

    hideErrorMessage() {
        this.$form.find('.fn-form-messages').html('');
    }
}

export default Form;