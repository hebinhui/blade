define(["View",getViewTemplatePath("group.select"),"UIGroupSelect"],function(a,b,c){return _.inherit(a,{onCreate:function(){this.$el.html(b)},events:{"click .demo1":function(){for(var a=[],b=[],d=0;10>d;d++){var e={id:"q_"+d,name:"项目_"+d};d%3==0&&(e.disabled=!0),a.push(e)}for(var d=0;10>d;d++){var e={id:"qqq_"+d,name:"项目_"+d};d%4==0&&(e.disabled=!0),b.push(e)}this.groupSelect||(this.groupSelect=new c({data:[a,b]})),this.groupSelect.show()},"click .demo2":function(){for(var a=[],b=[],d=[],e={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31},f=2e3;2014>=f;f++){var g={id:"y_"+f,name:f+"年"};a.push(g)}for(var f=1;12>=f;f++){var g={id:"m_"+f,name:f+"月"};b.push(g)}for(var f=1;31>=f;f++){var g={id:"d_"+f,name:f+"日"};d.push(g)}this.groupSelect2||(this.groupSelect2=new c({datamodel:{title:"日期选择",tips:""},data:[a,b,d],changedArr:[function(a){0},function(a){for(var b=this.scrollArr[2],c=parseInt(a.name),d=e[c],f=31;f>28;f--)b.datamodel.data[f-1].disabled=!1,f>d&&(b.datamodel.data[f-1].disabled=!0);this.scrollArr[2].reload(),0},function(a){0}],onOkAction:function(a){0,this.hide()},onCancelAction:function(a){0,this.hide()}})),this.groupSelect2.show()}},onPreShow:function(){this.turning()},onShow:function(){},onHide:function(){}})});