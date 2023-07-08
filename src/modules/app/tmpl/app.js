export default `
    <div class="fn-popups">
        <div class="popup-container fn-popup-container"></div>
        <div class="popup-hi-container fn-popup-hi-container"></div>
        <div class="popup-page-container fn-popup-page-container"></div>
        <div class="popup-persistent-container fn-popup-persistent-container"></div>
        <div class="react-popup-container"></div>
    </div>
    <div class="header fn-header">
        <div class="fn-menu-container"></div>
        [CLOCK] [LANGUAGE_SELECTOR]
    </div>
    <div class="page fn-page"></div>
    <div class="footer fn-footer">
        {{? tmpl.device.formFactor === 'desktop'}}
            <div class="ad">
                {{= tmpl.i18n('footer.ad.text', 'гараж', tmpl.formatter.formatCurrency(2400.90, {currencyCode: 'UAH', symbolAtTheLeft: false}))}}
            </div>
        {{?}}
        [CONTENT(FOOTER)]
    </div>
`;