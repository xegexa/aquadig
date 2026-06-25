(function(){var P$=Clazz.newPackage("com.vlm.redstar.client.ui"),I$=[[0,'javax.microedition.lcdui.Image']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "a");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['m','a','A','B','f'],'B',['g','j','l','s','t','u','z','M'],'I',['h','i','k','n','r','v','w','x','y','C','I','b','c','d','N'],'J',['q','L','e'],'S',['o','dialogTitle','dialogBody'],'O',['p','java.util.Vector','D','javax.microedition.lcdui.Image','+E','+F','+G','+H','+J','K','com.vlm.redstar.client.ui.c']]]

Clazz.newMeth(C$, 'c$$com_vlm_redstar_client_ui_c$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$I$I$I$B',  function (var1, var2, var3, var4, var5, var6, var7, var8, var9, var10) {
;C$.$init$.apply(this);
C$.E=var2;
C$.F=var3;
C$.G=var4;
C$.H=var5;
C$.J=var6;
C$.K=var1;
C$.t=($b$[0] = C$.E.getHeight$(), $b$[0]);
C$.s=($b$[0] = C$.F.getHeight$(), $b$[0]);
C$.u=($b$[0] = C$.G.getWidth$(), $b$[0]);
C$.x=C$.J.getWidth$() >> 1;
C$.y=C$.J.getHeight$();
C$.v=var7;
C$.w=var8;
C$.I=var9;
C$.C=0;
C$.N=0;
C$.h=C$.d$();
C$.M=var10;
}, 1);

Clazz.newMeth(C$, 'd$',  function () {
return (C$.v * 3/4|0) + C$.N;
}, 1);

Clazz.newMeth(C$, 'setScreenDimensions$I$I',  function (width, height) {
C$.v=width;
C$.w=height;
if (C$.a && C$.dialogTitle != null   && C$.dialogBody != null  ) {
C$.B=true;
C$.c$S$S(C$.dialogTitle, C$.dialogBody);
C$.n=(C$.w >> 1) - (C$.i >> 1);
C$.j=($b$[0] = 1, $b$[0]);
C$.B=false;
}}, 1);

Clazz.newMeth(C$, 'c$S$S',  function (var0, var1) {
C$.e$();
C$.dialogTitle=var0;
C$.dialogBody=var1;
C$.o=var0.toUpperCase$();
C$.h=C$.d$();
var var2;
if ((var2=C$.K.a$S(C$.o)) > C$.h - 6) {
C$.h=var2 + 6;
if (C$.h > C$.v) {
C$.h=C$.v;
}}C$.r=C$.h - 2 * (C$.u + C$.z);
C$.p=C$.K.a$S$I(var1, C$.r);
C$.g$();
C$.i=C$.t + C$.z + C$.K.a$java_util_Vector(C$.p) + C$.z + C$.s ;
C$.D=C$.f$();
C$.k=(C$.w/2|0) - (C$.i/2|0);
C$.n=0 - C$.i - 1 ;
C$.j=($b$[0] = 0, $b$[0]);
C$.g$();
C$.a=true;
C$.A=false;
}, 1);

