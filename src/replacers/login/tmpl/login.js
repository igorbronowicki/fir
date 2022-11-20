export default `
    <form class="form form_name_login fn-form">
        <div class="form-messages fn-form-messages"></div>

        <div class="field field_name_username fn-validate" data-validation-type="username">
            <div class="field__control">
                <input type="text" name="username" placeholder="{{= tmpl.i18n('login.field.username.placeholder')}}">
            </div>
        </div>
    
        <div class="field field_name_password fn-validate" data-validation-type="password">
            <div class="field__control">
                <input type="password" name="password" placeholder="{{= tmpl.i18n('login.field.password.placeholder')}}">
            </div>
        </div>
    
        <div class="form__actions">
            <button type="submit">{{= tmpl.i18n('login.actions.login')}}</button>
        </div>
    </form>
`;