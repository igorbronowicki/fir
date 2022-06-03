import PortletView from './../../modules/portlet/portlet.view';
import core from "../../core";

const BannerView = PortletView.extend({
    initialize: function(options) {
        PortletView.prototype.initialize.apply(this, arguments);

        const config = this.model.get('config');
        if (config.autoplay) {
            this.intervalId = setInterval(this.onNextClick.bind(this), config.timeToDisplay);
        }
    },

    subscribe() {
        this.listenTo(this.model, 'change', this.render);
    },

    events: {
        'click .bullet': 'onBulletClick',
        'click .previous': 'onPreviousClick',
        'click .next': 'onNextClick'
    },

    onBulletClick(e) {
        const newActiveSlideIndex = Number(e.target.dataset.idx);
        this.model.setActiveBannerIndex(newActiveSlideIndex);

        core.trigger('banner.bullet.click', newActiveSlideIndex + 1);
    },

    onPreviousClick() {
        const activeBannerIndex = this.model.get('activeBannerIndex');
        const bannersCount = this.model.get('config').banners.length;

        const newActiveBannerIndex = activeBannerIndex === 0
            ? bannersCount - 1
            : activeBannerIndex - 1;

        this.model.setActiveBannerIndex(newActiveBannerIndex);
    },

    onNextClick() {
        const activeBannerIndex = this.model.get('activeBannerIndex');
        const bannersCount = this.model.get('config').banners.length;

        const newActiveBannerIndex = activeBannerIndex === bannersCount - 1
            ? 0
            : activeBannerIndex + 1;

        this.model.setActiveBannerIndex(newActiveBannerIndex);
    },

    render() {
        this.$el.html(this.tmpl('banner', this.getTemplateData()));

        return this;
    },

    getTemplateData() {
        let config = this.model.get('config');

        return {
            ...config,
            activeBannerIndex: this.model.get('activeBannerIndex')
        };
    }
});

export default BannerView;