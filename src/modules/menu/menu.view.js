import BaseView from "../../common/base.view";
import config from '../configuration/configuration.instance';
import core from "../../core";

const MenuView = BaseView.extend({
    className: 'menu',

    subscribe() {
        this.listenTo(core, {
            'banner.bullet.click': (num) => console.log(`Bullet ${num} was clicked on banner`)
        });
    },

    render() {
        var items = config.get('menuItems');

        this.$el.html(this.tmpl('menu', {
            items: items
        }));

        return this;
    }
});

// TODO: login/logout render guest/user parent current active

export default MenuView;