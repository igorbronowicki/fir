export default `
    <div class="popup-header">
        <h6>{{= it.title}}</h6>
        <button class="close fn-close">x</button>
    </div>

    <div class="popup-content fn-popup-content">{{= it.content}}</div>

    {{? it.buttons}}
        <div class="popup-buttons">
            {{~ it.buttons :button:idx}}
                <button class="{{= button.className}}">{{= button.title}}</button>
            {{~}}
        </div>
    {{?}}

    {{? it.popupCount > 1}}
        <div class="popup-pagination">
            <button class="previous {{= it.showPrevButton ? 'fn-previous' : 'disabled'}}">&larr;</button>
            <span>{{= it.currentPopup}}/{{= it.popupCount}}</span>
            <button class="next {{= it.showNextButton ? 'fn-next' : 'disabled'}}">&rarr;</button>
        </div>
    {{?}}
`;