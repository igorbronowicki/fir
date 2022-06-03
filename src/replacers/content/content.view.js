import ReplacerView from "../../common/replacer.view";

const ContentView = ReplacerView.extend({
    render() {
        const contentId = this.options.params[0];
        const content = this.loadContent(contentId);

        this.$el.html(this.parseReplacers(content));

        return this;
    }
}, {
    nameOfReplacers: [
        'CONTENT'
    ]
});

export default ContentView;