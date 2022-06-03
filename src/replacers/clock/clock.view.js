import ReplacerView from "../../common/replacer.view";

const ClockView = ReplacerView.extend({
    initialize: function() {
        ReplacerView.prototype.initialize.apply(this, arguments);

        this.intervalId = setInterval(this.render.bind(this), 1000);
    },

    tagName: 'span',

    render() {
        const date = new Date;
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const content = `<b>${hours}:${minutes}:${seconds}</b>`;

        this.$el.html(content);

        return this;
    }
}, {
    nameOfReplacers: [
        'CLOCK'
    ]
});

export default ClockView;