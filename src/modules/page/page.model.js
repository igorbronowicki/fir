import BaseModel from './../../common/base.model';
import PortletsCollection from './../portlet/portlets.collection';
import fetchUtil from "../../util/fetch.util";

const PageModel = BaseModel.extend({
    portletsCollection: null,

    initialize: function(options) {
        const pageData = fetchUtil.getPageInfo(options.friendlyURL);
        this.set(pageData);
        this.portletsCollection = new PortletsCollection(pageData.portlets);
    },

    close() {
        // TODO:
    }
});

export default PageModel;