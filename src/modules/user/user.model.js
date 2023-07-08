import BaseModel from '../../common/base.model';
import config from '../configuration/configuration.instance';

const UserModel = BaseModel.extend({
    defaults: function() {
        return {
            currencyCode: config.get('defaultCurrency'),
            lang: config.get('defaultLocale')
        };
    }
});

export default UserModel;