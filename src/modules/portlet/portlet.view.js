import BaseView from './../../common/base.view';
import _ from 'underscore';

const PortletView = BaseView.extend({
    _setRender() {
        this.render = _.wrap(this.render, function(render) {
            var $portletWrapper = this.$el;
            var $portletContent = this._renderPortletWrapper();
            var args = [].slice.call(arguments, 1);
            this.setElement($portletContent);
            render.apply(this, args);
            this.setElement($portletWrapper);

            return this;
        });
    },

    _renderPortletWrapper() {
        this.$el.html(this.tmpl('portlet', {
            title: this.options.model.title
        }));
        this._addAttributes();
        this._addClasses();

        return this.$('.fn-portlet-content');
    },

    _addAttributes() {
        this.$el.attr({
            'data-portlet-type': this.model.get('portletType')
        });
    },

    _addClasses() {
        var classList = [
            'portlet',
            'portlet-wrapper',
            'fn-portlet-wrapper',
            'portlet-boundary'
        ];

        this.$el.addClass(classList.join(' '));
    }
});

export default PortletView;