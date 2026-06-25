(function(){var P$=Clazz.newPackage("com.vlm.redstar.client.core.csp"),p$1={},I$=[[0,'java.util.Vector','java.io.ByteArrayOutputStream','java.io.DataOutputStream','StringBuffer','java.io.ByteArrayInputStream','java.io.DataInputStream','Thread','javax.microedition.io.Connector','javax.microedition.rms.RecordStore','java.util.Hashtable','java.util.Random']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "a", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.a=false;
this.b=null;
this.e=null;
this.f=null;
this.g=null;
this.t=null;
this.i=Clazz.new_($I$(1,1));
this.j=null;
this.k=null;
this.l=-1;
this.m=null;
this.n=null;
this.p=null;
this.q=null;
this.v=-1;
this.w=null;
this.y=0;
this.s=null;
},1);

C$.$fields$=[['Z',['a'],'I',['l','v','y'],'S',['b','t','k','n','s'],'O',['e','java.util.Vector','+f','+g','+i','j','byte[]','+m','p','javax.microedition.io.HttpConnection','q','java.io.DataInputStream','w','Thread']]
,['I',['x'],'S',['c','d','u','o'],'O',['h','java.util.Hashtable','r','com.vlm.redstar.client.core.csp.a']]]

Clazz.newMeth(C$, 'a$javax_microedition_midlet_MIDlet$S',  function (var0, var1) {
try {
if (C$.r == null  && var0 != null  ) {
C$.r=Clazz.new_(C$.c$$javax_microedition_midlet_MIDlet$S,[var0, var1]);
}} catch (var3) {
if (Clazz.exceptionOf(var3,"Exception")){
} else {
throw var3;
}
}
return C$.r;
}, 1);

Clazz.newMeth(C$, 'a$',  function () {
if (C$.r != null ) {
C$.r=null;
System.gc$();
}}, 1);

Clazz.newMeth(C$, 'c$$javax_microedition_midlet_MIDlet$S',  function (var1, var2) {
;C$.$init$.apply(this);
this.s=var2;
p$1.a$javax_microedition_midlet_MIDlet.apply(this, [var1]);
}, 1);

Clazz.newMeth(C$, 'b$javax_microedition_midlet_MIDlet$S',  function (var0, var1) {
var var2=null;
try {
return var0.getAppProperty$S(var1);
} catch (var4) {
if (Clazz.exceptionOf(var4,"Exception")){
throw Clazz.new_(Clazz.load('Exception').c$$S,["NetworkManager() - Error\n" + var1 + " is missing from the JAD!" ]);
} else {
throw var4;
}
}
}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_midlet_MIDlet',  function (var1) {
var var2;
if ((var2=C$.b$javax_microedition_midlet_MIDlet$S(var1, "Redstar-CarrierId")) != null ) {
C$.c=var2;
C$.d="&c=" + C$.c;
C$.o="/ServletMPG?t=csp" + C$.d + "&p=LG" + "&d=" ;
}}, p$1);

Clazz.newMeth(C$, 'a$I$StringBuffer',  function (var0, var1) {
if (var0 < 16 && var0 >= 0 ) {
var1.append$C("0");
}var1.append$S(Integer.toHexString$I(var0 & 255));
}, 1);

Clazz.newMeth(C$, 'b$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'c$$',  function () {
return C$.x;
}, 1);

