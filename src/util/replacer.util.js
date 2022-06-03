import BaseView from "../common/base.view";
import ClockView from "../replacers/clock/clock.view";
import ContentView from "../replacers/content/content.view";

const replacers = [
    ClockView,
    ContentView
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