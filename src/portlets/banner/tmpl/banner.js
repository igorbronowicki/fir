export default `
    {{~ it.banners :url:idx}}
        <img class="banner {{? it.activeBannerIndex === idx}}active{{?}}" src="{{= url}}">
    {{~}}

    {{? it.pagination.bullets}}
        {{~ it.banners :url:idx}}
            <button data-idx="{{= idx}}" class="bullet {{? it.activeBannerIndex === idx}}active{{?}}">{{= idx+1}}</button>
        {{~}}
    {{?}}

    {{? it.pagination.arrows}}
        <button class="previous">&larr;</button>
        <button class="next">&rarr;</button>
    {{?}}
`;