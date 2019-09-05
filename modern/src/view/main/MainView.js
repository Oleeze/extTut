
Ext.define('Tunes.view.main.MainView',{
    extend: 'Ext.Container',
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
    layout: 'fit',
    items: [
        {
            xtype: 'tunesview',
            bind: {
                store: '{tunes}'
            }
        }
    ]
});
