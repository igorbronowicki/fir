import BaseCollection from './../../common/base.collection';
import BannerModel from "../../portlets/banner/banner.model";
import ContentModel from "../../portlets/content/content.model";

var portletTypeToModelMap = {
    'banner': BannerModel,
    'content': ContentModel
};

const PortletsCollection = BaseCollection.extend({
    model: function(attrs) {
        const Model = portletTypeToModelMap[attrs.portletType];
        return new Model(attrs);
    }
});

export default PortletsCollection;