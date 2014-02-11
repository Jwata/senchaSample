Ext.define('LunchMap.view.PlaceList', {
    extend: 'Ext.List',
    xtype: 'placelist',
    config: {
        cls: 'default-bg, category-list',
        store: 'Places',
        emptyText: Lang.placeList.emptyText,
        itemTpl: Ext.create('Ext.XTemplate',
            '{[this.getImage(values)]}',
            '<div class="item" data-placelistitem-id="{id}">',
            '<div class="name">{name}</div>',
            '<div calss="vicinity">{vicinity}</div>',
            '{rating:this.getRating}',
            '</div>', {
            getImage: function(data) {
                var imageDiv = '';
                if (data.photos && data.photos.length > 0) {
                    imageDiv += '<div class="photo">';
                    imageDiv += '<img src="' + data.photos[0].url + '" />';
                    imageDiv += '</div>';
                    return imageDiv;
                }

                imageDiv += '<div class="icon-wrapper">';
                imageDiv += '<div class="icon" style="';
                imageDiv += '-webkit-mask-image:url(' + data.icon + ')';
                imageDiv += '"></div></div>';
                return imageDiv;
            },
            getRating: function(rating) {
                return LunchMap.util.Util.getRating(rating);
            }
        })
    }
});

