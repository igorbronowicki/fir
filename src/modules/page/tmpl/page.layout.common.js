export default `
    <div class="page-layout page-layout--common">
        {{~ Array.from({ length: 1 }, (v, i) => i + 1) :num:idx}}
            <div class="column column--{{= num}}">
                <div class="fn-portlet-dropzone--{{= num}}"></div>
            </div>
        {{~}}
    </div>
`;
