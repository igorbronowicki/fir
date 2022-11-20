import ReplacerView from "../../common/replacer.view";
import Form from "../../class/form.class";
import userValidationConfig from "../../modules/user/user.validation.config";
import PopupView from "../../modules/popup/popup.view";

const LoginView = ReplacerView.extend({
    events: {
        'submit .fn-form': 'login'
    },

    render() {
        this.$el.html(this.tmpl('login'));

        this.form = new Form(this.$('.fn-form'), {
            validationConfig: this.getValidationConfig()
        });

        return this;
    },

    getValidationConfig() {
        return userValidationConfig();
    },

    login(e) {
        e.preventDefault();
        this.form.validate().done((data, form) => {
            if (data.username === 'timmy5') {
                this.form.showErrorMessage(`Player "${data.username}" has been blocked`);
            } else {
                new PopupView({
                    data: {
                        title: 'Congratulations!',
                        content: 'You have been successfully logged in'
                    }
                });
            }
        });
    }
}, {
    nameOfReplacers: [
        'LOGIN'
    ]
});

export default LoginView;