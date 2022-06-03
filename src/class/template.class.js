import templates from '../templates';

class Template {
    constructor() {
        // arguments: (name, data, view) or (templateString, view)

        if (arguments.length === 3) {
            let name = arguments[0];
            let data = arguments[1];
            this.templateString = templates[name](data);
            this.view = arguments[2];
        }

        if (arguments.length === 2) {
            this.templateString = arguments[0];
            this.view = arguments[1];
        }

        this._createWrapper();
    }

    _createWrapper() {
        const tagName = this.templateString.startsWith('<tr') ? 'tbody' : 'div';
        this.wrapper = document.createElement(tagName);
        this._setWrapperInnerHtml(this.templateString);
    }

    _setWrapperInnerHtml(html) {
        this.wrapper.innerHTML = html;
    }

    getNodes() {
        return this.wrapper.childNodes;
    }

    replace() {
        var source = this.wrapper.innerHTML.replace(/\[([A-Za-z\-_0-9]+)(?:\(([A-Za-z\-_0-9,]+)\)|)]/g, (match, replacerName, replacerParams = '') => `<span class="_replacer" data-params="${replacerParams}">${replacerName}</span>`);
        this._setWrapperInnerHtml(source);
        var elements = this.wrapper.querySelectorAll('._replacer');

        elements.forEach((element) => {
            const replacerName = element.innerHTML;
            const replacerParams = element.dataset.params ? element.dataset.params.split(',') : [];
            const ReplacerView = this.view.replacers[replacerName];

            if (ReplacerView) {
                const replacerView = new ReplacerView({
                    name: replacerName,
                    params: replacerParams
                });
                this.view.childViews.push(replacerView);
                element.parentNode.replaceChild(replacerView.render().el, element);
            }
        });

        return this.getNodes();
    }
}

export default Template;