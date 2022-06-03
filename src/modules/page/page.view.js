import BaseView from './../../common/base.view';
import _ from 'underscore';

const PageView = BaseView.extend({
    className: 'page-content fn-page-content',

    initialize: function() {
        this.childViews = this.model.portletsCollection.map(function(portletModel) {
            return new portletModel.getView({model: portletModel});
        });
    },

    render() {
        var layoutType = this.model.get('layoutType');
        var layoutTemplate = 'page.layout.' + layoutType;
        var layoutHtml = this.tmpl(layoutTemplate);

        this.$el.html(this.tmpl('page'));
        this.$('.fn-page-layout-wrapper').html(layoutHtml);

        _.each(this.childViews, function(childView) {
            let $dropzone = this.$('.fn-portlet-dropzone--' + childView.model.get('portletDropzone'));
            $dropzone.append(childView.render().el);
        }.bind(this));

        return this;
    }
});

export default PageView;