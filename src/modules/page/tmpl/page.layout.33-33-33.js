export default `
    <div class="page-layout page-layout--33-33-33">
        {{~ Array.from({ length: 3 }, (v, i) => i + 1) :num:idx}}
            <div class="column column--{{= num}}">
                <div class="fn-portlet-dropzone--{{= num}}"></div>
            </div>
        {{~}}
    </div>
`;
