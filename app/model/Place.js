Ext.define('LunchMap.model.Place', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            "formatted_address",
            "geometry",
            "icon",
            "id",
            "name",
            "rating",
            "reference",
            "types",
            "vicinity",
            "photos"]
    }
});

