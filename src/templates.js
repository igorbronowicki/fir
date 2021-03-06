import doT from 'dot';
import appTmpl from './modules/app/tmpl/app';
import pageTmpl from './modules/page/tmpl/page';
import pageLayoutCommonTmpl from './modules/page/tmpl/page.layout.common';
import pageLayout30x70Tmpl from './modules/page/tmpl/page.layout.30-70';
import pageLayout33x33x33Tmpl from './modules/page/tmpl/page.layout.33-33-33';
import portletTmpl from './modules/portlet/tmpl/portlet';
import bannerTmpl from './portlets/banner/tmpl/banner';
import contentTmpl from './portlets/content/tmpl/content';
import menuTmpl from './modules/menu/tmpl/menu';

const templates = {
    'app': doT.template(appTmpl),
    'page': doT.template(pageTmpl),
    'page.layout.common': doT.template(pageLayoutCommonTmpl),
    'page.layout.30-70': doT.template(pageLayout30x70Tmpl),
    'page.layout.33-33-33': doT.template(pageLayout33x33x33Tmpl),
    'portlet': doT.template(portletTmpl),
    'banner': doT.template(bannerTmpl),
    'content': doT.template(contentTmpl),
    'menu': doT.template(menuTmpl)
};

export default templates;