(function(){var P$=Clazz.newPackage("javax.microedition.lcdui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Command");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['commandType','priority'],'S',['label']]]

Clazz.newMeth(C$, 'c$$S$I$I',  function (label, commandType, priority) {
;C$.$init$.apply(this);
this.label=label;
this.commandType=commandType;
this.priority=priority;
}, 1);

Clazz.newMeth(C$, 'getCommandType$',  function () {
return this.commandType;
});

Clazz.newMeth(C$, 'getLabel$',  function () {
return this.label;
});

Clazz.newMeth(C$, 'getPriority$',  function () {
return this.priority;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
