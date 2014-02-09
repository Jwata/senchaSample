Ext.define('LunchMap.store.Places', {
    extend: 'Ext.data.Store',
    config: {
        model: 'LunchMap.model.Place',
        proxy: {
            type: 'ajax',
            url: LunchMap.util.Util.api.nearsetPlaces,
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }

});

