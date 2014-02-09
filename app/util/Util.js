Ext.define('LunchMap.util.Util', {
    singleton: true,
    enablePageAnimations: true,
    userLocation: null,
    API_KEY: 'AIzaSyALaaTiK4AB1IVJQ_mStNWxX3GOieSnOTU',
    api: (function() {
        var baseUrl = 'php/action.php';
        return {
            baseUrl: baseUrl,
            categories: 'resources/data/categories.json',
            nearsetPlaces: baseUrl + '',
            nearBySearch: 'nearbysearch',
            photo: 'photo',
            details: 'details'
        };
    })(),
    defaultSearchRadius: 500,
    // Destroy a Sencha View
    destroyCmp: function(child, parent) {
        parent = parent || Ext.Viewport;
        if (child) {
            Ecd.defer(function() {
                parent.remove(child);
            }, LunchMap.util.Util.animDuration);
        }
    },
    // Show general message alert
    showMsg: function(msg, title, cb, scope) {
        if (msg) {
            title = title || 'Error';
            msg = msg.toString();
            cb = cb || function() {};
            scope = scope || window;
            Ext.Msg.alert(title, msg, cb, scope);
        }
        return this;
    },
    // Animate the active item
    showActiveItem: function(parentPanel, childPanel, animation) {
        animation = Ext.apply({
            type: 'slide',
            duration: LunchMapConfig.animationDuration
        }, animation || {});
        if (parentPanel && childPanel) {
            if (this.enablePageAnimations && animation && animation.type) {
                parentPanel.animationActiveItem(childPanel, aniamtion);
            } else {
                parentPanel.setActiveItem(childPanel);
            }
        }
        return this;
    },
    // Show a loading box on a
    showLoading: function(panel, doShow, message) {
        panel = panel || Ext.Viewport;
        if (panel) {
            if (doShow) {
                panel.setMasked({
                    xtype: 'loadMask',
                    message: message || 'Loading...'
                });
            } else {
                panel.setMasked(false);
            }
        }
        return this;
    },
    // Capitalize first character of each word of a string
    toTitleCase: function(str) {
        if (!str) {
            return '';
        }
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});
