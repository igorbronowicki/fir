import BaseModel from './../../common/base.model';
import PortletsCollection from './../portlet/portlets.collection';
import fetchUtil from "../../util/fetch.util";
import user from "../../modules/user/user.model.instance";

const PageModel = BaseModel.extend({
    portletsCollection: null,

    initialize: function(options) {
        const lang = user.get('lang');
        const pageData = fetchUtil.getPageInfo(options.friendlyURL, lang);
        this.set(pageData);
        this.portletsCollection = new PortletsCollection(pageData.portlets);
    },

    close() {
        // TODO:
    }
});

export default PageModel;