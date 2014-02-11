Ext.define('LunchMap.controller.App', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.device.Geolocation', 'Ext.Map'],
    util: LunchMap.util.Util,
    config: {
        refs: {
            categoriesList: 'categories',
            main: 'main',
            placeList: 'placeList'
        },
        control: {
            categoriesList: {
                itemtap: 'loadPlaces'
            }
        }
    },
    /**
     * Retrieve all the places for a particlur category
     */
    loadPlaces: function(list, index, target, record) {
        var self = this;
        var loadPlaces = function() {
            self.showPlaceList(record);

            // Load the store with user's location, radius, type and api key
            store.getProxy().setExtraParams({
                location: self.util.userLocation,
                action: self.util.api.nearBySearch,
                radius: self.util.defaultSearchRadius,
                sensor: false,
                key: self.util.API_KEY,
                types: record.get('type')
            });

            store.load(function(records) {
                self.util.showLoading(self.getPlaceList(), false);
            });
        };

        var store = Ext.getStore('Places');

        // If user's location is already not set, fetch it.
        // Else load the places for the saved user's location
        if (!self.util.userLocation) {
            Ext.device.Geolocation.getCurrentPosition({
                success: function(pos) {
                    self.util.userLocation =
                        pos.coords.latitude + ',' + pos.coords.longitude;
                    loadPlaces();
                },
                failure: function() {
                    self.util.showMsg(Lang.locationRetrievalError);
                }
            });
        } else {
            // Clean the store if there is any previous data
            store.removeAll();
            loadPlaces();
        }
    },
    showPlaceList: function(record) {
        this.getMain().push({
            xtype: 'placelist',
            title: record.get('name')
        });
    }
});
