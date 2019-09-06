Ext.define('Tunes.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-mainview',
    requires: [
        'Tunes.view.Preview'
    ],

    onShowPreview: function(view, record) {
        Ext.create('Tunes.view.Preview', {
            title: record.data.title + ', provided courtesy of iTunes',
            data: record.data
        });
    }

});
