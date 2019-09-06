Ext.define('Tunes.view.TunesView', {
  extend: 'Ext.dataview.List',
  xtype: 'tunesview',
  itemCls: 'video',
  grouped: true,
  indexBar:true,
  itemTpl: [
    '<img src="{image}" style="width: 90px;">',
    '<div style="left: 110px;font-size: 1.1em;">',
    '<p><b>{title}</b><br>{artist}</p>',
    '</div>'
  ]
})