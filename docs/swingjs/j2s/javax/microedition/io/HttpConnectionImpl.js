(function(){var P$=Clazz.newPackage("javax.microedition.io"),I$=[[0,'java.net.URL','java.io.DataInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HttpConnectionImpl", null, null, 'javax.microedition.io.HttpConnection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['conn','java.net.HttpURLConnection','inputStream','java.io.InputStream']]]

Clazz.newMeth(C$, 'c$$S',  function (url) {
;C$.$init$.apply(this);
var u=Clazz.new_($I$(1,1).c$$S,[url]);
this.conn=u.openConnection$();
}, 1);

Clazz.newMeth(C$, 'setRequestMethod$S',  function (method) {
this.conn.setRequestMethod$S(method);
});

Clazz.newMeth(C$, 'setRequestProperty$S$S',  function (key, value) {
this.conn.setRequestProperty$S$S(key, value);
});

Clazz.newMeth(C$, 'getResponseCode$',  function () {
return this.conn.getResponseCode$();
});

Clazz.newMeth(C$, 'getRequestMethod$',  function () {
return this.conn.getRequestMethod$();
});

Clazz.newMeth(C$, 'getHeaderField$S',  function (name) {
return this.conn.getHeaderField$S(name);
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.conn.getContentLengthLong$();
});

Clazz.newMeth(C$, 'getEncoding$',  function () {
return this.conn.getContentEncoding$();
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.conn.getContentType$();
});

Clazz.newMeth(C$, 'openInputStream$',  function () {
if (this.inputStream == null ) {
this.inputStream=this.conn.getInputStream$();
}return this.inputStream;
});

Clazz.newMeth(C$, 'openDataInputStream$',  function () {
return Clazz.new_([this.openInputStream$()],$I$(2,1).c$$java_io_InputStream);
});

Clazz.newMeth(C$, 'close$',  function () {
if (this.inputStream != null ) {
try {
this.inputStream.close$();
} finally {
this.inputStream=null;
}
}this.conn.disconnect$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