Clazz.newMeth(C$, 'a$S$S',  function (var0, var1) {
C$.c$S$S(var0, var1);
C$.g=($b$[0] = 0, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'a$S$S$B$Z',  function (var0, var1, var2, var3) {
if (var2 != 0 && var2 != 3 ) {
C$.c$S$S(var0, var1);
C$.g=var2;
C$.m=var3;
}}, 1);

Clazz.newMeth(C$, 'a$',  function () {
return C$.a;
}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics',  function (var0) {
if (var0 != null ) {
var var1=var0.getClipX$();
var var2=var0.getClipY$();
var var3=var0.getClipWidth$();
var var4=var0.getClipHeight$();
try {
switch (C$.j) {
case 0:
C$.n=C$.n + C$.l;
if (C$.n > C$.k) {
C$.n=C$.k;
C$.j=($b$[0] = 1, $b$[0]);
}case 1:
default:
break;
case 2:
C$.n=C$.n - C$.l * 2;
if (C$.n < C$.k) {
C$.e$();
return;
}}
var var7=C$.n;
var var6=(C$.v >> 1) - (C$.h >> 1);
C$.a$javax_microedition_lcdui_Graphics$javax_microedition_lcdui_Image$I$I$I(var0, C$.E, var6, var7, C$.h);
var7=C$.n + C$.i - C$.s;
C$.a$javax_microedition_lcdui_Graphics$javax_microedition_lcdui_Image$I$I$I(var0, C$.F, var6, var7, C$.h);
var0.setClip$I$I$I$I(0, 0, C$.v, C$.w);
var7=C$.n + C$.t;
var6=C$.v >> 1;
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.D, var6, var7, 17);
var7=C$.n + (C$.t >> 1) - (C$.K.g >> 1) + C$.C;
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var0, C$.o, var6, var7);
C$.h$();
var0.setClip$I$I$I$I(0, 0, C$.v, C$.w);
switch (C$.g) {
case 0:
var7=C$.n + C$.i - (C$.s >> 1) - (C$.K.g >> 1);
var6=C$.v >> 1;
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var0, C$.b$Z(false), var6, var7);
break;
case 1:
case 2:
var7=C$.n + C$.i - (C$.s >> 1) - (C$.K.g >> 1);
var6=(C$.v >> 1) - (C$.h >> 1) + C$.u + C$.z;
var var8=C$.b$Z(true);
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I$I(var0, var8, var6, var7, 4);
if (C$.m && C$.f ) {
var6+=C$.K.a$S(var8) + C$.z;
var var5;
if ((var5=var7=C$.n + C$.i - (C$.s >> 1) - (C$.y >> 1)) < 0) {
var5=0;
}var0.setClip$I$I$I$I(var6, var5, C$.x, C$.y);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.J, var6, var7, 20);
}var7=C$.n + C$.i - (C$.s >> 1) - (C$.K.g >> 1);
var6=(C$.v >> 1) + (C$.h >> 1) - C$.u - C$.z;
var8=C$.b$Z(false);
var0.setClip$I$I$I$I(0, 0, C$.v, C$.w);
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I$I(var0, var8, var6, var7, 8);
if (!C$.m && C$.f ) {
var6-=C$.K.a$S(var8) + C$.z + C$.x ;
var var10;
if ((var10=var7=C$.n + C$.i - (C$.s >> 1) - (C$.y >> 1)) < 0) {
var10=0;
}var0.setClip$I$I$I$I(var6, var10, C$.x, C$.y);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.J, var6 - C$.x, var7, 20);
}}
if (Long.$gt(System.currentTimeMillis$(),C$.q ) && !C$.A  && C$.g == 3 ) {
C$.b$();
}} catch (var9) {
}
var0.setClip$I$I$I$I(var1, var2, var3, var4);
}}, 1);

Clazz.newMeth(C$, 'b$',  function () {
if (C$.a) {
if (C$.j == 1 || C$.g == 3 ) {
C$.k=0 - C$.i - 1 ;
C$.j=($b$[0] = 2, $b$[0]);
}C$.A=true;
}}, 1);

Clazz.newMeth(C$, 'e$',  function () {
if (!C$.B) {
C$.a=false;
C$.A=true;
C$.o=null;
C$.p=null;
C$.dialogTitle=null;
C$.dialogBody=null;
}}, 1);

Clazz.newMeth(C$, 'a$I',  function (var0) {
if (C$.g == 3) {
return $b$[0] = 2, $b$[0];
} else if (C$.j != 1) {
return $b$[0] = 2, $b$[0];
} else if (var0 == C$.d) {
if (C$.g == 0) {
return $b$[0] = 0, $b$[0];
} else {
return ($b$[0] = (C$.m ? 0 : 1), $b$[0]);
}} else {
var var10000;
if (var0 == C$.b) {
var10000=true;
} else {
if (var0 != C$.c) {
return $b$[0] = 2, $b$[0];
}var10000=false;
}C$.a$Z(var10000);
return $b$[0] = 2, $b$[0];
}}, 1);

Clazz.newMeth(C$, 'a$Z',  function (var0) {
C$.m=var0;
C$.g$();
}, 1);

