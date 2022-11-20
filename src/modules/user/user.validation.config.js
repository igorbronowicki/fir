import i18n from "../../util/i18n.util";

const userValidationConfig = function() {
    return {
        username: {
            required: {
                message: i18n.t('login.field.username.error.required')
            },
            length: {
                min: 5,
                max: 15,
                message: i18n.t('login.field.username.error.length')
            },
            regexp: {
                regexp: /^[A-Za-z0-9]+$/,
                message: i18n.t('login.field.username.error.regexp')
            }
        },
        password: {
            required: {
                message: i18n.t('login.field.password.error.required')
            },
            length: {
                min: 5,
                max: 10,
                message: i18n.t('login.field.password.error.length')
            },
            regexp: {
                regexp: /^[A-Za-z0-9]+$/,
                message: i18n.t('login.field.password.error.regexp')
            },
            fn: {
                fn: function($inputs, config, form) {
                    let password = $inputs.val();
                    let username = form.data().username;

                    if (password === username) {
                        this.message = i18n.t('login.field.password.error.equalToUsername');
                        return false;
                    }

                    return true;
                }
            }
        }
    };
};

export default userValidationConfig;