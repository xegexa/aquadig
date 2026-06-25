(function(){var P$=Clazz.newPackage("javax.microedition.lcdui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GameDimensions");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['dynamic'],'I',['runtimeWidth','runtimeHeight']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isDynamic$',  function () {
return C$.dynamic;
}, 1);

Clazz.newMeth(C$, 'setDynamic$Z',  function (v) {
C$.dynamic=v;
}, 1);

Clazz.newMeth(C$, 'getWidth$',  function () {
return C$.dynamic ? C$.runtimeWidth : 400;
}, 1);

Clazz.newMeth(C$, 'getHeight$',  function () {
return C$.dynamic ? C$.runtimeHeight : 300;
}, 1);

Clazz.newMeth(C$, 'setRuntimeLogicalSizeIfChanged$I$I',  function (physicalWidth, physicalHeight) {
if (!C$.dynamic) {
return false;
}var lw=Math.max(1, (physicalWidth/2|0));
var lh=Math.max(1, (physicalHeight/2|0));
if (lw == C$.runtimeWidth && lh == C$.runtimeHeight ) {
return false;
}C$.runtimeWidth=lw;
C$.runtimeHeight=lh;
return true;
}, 1);

Clazz.newMeth(C$, 'resetRuntimeToFixed$',  function () {
C$.runtimeWidth=400;
C$.runtimeHeight=300;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.dynamic=Boolean.parseBoolean$S(System.getProperty$S$S("aquadig.dynamicResolution", "false"));
C$.runtimeWidth=400;
C$.runtimeHeight=300;
};
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
