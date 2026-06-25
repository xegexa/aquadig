(function(){var P$=Clazz.newPackage("aquadig"),I$=[[0,'java.util.Vector','aquadig.g','aquadig.d','aquadig.Mid']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "e");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.Y=false;
this.Z=false;
this.aa=false;
},1);

C$.$fields$=[['Z',['V','Y','Z','aa'],'I',['Q','R','S','T','U','W','X']]
,['I',['b'],'O',['a','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$I$I',  function (var1, var2) {
;C$.$init$.apply(this);
this.Q=var1;
this.R=var2;
this.V=true;
this.U=6;
C$.a.addElement$O(this);
++C$.b;
}, 1);

Clazz.newMeth(C$, 'o$',  function () {
if (C$.a != null ) {
C$.a.removeAllElements$();
}C$.b=0;
}, 1);

Clazz.newMeth(C$, 'a$aquadig_e',  function (var0) {
var0.V=false;
C$.a.removeElement$O(var0);
--C$.b;
}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics',  function (var1) {
var var2=this.Q + $I$(2).l;
var var3=this.R + $I$(2).m;
var1.setClip$I$I$I$I(0, 0, $I$(3).bw, $I$(3).bh);
var1.setColor$I$I$I(0, 0, 255);
var1.fillArc$I$I$I$I$I$I(var2 - this.U, var3 - this.U, this.U * 2, this.U * 2, 0, 360);
});

Clazz.newMeth(C$, 'a$',  function () {
});

Clazz.newMeth(C$, 'p$',  function () {
for (var var1=0; var1 < C$.b; var1++) {
var var0=C$.a.elementAt$I(var1);
try {
var0.a$();
} catch (var3) {
C$.a$aquadig_e(var0);
}
}
}, 1);

Clazz.newMeth(C$, 'b$javax_microedition_lcdui_Graphics',  function (var0) {
for (var var2=0; var2 < C$.b; var2++) {
var var1=C$.a.elementAt$I(var2);
try {
var1.a$javax_microedition_lcdui_Graphics(var0);
} catch (var4) {
C$.a$aquadig_e(var1);
}
}
}, 1);

Clazz.newMeth(C$, 'c$$',  function () {
this.S=(this.Q/32|0);
this.T=(this.R/32|0);
});

Clazz.newMeth(C$, 'q$',  function () {
var var1;
if ((var1=this.T - 1) < 0) {
return false;
} else {
for (var var2=this.S - 1; var2 < this.S + 2; var2++) {
if (var2 < -1) {
return false;
}if (!$I$(2).d$I$I(var2, var1) && $I$(4).a$I$I$I$I$I$I$I$I(this.Q - this.U, this.R - this.U, this.U * 2, this.U * 2, var2 * 32, var1 * 32, 32, 32) ) {
return true;
}}
return false;
}});

Clazz.newMeth(C$, 'r$',  function () {
var var1=this.T + 1;
var var2=false;
try {
for (var var5=this.S - 1; var5 < this.S + 2; var5++) {
if (var5 < -1) {
return false;
}if (var5 >= 32 && var1 >= 900 ) {
return true;
}if (!$I$(2).d$I$I(var5, var1) && $I$(4).a$I$I$I$I$I$I$I$I(this.Q - this.U, this.R - this.U, this.U * 2, this.U * 2, var5 * 32, var1 * 32, 32, 32) ) {
return true;
}}
} catch (var4) {
}
return false;
});

Clazz.newMeth(C$, 's$',  function () {
var var1=this.S - 1;
for (var var2=Math.max(0, this.T - 1); var2 < this.T + (this.Y ? 1 : 2); var2++) {
if (!$I$(2).d$I$I(var1, var2) && $I$(4).a$I$I$I$I$I$I$I$I(this.Q - this.U, this.R - this.U, this.U * 2, this.U * 2, var1 * 32, var2 * 32, 32, 32) ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 't$',  function () {
var var1=this.S + 1;
var var2=false;
try {
for (var var5=Math.max(0, this.T - 1); var5 < this.T + (this.Y ? 1 : 2); var5++) {
if (var1 >= 32 && var5 >= 900 ) {
return true;
}if (!$I$(2).d$I$I(var1, var5) && $I$(4).a$I$I$I$I$I$I$I$I(this.Q - this.U, this.R - this.U, this.U * 2, this.U * 2, var1 * 32, var5 * 32, 32, 32) ) {
return true;
}}
} catch (var4) {
}
return false;
});

Clazz.newMeth(C$, 'c$I',  function (var0) {
return var0 >> 16;
}, 1);

Clazz.newMeth(C$, 'd$I',  function (var0) {
return var0 << 16;
}, 1);

Clazz.newMeth(C$, 'a$I$I',  function (var0, var1) {
return Long.$ival((Long.$sr(Long.$mul(var0,var1),16)));
}, 1);

Clazz.newMeth(C$, 'b$I$I',  function (var0, var1) {
return var1 == 0 ? 2147483647 : Long.$ival((Long.$sr(Long.$div((Long.$sl(var0,32)),var1),16)));
}, 1);

Clazz.newMeth(C$, 'e$I',  function (var0) {
if ((var0=var0 % 411774) < 0) {
var0+=411774;
}var var1=($b$[0] = 1, $b$[0]);
if (var0 > 102943 && var0 <= 205887 ) {
var0=205887 - var0;
} else {
 label37 : {
var var10000;
var var10001;
if (var0 > 205887 && var0 <= 308830 ) {
var10000=var0;
var10001=205887;
} else {
if (var0 <= 308830) {
break label37;
}var10000=411774;
var10001=var0;
}var0=var10000 - var10001;
var1=($b$[0] = -1, $b$[0]);
}}var var2=C$.a$I$I(var0, var0);
var var3=0;
var3=C$.a$I$I(498, var2);
var3-=10882;
var3=C$.a$I$I(C$.a$I$I(var3, var2) + 65536, var0);
return var1 * var3;
}, 1);

Clazz.newMeth(C$, 'f$I',  function (var0) {
if ((var0=var0 % 411774) < 0) {
var0+=411774;
}var var1=($b$[0] = 1, $b$[0]);
if (var0 > 102943 && var0 <= 205887 ) {
var0=205887 - var0;
var1=($b$[0] = -1, $b$[0]);
} else if (var0 > 102943 && var0 <= 308830 ) {
var0-=205887;
var1=($b$[0] = -1, $b$[0]);
} else if (var0 > 308830) {
var0=411774 - var0;
}var var2=C$.a$I$I(var0, var0);
var var3=0;
var3=C$.a$I$I(2328, var2);
var3-=32551;
return (C$.a$I$I(var3, var2) + 65536) * var1;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.a=Clazz.new_($I$(1,1));
C$.b=0;
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
