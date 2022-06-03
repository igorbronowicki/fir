import BaseView from './../common/base.view';

const ReplacerView = BaseView.extend({
    initialize: function() {
        BaseView.prototype.initialize.apply(this, arguments);

        var className = this.options.name
            .replace(/_/g, '-')
            .toLowerCase() + '-replacer';

        this.$el.addClass(className);
    }
});

export default ReplacerView;