Ext.define('Tunes.view.TunesView', {
  extend: 'Ext.view.View',
  xtype: 'tunesview',
  scrollable: true,
  itemCls: 'video',
  overItemCls: 'overvideo',
  itemTpl: [
      '<figure>',
      '<img src="{image}">',
      '<figcaption><b>{title}</b><br>{artist}</figcaption><br>',
      '</figure>'
  ]
});