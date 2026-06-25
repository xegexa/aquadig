(function(){var P$=Clazz.newPackage("javax.microedition.io"),I$=[[0,'javax.microedition.io.HttpConnectionImpl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Connector");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'open$S',  function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["null url"]);
}if (name.startsWith$S("http://") || name.startsWith$S("https://") ) {
return Clazz.new_($I$(1,1).c$$S,[name]);
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unsupported URL: " + name]);
}, 1);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
