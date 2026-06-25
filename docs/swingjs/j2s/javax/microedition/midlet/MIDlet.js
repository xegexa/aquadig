(function(){var P$=Clazz.newPackage("javax.microedition.midlet"),I$=[[0,'java.util.jar.Manifest','javax.microedition.lcdui.Display']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MIDlet");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['manifestAttrs','java.util.jar.Attributes']]]

Clazz.newMeth(C$, 'getAppProperty$S',  function (key) {
if (C$.manifestAttrs != null ) {
var v=C$.manifestAttrs.getValue$S(key);
if (v != null ) {
return v;
}}return null;
});

Clazz.newMeth(C$, 'notifyDestroyed$',  function () {
$I$(2).shutdown$();
System.exit$I(0);
});

Clazz.newMeth(C$, 'notifyPaused$',  function () {
});

C$.$static$=function(){C$.$static$=0;
{
var $in=Clazz.getClass(C$).getResourceAsStream$S("/META-INF/MANIFEST.MF");
if ($in != null ) {
try {
var m=Clazz.new_($I$(1,1).c$$java_io_InputStream,[$in]);
C$.manifestAttrs=m.getMainAttributes$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
C$.manifestAttrs=null;
} else {
throw e;
}
} finally {
try {
$in.close$();
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"java.io.IOException")){
} else {
throw ignored;
}
}
}
}};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