Clazz.newMeth(C$, 'd$',  function () {
if (C$.x != 1) {
this.y=0;
C$.x=0;
return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'f',  function () {
var var1=false;
if (!p$1.i.apply(this, [])) {
var1=true;
if (!p$1.j.apply(this, [])) {
C$.x=4;
return false;
}}p$1.g.apply(this, []);
if (this.b == null ) {
if (var1) {
C$.x=4;
return false;
}if (!p$1.j.apply(this, [])) {
C$.x=4;
return false;
}p$1.g.apply(this, []);
}if (this.b != null ) {
this.a=true;
return true;
} else {
C$.x=4;
return false;
}}, p$1);

Clazz.newMeth(C$, 'g',  function () {
var var1=null;
var var2=0;
var var3=C$.a$java_util_Vector(this.i);
while (var2 < var3.size$()){
try {
var1=var3.elementAt$I(var2);
++var2;
var var4=null;
if (this.t != null ) {
var var5=Clazz.new_($I$(2,1));
Clazz.new_($I$(3,1).c$$java_io_OutputStream,[var5]).writeUTF$S(this.t);
var4=var5.toByteArray$();
}var var15;
(var15=Clazz.new_([C$.u.length$() + (var1).length$() + C$.o.length$() + 2 + "&r=n".length$() + (var4 != null  ? var4.length * 2 : 0) ],$I$(4,1).c$$I)).append$S(C$.u);
var15.append$S(var1);
var15.append$S(C$.o);
C$.a$I$StringBuffer(1, var15);
if (this.t != null ) {
for (var var6=0; var6 < var4.length; var6++) {
C$.a$I$StringBuffer(var4[var6], var15);
}
}var15.append$S("&r=n");
p$1.c$S.apply(this, [var15.toString()]);
if (this.l == 200 && this.j != null   && this.j.length > 0 ) {
var var16=Clazz.new_($I$(5,1).c$$BA,[this.j]);
var var7=Clazz.new_($I$(6,1).c$$java_io_InputStream,[var16]);
if (1 == var7.readByte$()) {
var var10000;
var var10001;
if (var7.readByte$() == 1) {
var var9=var7.readUTF$();
var var10;
var var11=Clazz.array(Byte.TYPE, [var10=var7.readInt$()]);
for (var var12=0; var12 < var10; var12++) {
var11[var12]=var7.readByte$();
}
p$1.a$S$S.apply(this, [var9,  String.instantialize(var11)]);
var10000=this;
var10001=Clazz.new_($I$(4,1));
} else {
var10000=this;
var10001=Clazz.new_($I$(4,1));
}var10000.b=var10001.append$S(C$.u).append$S(var1).toString();
p$1.h.apply(this, []);
return;
}}} catch (var13) {
}
}
}, p$1);

Clazz.newMeth(C$, 'h',  function () {
try {
var var1=false;
if (C$.a$S("Uid") == null ) {
var var3;
(var3=Clazz.new_([this.b.length$() + C$.o.length$() + 2 + "&r=y".length$() ],$I$(4,1).c$$I)).append$S(this.b);
var3.append$S(C$.o);
C$.a$I$StringBuffer(-28, var3);
var3.append$S("&r=y");
p$1.c$S.apply(this, [var3.toString()]);
if (this.l == 200) {
var var4=Clazz.new_($I$(5,1).c$$BA,[this.j]);
var var5;
if ((var5=Clazz.new_($I$(6,1).c$$java_io_InputStream,[var4])).readByte$() == -28) {
var var7=var5.readUTF$();
var var8=Clazz.new_($I$(2,1));
var var9;
(var9=Clazz.new_($I$(3,1).c$$java_io_OutputStream,[var8])).writeUTF$S(var7);
C$.a$S$BA$Z("Uid", var8.toByteArray$(), true);
var9.close$();
}var5.close$();
}}} catch (var10) {
}
}, p$1);

Clazz.newMeth(C$, 'b$S',  function (var1) {
if (var1 == null ) {
return false;
} else {
var var2=0;
var var3=0;
this.i.removeAllElements$();
try {
var1.indexOf$I$I(10, 0);
while (var2 < var1.length$()){
if ((var3=var1.indexOf$I$I(10, var2)) == -1) {
var3=var1.length$();
}var var10000;
var var10001;
var var10002;
if (var1.charAt$I(var3 - 1) == "\r") {
var10000=var1;
var10001=var2;
var10002=var3 - 1;
} else {
var10000=var1;
var10001=var2;
var10002=var3;
}var var4=var10000.substring$I$I(var10001, var10002);
var2=var3 + 1;
this.i.addElement$O(var4);
}
return true;
} catch (var6) {
return false;
}
}}, p$1);

Clazz.newMeth(C$, 'i',  function () {
try {
var var1;
if ((var1=C$.a$S("srvInfo")) == null ) {
return false;
} else {
this.t=var1.readUTF$();
var var2=var1.readUTF$();
return p$1.b$S.apply(this, [var2]);
}} catch (var3) {
var3.printStackTrace$();
return false;
}
}, p$1);

Clazz.newMeth(C$, 'a$S$S',  function (var1, var2) {
try {
if (p$1.b$S.apply(this, [var2])) {
var var3=Clazz.new_($I$(2,1));
var var4;
(var4=Clazz.new_($I$(3,1).c$$java_io_OutputStream,[var3])).writeUTF$S(var1);
var4.writeUTF$S(var2);
C$.a$S$BA$Z("srvInfo", var3.toByteArray$(), true);
var4.close$();
var3.close$();
this.t=var1;
}} catch (var5) {
}
}, p$1);

Clazz.newMeth(C$, 'j',  function () {
this.t=null;
var var1=C$.d$S("/res/servers.txt");
try {
return p$1.b$S.apply(this, [ String.instantialize(var1)]);
} catch (var3) {
return false;
}
}, p$1);

Clazz.newMeth(C$, 'k',  function () {
if (C$.x != 1 && C$.x != 4 ) {
C$.x=1;
return !this.a && !p$1.f.apply(this, [])  ? false : C$.x != 4;
} else {
return false;
}}, p$1);

Clazz.newMeth(C$, 'e$',  function () {
if (this.v == -1) {
this.v=3;
this.y=2;
this.w=Clazz.new_($I$(7,1).c$$Runnable,[this]);
this.w.start$();
return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'a$I$I$I',  function (var1, var2, var3) {
if (this.v != -1) {
return false;
} else {
this.v=5;
this.y=4;
var var4=Clazz.new_($I$(2,1));
var var5=Clazz.new_($I$(3,1).c$$java_io_OutputStream,[var4]);
try {
var5.writeInt$I(var1);
var5.writeByte$I(var3);
var5.writeInt$I(var2);
} catch (var9) {
C$.x=3;
return true;
}
var var6=var4.toByteArray$();
var var7;
(var7=Clazz.new_([C$.o.length$() + "&r=y".length$() + 2 + var6.length * 2  + "&g=".length$() + this.s.length$()],$I$(4,1).c$$I)).append$S(C$.o);
C$.a$I$StringBuffer(-50, var7);
for (var var8=0; var8 < var6.length; var8++) {
C$.a$I$StringBuffer(var6[var8], var7);
}
var7.append$S("&r=y");
var7.append$S("&g=");
var7.append$S(this.s);
this.n=var7.toString();
this.w=Clazz.new_($I$(7,1).c$$Runnable,[this]);
this.w.start$();
return true;
}});

Clazz.newMeth(C$, 'a$S$BA',  function (var1, var2) {
if (this.v == -1) {
this.v=6;
this.y=5;
if (var1 == null ) {
C$.x=3;
return false;
} else if (var2 == null ) {
C$.x=3;
return false;
} else {
try {
var var3=Clazz.new_($I$(2,1));
var var4;
(var4=Clazz.new_($I$(3,1).c$$java_io_OutputStream,[var3])).writeUTF$S(var1);
var4.write$BA(var2);
this.m=var3.toByteArray$();
} catch (var5) {
C$.x=3;
return true;
}
this.w=Clazz.new_($I$(7,1).c$$Runnable,[this]);
this.w.start$();
return true;
}} else {
return false;
}});

Clazz.newMeth(C$, 'l',  function () {
if (!p$1.k.apply(this, [])) {
C$.x=3;
} else if (C$.a$S("Uid") == null ) {
C$.x=3;
} else {
var var2;
(var2=Clazz.new_([this.b.length$() + C$.o.length$() + "&r=y".length$() + 2 + "&g=".length$() + this.s.length$() ],$I$(4,1).c$$I)).append$S(this.b);
var2.append$S(C$.o);
C$.a$I$StringBuffer(-25, var2);
var2.append$S("&g=");
var2.append$S(this.s);
this.k=var2.toString();
p$1.c$S.apply(this, [this.k]);
if (this.l != 200) {
this.j=null;
C$.x=3;
} else {
try {
var var3=Clazz.new_($I$(5,1).c$$BA,[this.j]);
var var4;
(var4=Clazz.new_($I$(6,1).c$$java_io_InputStream,[var3])).readByte$();
var var5=var4.readShort$();
this.g=Clazz.new_($I$(1,1).c$$I,[var5]);
for (var var6=0; var6 < var5; var6++) {
this.g.addElement$O(var4.readUTF$());
}
C$.x=2;
} catch (var7) {
C$.x=3;
}
}}}, p$1);

Clazz.newMeth(C$, 'm',  function () {
if (!p$1.k.apply(this, [])) {
C$.x=3;
} else {
this.k=this.b + this.n;
p$1.c$S.apply(this, [this.k]);
if (this.l != 200) {
this.j=null;
C$.x=3;
} else {
try {
var var2;
var var3;
var var4;
var var5;
var var6;
var var7;
var var8;
 label39 : {
var var1=Clazz.new_($I$(5,1).c$$BA,[this.j]);
(var2=Clazz.new_($I$(6,1).c$$java_io_InputStream,[var1])).readByte$();
var3=var2.readUTF$();
var4=var2.readUTF$();
var5= new Integer(var2.readInt$());
var6=var2.readByte$();
var7= new Integer(var2.readInt$());
var8=null;
var var10000;
if (var6 == 0) {
var10000= new Integer(var2.readInt$());
} else {
if (var6 != 1) {
break label39;
}var10000=var2.readUTF$();
}var8=var10000;
}var var9=var2.readByte$();
var var10=var2.readInt$();
if (this.e == null ) {
this.e=Clazz.new_($I$(1,1));
} else {
this.e.removeAllElements$();
}this.e.addElement$O(var5);
this.e.addElement$O( new Byte(var6));
this.e.addElement$O(var7);
this.e.addElement$O(var8);
this.e.addElement$O(var3);
this.e.addElement$O(var4);
if (var9 > 0) {
var var11=Clazz.array(Character.TYPE, [2]);
for (var var12=0; var12 < var9; var12++) {
this.e.addElement$O( new Integer(var12 + var10));
var var13=var2.readUTF$();
this.e.addElement$O(var13);
var var14=var2.readInt$();
this.e.addElement$O( new Integer(var14));
var11[0]=String.fromCharCode(var2.readByte$());
var11[1]=String.fromCharCode(var2.readByte$());
this.e.addElement$O( String.instantialize(var11));
}
}C$.x=2;
} catch (var15) {
C$.x=3;
}
}}}, p$1);

Clazz.newMeth(C$, 'n',  function () {
if (!p$1.k.apply(this, [])) {
C$.x=3;
} else {
var var1;
(var1=Clazz.new_([this.b.length$() + C$.o.length$() + "&r=y".length$() + 2 + "&g=".length$() + this.s.length$() ],$I$(4,1).c$$I)).append$S(this.b);
var1.append$S(C$.o);
C$.a$I$StringBuffer(-51, var1);
var1.append$S("&g=");
var1.append$S(this.s);
var1.append$S("&r=y");
this.k=var1.toString();
p$1.c$S.apply(this, [this.k]);
if (this.l != 200) {
this.j=null;
C$.x=3;
} else {
try {
if (this.j != null ) {
var var2=Clazz.new_($I$(5,1).c$$BA,[this.j]);
var var3;
(var3=Clazz.new_($I$(6,1).c$$java_io_InputStream,[var2])).readByte$();
this.f=Clazz.new_($I$(1,1));
var var6=var3.readShort$();
this.f.addElement$O( new Short(var6));
for (var var7=0; var7 < var6; var7++) {
var var5=var3.readInt$();
var var4=var3.readUTF$();
var var8= new Integer(var3.readInt$());
var var9=var3.readByte$();
var var10= new Integer(var3.readInt$());
var var11= new Integer(var3.readInt$());
if (var9 == 1) {
var11=var3.readUTF$();
}this.f.addElement$O( new Integer(var5));
this.f.addElement$O(var4);
this.f.addElement$O(var8);
this.f.addElement$O( new Byte(var9));
this.f.addElement$O(var10);
this.f.addElement$O(var11);
}
}C$.x=2;
} catch (var12) {
C$.x=3;
}
}}}, p$1);

Clazz.newMeth(C$, 'o',  function () {
if (!p$1.k.apply(this, [])) {
C$.x=3;
} else if (C$.a$S("Uid") == null ) {
C$.x=3;
} else {
var var2;
(var2=Clazz.new_([this.b.length$() + C$.o.length$() + "&r=n".length$() + 2 + this.m.length * 2  + "&g=".length$() + this.s.length$()],$I$(4,1).c$$I)).append$S(this.b);
var2.append$S(C$.o);
C$.a$I$StringBuffer(-49, var2);
for (var var3=0; var3 < this.m.length; var3++) {
C$.a$I$StringBuffer(this.m[var3], var2);
}
var2.append$S("&r=n");
var2.append$S("&g=");
var2.append$S(this.s);
this.k=var2.toString();
p$1.c$S.apply(this, [this.k]);
var var10000;
if (this.l != 200) {
this.j=null;
var10000=($b$[0] = 3, $b$[0]);
} else {
var10000=($b$[0] = 2, $b$[0]);
}C$.x=var10000;
}}, p$1);

Clazz.newMeth(C$, 'run$',  function () {
switch (this.v) {
case 2:
p$1.l.apply(this, []);
break;
case 3:
p$1.n.apply(this, []);
case 4:
default:
break;
case 5:
p$1.m.apply(this, []);
break;
case 6:
p$1.o.apply(this, []);
}
this.k=null;
this.j=null;
this.v=-1;
});

Clazz.newMeth(C$, 'c$S',  function (var1) {
this.l=417;
var var2;
if ((var2=C$.a$S("Uid")) != null ) {
try {
var var3=var2.readUTF$();
var1=var1 + "&u=" + var3 ;
} catch (var11) {
}
}try {
this.p=$I$(8).open$S(var1);
this.p.setRequestMethod$S("GET");
this.p.setRequestProperty$S$S("Content-Length", "0");
this.l=this.p.getResponseCode$();
if (this.l == 200) {
this.q=this.p.openDataInputStream$();
var var14;
if ((var14=this.q.available$()) > 0) {
this.j=Clazz.array(Byte.TYPE, [var14]);
this.q.readFully$BA$I$I(this.j, 0, var14);
} else {
var var4=this.q.read$();
var var5=Clazz.new_($I$(2,1));
for (var var6=Clazz.new_($I$(3,1).c$$java_io_OutputStream,[var5]); var4 != -1; var4=this.q.read$()) {
var6.writeByte$I(var4);
}
this.j=var5.toByteArray$();
}}p$1.p.apply(this, []);
return;
} catch (var12) {
var12.printStackTrace$();
} finally {
p$1.p.apply(this, []);
}
}, p$1);

Clazz.newMeth(C$, 'p',  function () {
if (this.q != null ) {
try {
this.q.close$();
this.q=null;
} catch (var2) {
}
}if (this.p != null ) {
try {
this.p.close$();
this.p=null;
return;
} catch (var3) {
}
}}, p$1);

Clazz.newMeth(C$, 'a$S',  function (var0) {
if (C$.h == null ) {
C$.r$();
}var var1=C$.h.get$O(var0);
if (null == var1 ) {
return null;
} else {
var var2=Clazz.new_($I$(5,1).c$$BA,[var1]);
return Clazz.new_($I$(6,1).c$$java_io_InputStream,[var2]);
}}, 1);

Clazz.newMeth(C$, 'a$S$BA$Z',  function (var0, var1, var2) {
if (C$.h == null ) {
C$.r$();
}C$.h.put$O$O(var0, var1);
if (var2) {
C$.q$();
}}, 1);

Clazz.newMeth(C$, 'q$',  function () {
if (null != C$.h ) {
{
try {
$I$(9).deleteRecordStore$S("saveData");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreNotFoundException")){
var var9 = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreException")){
var var10 = e$$;
{
}
} else {
throw e$$;
}
}
try {
var var1=$I$(9).openRecordStore$S$Z("saveData", true);
var var2=C$.h.keys$();
while (var2.hasMoreElements$()){
var var3=Clazz.new_($I$(2,1));
var var4=Clazz.new_($I$(3,1).c$$java_io_OutputStream,[var3]);
var var5=var2.nextElement$();
var var6=C$.h.get$O(var5);
var4.writeUTF$S(var5);
var4.write$BA(var6);
var var7=var3.toByteArray$();
var4.close$();
var3.close$();
var1.addRecord$BA$I$I(var7, 0, var7.length);
}
var1.closeRecordStore$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreFullException")){
var var11 = e$$;
{
throw var11;
}
} else {
var var12 = e$$;
{
}
}
}
}}}, 1);

Clazz.newMeth(C$, 'r$',  function () {
try {
if (C$.h == null ) {
C$.h=Clazz.new_($I$(10,1));
}{
var var1;
var var2=(var1=$I$(9).openRecordStore$S$Z("saveData", false)).enumerateRecords$javax_microedition_rms_RecordFilter$javax_microedition_rms_RecordComparator$Z(null, null, false);
while (var2.hasNextElement$()){
var var5=var2.nextRecord$();
var var3=Clazz.new_($I$(5,1).c$$BA,[var5]);
var var4;
var var6=(var4=Clazz.new_($I$(6,1).c$$java_io_InputStream,[var3])).readUTF$();
var var7=Clazz.array(Byte.TYPE, [var4.available$()]);
var4.readFully$BA(var7);
C$.h.put$O$O(var6, var7);
var4.close$();
var3.close$();
}
var1.closeRecordStore$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreNotFoundException")){
var var10 = e$$;
{
return;
}
} else {
var var11 = e$$;
{
}
}
}
}, 1);

Clazz.newMeth(C$, 'd$S',  function (var0) {
try {
var var1;
if ((var1=var0.getClass$().getResourceAsStream$S(var0)) == null ) {
return null;
} else {
var var2;
var var3=(var2=Clazz.new_($I$(6,1).c$$java_io_InputStream,[var1])).available$();
var var5=0;
var var6=Clazz.array(Byte.TYPE, [var3]);
var var4;
do {
if ((var4=var2.read$()) != -1) {
var6[var5]=(var4|0);
++var5;
}} while (var4 != -1);
return var6;
}} catch (var7) {
return null;
}
}, 1);

Clazz.newMeth(C$, 'a$java_util_Vector',  function (var0) {
try {
if (var0 == null ) {
return Clazz.new_($I$(1,1).c$$I,[0]);
} else {
var var1=Clazz.new_([var0.size$()],$I$(1,1).c$$I);
for (var var2=0; var2 < var0.size$(); var2++) {
var1.addElement$O(var0.elementAt$I(var2));
}
var var8=Clazz.new_($I$(1,1));
var var3=Clazz.new_([System.currentTimeMillis$()],$I$(11,1).c$$J);
var var4=var1.size$();
for (var var5=0; var5 < var0.size$(); var5++) {
var var6=Math.abs(var3.nextInt$() % var4);
var8.addElement$O(var1.elementAt$I(var6));
var1.removeElementAt$I(var6);
--var4;
}
return var8;
}} catch (var7) {
return Clazz.new_($I$(1,1).c$$I,[0]);
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.c="Test";
C$.d="&c=" + C$.c;
C$.h=null;
C$.u="http://";
C$.o="/ServletMPG?t=csp" + C$.d + "&p=LG" + "&d=" ;
C$.x=0;
C$.r=null;
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
