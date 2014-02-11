Ext.define('LunchMap.store.Categories', {
    extend: 'Ext.data.Store',
    config: {
        model: 'LunchMap.model.Category',
        autoLoad: true,
        sorters: 'name',
        //grouper: {
        //    groupFn: function(record) {
        //        return record.get('name')[0];
        //    }
        //},
        proxy: {
            type: 'ajax',
            url: LunchMap.util.Util.api.categories,
            reader: {
                type: 'json',
                rootProperty: 'categories'
            }
        }
    }

});
