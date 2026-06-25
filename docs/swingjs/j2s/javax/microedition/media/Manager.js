(function(){var P$=Clazz.newPackage("javax.microedition.media"),I$=[[0,'javax.microedition.media.MidiPlayer','java.io.ByteArrayOutputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Manager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createPlayer$java_io_InputStream$S',  function (stream, type) {
if (stream == null ) {
throw Clazz.new_(Clazz.load('javax.microedition.media.MediaException').c$$S,["null stream"]);
}var data=C$.readAll$java_io_InputStream(stream);
if (type != null  && (type.contains$CharSequence("midi") || type.contains$CharSequence("x-midi") ) ) {
return Clazz.new_($I$(1,1).c$$BA,[data]);
}throw Clazz.new_(Clazz.load('javax.microedition.media.MediaException').c$$S,["unsupported type: " + type]);
}, 1);

Clazz.newMeth(C$, 'readAll$java_io_InputStream',  function ($in) {
var bos=Clazz.new_($I$(2,1));
var buf=Clazz.array(Byte.TYPE, [8192]);
var n;
while ((n=$in.read$BA(buf)) != -1){
bos.write$BA$I$I(buf, 0, n);
}
return bos.toByteArray$();
}, 1);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
