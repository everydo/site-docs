obj=document.getElementsByTagName('object');
for (var i=0; i<obj.length; ++i)
  obj[i].outerHTML=obj[i].outerHTML;
cols=document.getElementById('portal-columns');
cols.style.width="100%"
cols=document.getElementById('content');
cols.style.width="100%"
