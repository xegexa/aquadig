(function(){var P$=Clazz.newPackage("aquadig"),I$=[[0,'javax.swing.SwingUtilities','aquadig.Mid']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AquaDig");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
for (var i=0; i < args.length; i++) {
if ("--dynamic-resolution".equals$O(args[i])) {
System.setProperty$S$S("aquadig.dynamicResolution", "true");
break;
}}
$I$(1,"invokeLater$Runnable",[(P$.AquaDig$lambda1$||(P$.AquaDig$lambda1$=(((P$.AquaDig$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AquaDig$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
var m=Clazz.new_($I$(2,1));
m.startApp$();
});
})()
), Clazz.new_(P$.AquaDig$lambda1.$init$,[this, null])))))]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
