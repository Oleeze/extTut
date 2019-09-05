
Ext.define('Tunes.view.main.MainView',{
    extend: 'Ext.panel.Panel',
    xtype: 'main',
    requires: [
        'Tunes.view.main.MainViewController',
        'Tunes.view.main.MainViewModel',
        'Ext.plugin.Viewport',
        'Tunes.view.TunesView'
    ],

    controller: 'main-mainview',
    viewModel: {
        type: 'main-mainview'
    },
    layout: 'fit',
    items: [{
        xtype: 'tunesview',
        bind: {
            store: '{tunes}'
        }
    }]
});