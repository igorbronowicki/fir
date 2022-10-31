import _ from 'underscore';
import BaseView from "../../common/base.view";

var popups = [];
var currentPopupIdx = 0;

const PopupView = BaseView.extend({
    defaults: {
        data: {
            title: '',
            content: '',
            articleId: null
        },

        onClose: null
    },

    className: 'popup',

    events: {
        'click .fn-close': 'close',
        'click .fn-next': 'gotoNext',
        'click .fn-previous': 'gotoPrevious'
    },

    initialize: function(options) {
        BaseView.prototype.initialize.apply(this, arguments);

        this.options = _.extend({}, this.defaults, options);
        this.options.data = _.extend({}, this.defaults.data, this.options.data);
        this.setOptions(options);

        this.addToQueue();

        this.articleId = this.options.data.articleId;

        this.processQueue();
    },

    setOptions(options) {
        // options for inherited views
    },

    addToQueue() {
        popups.push(this);
    },

    processQueue() {
        if (popups.length) {
            popups[currentPopupIdx].render();
        }
    },

    removeFromQueue() {
        popups.splice(_.findIndex(popups, (popup) => popup.cid === this.cid), 1);

        if (!popups.length) {
            currentPopupIdx = 0;
        } else if (!popups[currentPopupIdx]) {
            currentPopupIdx--;
        }
    },

    render() {
        this._prepareRenderControls();
        this.renderPopup();

        this.delegateEvents();

        if (this.articleId) {
            this.loadArticle();
        }
    },

    _prepareRenderControls() {
        var data = this.options.data;

        data.showNextButton = currentPopupIdx < popups.length - 1;
        data.showPrevButton = currentPopupIdx > 0;
        data.popupCount = popups.length;
        data.currentPopup = currentPopupIdx + 1;
    },

    renderPopup() {
        this.renderOverlay();

        this.$el.html(this.tmpl('popup', this.options.data));
        this.$el.appendTo('.fn-popup-container');
    },

    loadArticle() {
        const article = this.loadContent(this.articleId);
        this.options.data.article = this.parseReplacers(article);
        this.renderContent();
    },

    renderContent() {
        this.$('.fn-popup-content').html(this.options.data.article);
    },

    gotoNext() {
        currentPopupIdx++;
        this.hide();
        this.processQueue();
    },

    gotoPrevious() {
        currentPopupIdx--;
        this.hide();
        this.processQueue();
    },

    hide() {
        this.$el.remove();
    },

    close() {
        this.removeFromQueue();

        BaseView.prototype.close.call(this);

        this.removeOverlay();

        if (_.isFunction(this.options.onClose)) {
            this.options.onClose(this);
        }

        this.processQueue();
    }
});

export default PopupView;