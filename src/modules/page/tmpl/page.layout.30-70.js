export default `
    <div class="page-layout page-layout--30-70">
        {{~ Array.from({ length: 2 }, (v, i) => i + 1) :num:idx}}
            <div class="column column--{{= num}}">
                <div class="fn-portlet-dropzone--{{= num}}"></div>
            </div>
        {{~}}
    </div>
`;
