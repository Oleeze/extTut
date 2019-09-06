
Ext.define('Tunes.view.main.MainView',{
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'Tunes.view.main.MainViewController',
        'Tunes.view.main.MainViewModel',
        'Tunes.view.TunesView'
    ],

    controller: 'main-mainview',
    viewModel: {
        type: 'main-mainview'
    },
    items: [
        {
            xtype: 'tunesview',
            title:'iTunes Music Videos',
            bind: {
                store: '{tunesGrouped}'
            },
            listeners: {
                itemtap: 'onShowPreview'
            }
        }
    ]
});
