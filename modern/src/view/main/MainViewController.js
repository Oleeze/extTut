Ext.define('Tunes.view.main.MainViewController', {
    extend: 'Tunes.view.main.BaseController',
    alias: 'controller.main-mainview',
    onShowPreview: function(list, index, target, record) {
        var videoConfig = {
            xtype: 'video',
            posterUrl: record.data.image,
            url: record.data.preview
        };
        var linkConfig = {
            docked: 'bottom',
            xtype: 'component',
            tpl: [
                '<a href="{itunesstore}" target="itunes_store">',
                '<img src="resources/images/get-it-itunes.svg" style="margin: 16px; display: block; margin-left: auto; margin-right: auto; width: 75px;">',
                '</a>'
            ],
            data: {
                itunesstore: record.data.itunesstore
            }
        };
        var containerConfig = {
            xtype: 'container',
            title: record.data.title + ' — ' + record.data.artist,
            style: '{background-color: black;}',
            layout: 'fit',
            items: [videoConfig, linkConfig]
        };
        if (this.getView().down('video')) return;
        this.getView().push(containerConfig);
        
    }
});
