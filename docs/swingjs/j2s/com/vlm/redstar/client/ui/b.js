(function(){var P$=Clazz.newPackage("com.vlm.redstar.client.ui"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "b");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['b'],'O',['a','byte[][]']]]

Clazz.newMeth(C$, 'c$$S',  function (var1) {
;C$.$init$.apply(this);
this.b=var1;
p$1.a.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'a',  function () {
p$1.b.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'b',  function () {
if (this.b != null ) {
var var1;
if ((var1=this.getClass$().getResourceAsStream$S(this.b)) != null ) {
var var4=Clazz.array(Byte.TYPE, [800]);
var var7=0;
var var8=0;
var var9=0;
var var12=0;
var var13=false;
var var17=true;
try {
var var18;
for (var var10000=var1; (var18=var10000.read$()) != -1; var10000=var1) {
if (var18 == 10) {
++var12;
}}
var1.close$();
System.gc$();
var1=this.getClass$().getResourceAsStream$S(this.b);
this.a=Clazz.array(Byte.TYPE, [var12, null]);
while (var17){
var1.read$BA$I$I(var4, var8, var4.length - var8);
var8=-1;
for (var var19=0; var19 < var4.length; var19++) {
var var2=var4[var19];
if (var19 == 0 && var2 == 10 ) {
var8=0;
} else if (var2 != 13) {
if (var2 == -1) {
var17=false;
break;
}} else {
var7=var19 - var8 - 1 ;
var8=var19;
var var6=Clazz.array(Byte.TYPE, [var7]);
var var20=0;
for (var var21=0; var21 < var7; var21++) {
var var14;
 label96 : {
var14=var4[var8 - var7 + var21];
var var31;
if (!var13) {
if (var14 != 92) {
break label96;
}var31=true;
} else {
if (var14 == 110) {
var14=($b$[0] = 10, $b$[0]);
}++var20;
var31=false;
}var13=var31;
}if (!var13) {
var6[var21 - var20]=var14;
}}
var var5;
if (var20 > 0) {
var5=Clazz.array(Byte.TYPE, [var7 - var20]);
for (var var30=0; var30 < var5.length; var30++) {
var5[var30]=var6[var30];
}
} else {
var5=var6;
}this.a[var9]=Clazz.array(Byte.TYPE, [var7]);
this.a[var9]=var5;
if (++var9 > var12 - 1) {
var17=false;
break;
}++var19;
++var8;
}}
if (var17) {
if ((var7=var4.length - 1 - var8 ) > 0) {
var8=var4.length - 1;
var var24=Clazz.array(Byte.TYPE, [var7]);
for (var var28=0; var28 < var7; var28++) {
var24[var28]=var4[var8 - var7 + 1 + var28];
}
var4=Clazz.array(Byte.TYPE, [800]);
for (var var29=0; var29 < var7; var29++) {
var4[var29]=var24[var29];
}
var8=var7;
} else {
var8=0;
var4=Clazz.array(Byte.TYPE, [800]);
}}}
} catch (var22) {
}
System.gc$();
}}}, p$1);

Clazz.newMeth(C$, 'a$I',  function (var1) {
return  String.instantialize(this.a[var1]);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
