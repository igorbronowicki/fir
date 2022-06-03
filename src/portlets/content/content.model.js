import PortletModel from './../../modules/portlet/portlet.model';
import ContentView from './content.view';

const ContentModel = PortletModel.extend({
    getView: ContentView
});

export default ContentModel;