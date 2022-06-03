import PortletModel from './../../modules/portlet/portlet.model';
import BannerView from './banner.view';

const BannerModel = PortletModel.extend({
    defaults: {
        activeBannerIndex: 0
    },

    getView: BannerView,

    setActiveBannerIndex(idx) {
        this.set('activeBannerIndex', idx);
    }
});

export default BannerModel;