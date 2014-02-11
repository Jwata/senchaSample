Ext.define('LunchMap.view.Categories', {
    extend: 'Ext.List',
    xtype: 'categories',
    config: {
        cls: 'default-bg, category-list',
        itemTpl: '{name}',
        store: 'Categories',
        grouped: false,
        indexBar: true,
        title: 'home'
    }
});
