Ext.Loader.setPath({
    'Ext': 'touch/src',
    'LunchMap': 'app'
});

Ext.application({
    name: 'LunchMap',
    requires: [
        'Ext.MessageBox',
        'LunchMap.util.Util'
    ],
    views: [
        'Main',
        'Categories'
        // 'PlaceList'
    ],
    controllers: [
        'App'
    ],
    models: [
        'Category'
        // 'Place'
    ],
    stores: [
        'Categories'
        // 'Places'
    ],
    icon: {
        '57':   'resources/icons/Icon.png',
        '72':   'resources/icons/IIcon~ipad.png',
        '114': 'resources/icons/Icon@2x.png'
    },
    isIconPrecomposed: true,
    startupImages: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('LunchMap.view.Main'));
    },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                     window.location.reload();
                }
            }
        );
    }
});