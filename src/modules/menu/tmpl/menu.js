export default `
    {{~ it.items :item:idx}}
        <a href="{{= item.friendlyURL}}">{{= item.title}}</a>
    {{~}}
`;