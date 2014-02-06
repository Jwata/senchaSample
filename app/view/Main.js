Ext.define('LunchMap.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    config: {
        cls: 'default-bg',
        items: [{
          xtype: 'categories'
        }]
    }
});
