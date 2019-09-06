Ext.define('Tunes.view.main.MainViewModel', {
    extend: 'Tunes.view.main.BaseModel',
    alias: 'viewmodel.main-mainview',
    stores: {
        tunesGrouped: {
            type: 'chained',
            source: '{tunes}',
            grouper: {
                groupFn: function(record) {
                    return record.data.sortArtist[0].toUpperCase();
                }
            }
        }
    }
});


