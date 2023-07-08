export default `
    {{~ it.allowedLocales :locale:index}}
        <button class="{{? it.selected === locale}}selected{{?}} fn-change-language" data-lang="{{! locale}}">
            {{= tmpl.i18n('language.' + locale)}}
        </button>
    {{~}}
`;