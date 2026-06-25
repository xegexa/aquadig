(function(){var P$=Clazz.newPackage("javax.microedition.rms"),p$1={},I$=[[0,'java.util.HashMap','java.util.ArrayList','java.nio.file.Paths','java.nio.file.Files','java.nio.file.attribute.FileAttribute','java.nio.file.LinkOption','java.io.DataInputStream','java.nio.file.OpenOption','java.io.DataOutputStream','javax.microedition.rms.RecordEnumerationImpl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RecordStore");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.records=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['S',['name'],'O',['records','java.util.List','file','java.nio.file.Path']]
,['O',['OPEN','java.util.Map']]]

Clazz.newMeth(C$, 'baseDir$',  function () {
return $I$(3,"get$S$SA",[System.getProperty$S("user.home"), Clazz.array(String, -1, [".aquadig"])]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
var dir=C$.baseDir$();
try {
$I$(4,"createDirectories$java_nio_file_Path$java_nio_file_attribute_FileAttributeA",[dir, Clazz.array($I$(5), -1, [])]);
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"java.io.IOException")){
} else {
throw ignored;
}
}
this.file=dir.resolve$S(name + ".rms");
}, 1);

Clazz.newMeth(C$, 'openRecordStore$S$Z',  function (recordStoreName, createIfNecessary) {
{
var existing=C$.OPEN.get$O(recordStoreName);
if (existing != null ) {
return existing;
}var f=C$.baseDir$().resolve$S(recordStoreName + ".rms");
if (!createIfNecessary && !$I$(4,"isRegularFile$java_nio_file_Path$java_nio_file_LinkOptionA",[f, Clazz.array($I$(6), -1, [])]) ) {
throw Clazz.new_(Clazz.load('javax.microedition.rms.RecordStoreNotFoundException'));
}var rs=Clazz.new_(C$.c$$S,[recordStoreName]);
p$1.load.apply(rs, []);
C$.OPEN.put$O$O(recordStoreName, rs);
return rs;
}}, 1);

Clazz.newMeth(C$, 'load',  function () {
if (!$I$(4,"isRegularFile$java_nio_file_Path$java_nio_file_LinkOptionA",[this.file, Clazz.array($I$(6), -1, [])])) {
return;
}try {
var $in=Clazz.new_([$I$(4,"newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA",[this.file, Clazz.array($I$(8), -1, [])])],$I$(7,1).c$$java_io_InputStream);
try {
var n=$in.readInt$();
for (var i=0; i < n; i++) {
var len=$in.readInt$();
var data=Clazz.array(Byte.TYPE, [len]);
$in.readFully$BA(data);
this.records.add$O(data);
}

}finally{/*res*/$in&&$in.close$&&$in.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.records.clear$();
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'save',  function () {
try {
var out=Clazz.new_([$I$(4,"newOutputStream$java_nio_file_Path$java_nio_file_OpenOptionA",[this.file, Clazz.array($I$(8), -1, [])])],$I$(9,1).c$$java_io_OutputStream);
try {
out.writeInt$I(this.records.size$());
for (var r, $r = this.records.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
out.writeInt$I(r.length);
out.write$BA(r);
}

}finally{/*res*/out&&out.close$&&out.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.microedition.rms.RecordStoreFullException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'closeRecordStore$',  function () {
{
try {
p$1.save.apply(this, []);
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"javax.microedition.rms.RecordStoreFullException")){
} else {
throw ignored;
}
}
C$.OPEN.remove$O(this.name);
}});

Clazz.newMeth(C$, 'getNumRecords$',  function () {
return this.records.size$();
});

Clazz.newMeth(C$, 'getRecordSize$I',  function (id) {
return this.records.get$I(id - 1).length;
});

Clazz.newMeth(C$, 'getRecord$I',  function (id) {
return this.records.get$I(id - 1);
});

Clazz.newMeth(C$, 'addRecord$BA$I$I',  function (data, offset, len) {
var copy;
if (data == null  || len == 0 ) {
copy=Clazz.array(Byte.TYPE, [0]);
} else {
copy=Clazz.array(Byte.TYPE, [len]);
System.arraycopy$O$I$O$I$I(data, offset, copy, 0, len);
}this.records.add$O(copy);
p$1.save.apply(this, []);
return this.records.size$();
});

Clazz.newMeth(C$, 'setRecord$I$BA$I$I',  function (id, data, offset, len) {
var copy=Clazz.array(Byte.TYPE, [len]);
System.arraycopy$O$I$O$I$I(data, offset, copy, 0, len);
this.records.set$I$O(id - 1, copy);
p$1.save.apply(this, []);
});

Clazz.newMeth(C$, 'enumerateRecords$javax_microedition_rms_RecordFilter$javax_microedition_rms_RecordComparator$Z',  function (filter, comparator, keepUpdated) {
return Clazz.new_($I$(10,1).c$$javax_microedition_rms_RecordStore$javax_microedition_rms_RecordFilter$javax_microedition_rms_RecordComparator$Z,[this, filter, comparator, keepUpdated]);
});

Clazz.newMeth(C$, 'deleteRecordStore$S',  function (recordStoreName) {
{
C$.OPEN.remove$O(recordStoreName);
var f=C$.baseDir$().resolve$S(recordStoreName + ".rms");
try {
$I$(4).deleteIfExists$java_nio_file_Path(f);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.microedition.rms.RecordStoreException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.OPEN=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
