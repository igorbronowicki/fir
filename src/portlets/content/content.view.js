import PortletView from './../../modules/portlet/portlet.view';

const ContentView = PortletView.extend({
    render() {
        this.$el.html(this.tmpl('content', this.getTemplateData()));

        this.loadArticle();

        return this;
    },

    getTemplateData() {
        return {
            contentId: this.options.model.config.id
        };
    },

    loadArticle() {
        let contentId = this.options.model.config.id;
        let content = this.loadContent(contentId);
        this.$(`[data-content-id="${contentId}"]`).html(this.parseReplacers(content));
    }
});

export default ContentView;