Clazz.newMeth(C$, 'f$',  function () {
var var0;
var var1;
(var1=(var0=$I$(1,"createImage$I$I",[C$.h, C$.i - (C$.t + C$.s)])).getGraphics$()).setColor$I(C$.I);
var1.fillRect$I$I$I$I(0, 0, var0.getWidth$(), var0.getHeight$());
if (C$.p != null ) {
C$.K.a$javax_microedition_lcdui_Graphics$java_util_Vector$I$I$I(var1, C$.p, var0.getWidth$() >> 1, C$.z, 1);
}var var2=0;
var var10000=0;
while (true){
var var3=var10000;
if (var10000 >= var0.getHeight$()) {
return var0;
}var1.setClip$I$I$I$I(0, var3, var0.getWidth$(), C$.G.getHeight$());
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.G, 0, var3, 20);
var2=var0.getWidth$();
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.H, var2, var3, 24);
var10000=var3 + C$.G.getHeight$();
}
}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$javax_microedition_lcdui_Image$I$I$I',  function (var0, var1, var2, var3, var4) {
var var8=(var1.getWidth$()/3|0);
var var7=var1.getHeight$();
var var6=var3;
var var9=var3;
if (var3 < 0) {
var9=0;
}var0.setClip$I$I$I$I(var2, var9, var8, var7);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(var1, var2, var3, 20);
var var5;
var var10000=var5=var2 + var8;
while (true){
var var10=var10000;
if (var10000 >= var2 + var4 - var8) {
var5=var2 + var4;
var0.setClip$I$I$I$I(var5 - var8, var9, var8, var7);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(var1, var5, var6, 24);
return;
}var0.setClip$I$I$I$I(var10, var9, var8, var7);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(var1, var10 - var8, var6, 20);
var10000=var10 + var8;
}
}, 1);

Clazz.newMeth(C$, 'g$',  function () {
C$.e=System.currentTimeMillis$();
C$.f=true;
}, 1);

Clazz.newMeth(C$, 'h$',  function () {
if (Long.$gt(Long.$sub(System.currentTimeMillis$(),C$.e),C$.L )) {
C$.f=!C$.f;
C$.e=System.currentTimeMillis$();
}}, 1);

Clazz.newMeth(C$, 'a$B',  function (var0) {
if (var0 > 1 && var0 < 30 ) {
C$.l=var0;
}}, 1);

Clazz.newMeth(C$, 'b$Z',  function (var0) {
switch (C$.g) {
case 0:
switch (C$.M) {
case 0:
return "OK";
case 1:
return "OK";
case 2:
return "OK";
case 3:
return "OK";
case 4:
return "ACEP.";
default:
return "";
}
case 1:
if (var0) {
switch (C$.M) {
case 0:
return "OK";
case 1:
return "OK";
case 2:
return "OK";
case 3:
return "OK";
case 4:
return "ACEP.";
}
} else {
switch (C$.M) {
case 0:
return "CANCEL";
case 1:
return "ELIMINA";
case 2:
return "ANNULER";
case 3:
return "ABBRUCH";
case 4:
return "OK";
}
}case 2:
if (var0) {
switch (C$.M) {
case 0:
return "YES";
case 1:
return "SI";
case 2:
return "OUI";
case 3:
return "YA";
case 4:
return "SI";
}
} else {
switch (C$.M) {
case 0:
return "NO";
case 1:
return "NO";
case 2:
return "NON";
case 3:
return "NEIN";
case 4:
return "NO";
}
}}
return "";
}, 1);

Clazz.newMeth(C$, 'c$$',  function () {
C$.e$();
C$.a=false;
C$.D=null;
C$.E=null;
C$.F=null;
C$.G=null;
C$.H=null;
C$.J=null;
C$.K=null;
System.gc$();
}, 1);

Clazz.newMeth(C$, 'b$S$S',  function (var0, var1) {
if (C$.a$()) {
C$.g=($b$[0] = 0, $b$[0]);
C$.B=true;
C$.c$S$S(var0, var1);
C$.n=(C$.w >> 1) - (C$.i >> 1);
C$.j=($b$[0] = 1, $b$[0]);
C$.B=false;
}}, 1);

Clazz.newMeth(C$, 'a$S$S$Z',  function (var0, var1, var2) {
if (C$.a$()) {
C$.g=($b$[0] = (var2 ? 1 : 2), $b$[0]);
C$.B=true;
C$.c$S$S(var0, var1);
C$.n=(C$.w >> 1) - (C$.i >> 1);
C$.j=($b$[0] = 1, $b$[0]);
C$.B=false;
}}, 1);

Clazz.newMeth(C$, 'a$S$S$I',  function (var0, var1, var2) {
if (C$.a$()) {
C$.g=($b$[0] = 3, $b$[0]);
C$.q=var2 != 0 ? Long.$add(System.currentTimeMillis$(),1000 * var2) : [16777215,549755813887,1];
C$.B=true;
C$.c$S$S(var0, var1);
C$.n=(C$.w >> 1) - (C$.i >> 1);
C$.j=($b$[0] = 1, $b$[0]);
C$.B=false;
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.l=($b$[0] = 5, $b$[0]);
C$.a=false;
C$.z=($b$[0] = 3, $b$[0]);
C$.A=false;
C$.B=false;
C$.b=0;
C$.c=1;
C$.d=2;
C$.L=400;
C$.f=false;
C$.M=($b$[0] = 0, $b$[0]);
C$.N=0;
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
