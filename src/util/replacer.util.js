import BaseView from "../common/base.view";
import ClockView from "../replacers/clock/clock.view";
import LanguageView from "../replacers/language/language.view";
import ContentView from "../replacers/content/content.view";
import LoginView from "../replacers/login/login.view";

const replacers = [
    ClockView,
    LanguageView,
    ContentView,
    LoginView
];

const replacerUtil = {
    init() {
        replacers.forEach(function(ReplacerView) {
            ReplacerView.nameOfReplacers.forEach(function(name) {
                BaseView.prototype.replacers[name] = ReplacerView;
            });
        });
    }
};

export default replacerUtil;