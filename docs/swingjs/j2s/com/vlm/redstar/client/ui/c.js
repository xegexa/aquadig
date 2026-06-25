(function(){var P$=Clazz.newPackage("com.vlm.redstar.client.ui"),p$1={},I$=[[0,'StringBuffer','java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "c");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.h=0;
this.m=0;
this.n=0;
this.o=0;
this.p=0;
this.K=false;
},1);

C$.$fields$=[['Z',['K'],'I',['d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'],'S',['c'],'O',['+a','b','short[]']]
,['Z',['x','D','C'],'B',['A'],'I',['v','w','y','E','F','G','H','z'],'J',['J','B'],'O',['u','java.util.Vector','I','javax.microedition.lcdui.Image']]]

Clazz.newMeth(C$, 'setScreenDimensions$I$I',  function (width, height) {
this.i=width;
this.j=height;
this.l=this.j;
this.o=width;
this.p=height;
});

Clazz.newMeth(C$, 'c$$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$S$HA$I$I$I$I',  function (var1, var2, var3, var4, var5, var6, var7, var8) {
;C$.$init$.apply(this);
this.e=var5;
this.f=var6;
this.c=var3;
this.a=var1;
this.g=this.a.getHeight$();
this.d=this.a.getWidth$();
this.b=var4;
this.i=var7;
this.j=var8;
C$.I=var2;
C$.B=System.currentTimeMillis$();
C$.C=true;
this.k=0;
this.l=this.j;
var2.getWidth$();
C$.A=($b$[0] = (var2.getHeight$() >> 1), $b$[0]);
if (this.b.length != var3.length$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The length of the 'charOffset' array (" + var4.length + ") does not match the length of the 'charOrder' String (" + var3.length$() + ")" ]);
} else {
p$1.d.apply(this, []);
this.o=var7;
this.p=var8;
}}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$C$I$I',  function (var1, var2, var3, var4) {
p$1.b$javax_microedition_lcdui_Graphics.apply(this, [var1]);
var var6=0;
var var7=0;
if ((var7=this.c.indexOf$I(var2)) > -1) {
if (var7 != this.b.length - 1) {
var6=this.b[var7 + 1] - this.b[var7];
} else {
var6=this.d - this.b[var7];
}var1.setClip$I$I$I$I(var3, var4, var6, this.g);
var1.clipRect$I$I$I$I(this.m, this.n, this.o, this.p);
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.a, var3 - this.b[var7], var4, 20);
var1.setClip$I$I$I$I(0, 0, this.i, this.j);
p$1.c$javax_microedition_lcdui_Graphics.apply(this, [var1]);
return var6 + this.e;
} else if (var2 == " ") {
p$1.c$javax_microedition_lcdui_Graphics.apply(this, [var1]);
return this.f + this.e;
} else if (var2 != "\n" && var2 != "\r" ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The character '" + var2 + "' (" + var2 + ") is not supported by this font" ]);
} else {
p$1.c$javax_microedition_lcdui_Graphics.apply(this, [var1]);
return 0;
}});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$S$I$I$I',  function (var1, var2, var3, var4, var5) {
if ("" !== var2  && p$1.a$I$I.apply(this, [var3, var4]) ) {
var var7;
var var8;
var var11;
 label45 : {
p$1.b$javax_microedition_lcdui_Graphics.apply(this, [var1]);
var7=var2.length$();
var8=var3;
var var9=false;
var var10=false;
var11=this.a$S(var2);
var var10000;
var var10001;
if (var5 == 8) {
var10000=var3;
var10001=var11;
} else {
if (var5 != 1) {
break label45;
}var10000=var3;
var10001=var11 >> 1;
}var8=var10000 - var10001;
}for (var var12=0; var12 < var7; var12++) {
var var6=var2.charAt$I(var12);
var var15;
var var16;
var var17;
if ((var15=this.c.indexOf$I(var6)) > -1) {
var var14=(var15 != this.b.length - 1 ? this.b[var15 + 1] : this.d) - this.b[var15];
var1.setClip$I$I$I$I(var8, var4, var14, this.g);
var1.clipRect$I$I$I$I(this.m, this.n, this.o, this.p);
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.a, var8 - this.b[var15], var4, 20);
var var13;
var16=var13=var8 + var14;
var17=this.e;
} else {
if (var6 == "\n" || var6 == "\r" ) {
continue;
}var16=var8;
var17=this.f;
}var8=var16 + var17;
}
p$1.c$javax_microedition_lcdui_Graphics.apply(this, [var1]);
return var11;
} else {
return 0;
}});

Clazz.newMeth(C$, 'a$S',  function (var1) {
if ("" === var1 ) {
return 0;
} else {
var var2=-this.e;
var var3=0;
var var4=var1.length$();
for (var var5=0; var5 < var4; var5++) {
var var7;
var var8;
if ((var3=this.c.indexOf$I(var1.charAt$I(var5))) > -1) {
if (var3 != this.b.length - 1) {
var7=var2;
var8=this.b[var3 + 1];
} else {
var7=var2;
var8=this.d;
}var7+=var8 - this.b[var3];
var8=this.e;
} else {
var7=var2;
var8=this.f;
}var2=var7 + var8;
}
return var2;
}});

Clazz.newMeth(C$, 'a$C',  function (var1) {
if (var1 == " ") {
return this.f + this.e;
} else {
var var2=0;
var var3=0;
if ((var2=this.c.indexOf$I(var1)) > -1) {
var var10000;
var var10001;
if (var2 != this.b.length - 1) {
var10000=($b$[0] = 0, $b$[0]);
var10001=this.b[var2 + 1];
} else {
var10000=($b$[0] = 0, $b$[0]);
var10001=this.d;
}var3=var10000 + (var10001 - this.b[var2]) + this.e ;
}return var3;
}});

Clazz.newMeth(C$, 'd',  function () {
for (var var2=0; var2 < this.c.length$(); var2++) {
var var1;
if ((var1=this.a$C(this.c.charAt$I(var2))) > this.h) {
this.h=var1;
}}
}, p$1);

Clazz.newMeth(C$, 'a$S$I',  function (var1, var2) {
var var3=Clazz.new_($I$(1,1).c$$I,[128]);
var var5=0;
var var6=var1.length$();
var var7=Clazz.new_($I$(2,1));
var var8=0;
var var9=0;
do {
var var4;
if ((var4=var1.charAt$I(var5)) != "\r") {
if (var4 != "\n") {
var3.append$C(var4);
if (var4 == " ") {
var8=var5;
}if (this.a$S(var3.toString()) > var2) {
if (var8 != 0 && var8 == var5 ) {
var7.addElement$O(var3.toString());
var3.delete$I$I(0, 128);
var8=0;
var9=var5 + 1;
} else if (var8 != 0 && var8 > var9 ) {
var7.addElement$O(var3.toString().substring$I$I(0, var8 - var9));
var3.delete$I$I(0, 128);
var5=var8;
var9=var8 + 1;
var8=0;
} else {
var var10=var3.toString();
var7.addElement$O(var10.substring$I$I(0, var10.length$() - 1));
var3.delete$I$I(0, 128);
var8=0;
var9=var5--;
}if (var1.charAt$I(var9) == "\n" || var1.charAt$I(var9) == "\r" ) {
++var5;
++var9;
}}} else {
var7.addElement$O(var3.toString());
var3.delete$I$I(0, 128);
var8=0;
var9=var5 + 1;
}}} while (++var5 < var6);
if (var3.length$() > 0) {
var7.addElement$O(var3.toString());
}return var7;
});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$java_util_Vector$I$I$I',  function (var1, var2, var3, var4, var5) {
if (!var2.isEmpty$()) {
p$1.b$javax_microedition_lcdui_Graphics.apply(this, [var1]);
var var6=var2.size$();
for (var var7=0; var7 < var6; var7++) {
if (var5 == 1) {
this.a$javax_microedition_lcdui_Graphics$S$I$I(var1, var2.elementAt$I(var7), var3, var4 + var7 * this.g);
} else {
this.a$javax_microedition_lcdui_Graphics$S$I$I$I(var1, var2.elementAt$I(var7), var3, var4 + var7 * this.g, var5);
}}
p$1.c$javax_microedition_lcdui_Graphics.apply(this, [var1]);
}});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$S$I$I',  function (var1, var2, var3, var4) {
if (var2 != null  && var2 !== ""  ) {
p$1.b$javax_microedition_lcdui_Graphics.apply(this, [var1]);
var var5=this.a$S(var2);
this.a$javax_microedition_lcdui_Graphics$S$I$I$I(var1, var2, var3 - (var5 >> 1), var4, 4);
p$1.c$javax_microedition_lcdui_Graphics.apply(this, [var1]);
}});

Clazz.newMeth(C$, 'a$java_util_Vector',  function (var1) {
return var1 != null  && var1.size$() != 0  ? var1.size$() * this.g : 0;
});

Clazz.newMeth(C$, 'e$',  function () {
C$.B=System.currentTimeMillis$();
C$.C=true;
}, 1);

Clazz.newMeth(C$, 'f$',  function () {
if (Long.$gt(Long.$sub(System.currentTimeMillis$(),C$.B),C$.J )) {
C$.C=!C$.C;
C$.B=System.currentTimeMillis$();
}}, 1);

Clazz.newMeth(C$, 'a$I$I',  function (var1, var2) {
if (var1 > this.i) {
return false;
} else {
return var2 + this.g < this.k ? false : var2 <= this.l;
}}, p$1);

Clazz.newMeth(C$, 'a$S$I$I$I$I$Z',  function (var1, var2, var3, var4, var5, var6) {
if (var1 == null  || var1 === ""  ) {
var1="YOU PASSED A NULL STRING FOR YOUR TEXT REGION!";
}C$.u=this.a$S$I(var1, var4);
C$.e$();
var var7=this.a$java_util_Vector(C$.u) + 4;
C$.D=var6;
C$.G=var5;
C$.H=var4;
if (var7 > var5) {
C$.x=true;
var5-=2 * C$.A;
var var10000=0;
while (true){
C$.y=var10000;
if (C$.y >= C$.u.size$()) {
break;
}if (C$.y * this.g >= var5) {
--C$.y;
break;
}var10000=C$.y + 1;
}
C$.v=0;
C$.w=C$.v + C$.y;
var var8=4 + 2 * C$.A + C$.y * this.g;
var var10;
C$.z=(((var10=var5 + 2 * C$.A) - var8)/2|0);
if (C$.z < 0) {
C$.z=0;
}} else {
C$.x=false;
}C$.E=var2;
C$.F=var3;
});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics',  function (var1) {
var var2=C$.F;
if (!C$.x) {
if (C$.u != null ) {
p$1.b$javax_microedition_lcdui_Graphics.apply(this, [var1]);
this.a$javax_microedition_lcdui_Graphics$java_util_Vector$I$I$I(var1, C$.u, C$.D ? C$.E + (C$.H >> 1) : C$.E, var2, C$.D ? 1 : 4);
}} else {
p$1.b$javax_microedition_lcdui_Graphics.apply(this, [var1]);
C$.f$();
var2+=C$.z;
if (C$.v != 0 && C$.C ) {
var1.setClip$I$I$I$I(0, var2, this.i, C$.A);
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.I, (this.i/2|0), var2, 17);
}if (C$.w != C$.u.size$() && C$.C ) {
var2=C$.F + C$.G - 2;
var1.setClip$I$I$I$I(0, var2 - C$.A, this.i, C$.A);
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.I, (this.i/2|0), var2, 33);
}var1.setClip$I$I$I$I(this.q, this.r, this.s, this.t);
var var3=0;
for (var var4=C$.v; var4 < C$.w; var4++) {
var var5=C$.u.elementAt$I(var4);
var2=C$.F + C$.z + var3 * this.g  + C$.A;
if (C$.D) {
this.a$javax_microedition_lcdui_Graphics$S$I$I(var1, var5, C$.E + (C$.H >> 1), var2);
} else {
this.a$javax_microedition_lcdui_Graphics$S$I$I$I(var1, var5, C$.E, var2, 4);
}++var3;
}
var1.setClip$I$I$I$I(0, 0, this.i, this.j);
}});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$I',  function (var1, var2) {
var var3=C$.F;
C$.F=var2;
this.a$javax_microedition_lcdui_Graphics(var1);
C$.F=var3;
});

Clazz.newMeth(C$, 'a$',  function () {
if (C$.u == null  || C$.u.size$() == 0 ) {
return 0;
} else {
return C$.x ? C$.y * this.g + C$.A : this.a$java_util_Vector(C$.u);
}});

Clazz.newMeth(C$, 'b$',  function () {
return C$.u != null  && C$.x ;
}, 1);

Clazz.newMeth(C$, 'a$Z',  function (var0) {
if (C$.u == null  || !C$.x ) {
return false;
} else if (var0) {
if (C$.v - 1 >= 0) {
--C$.v;
--C$.w;
}return true;
} else if (!var0) {
if (C$.w + 1 <= C$.u.size$()) {
++C$.v;
++C$.w;
}return true;
} else {
return false;
}}, 1);

Clazz.newMeth(C$, 'c$$',  function () {
C$.u=null;
C$.G=0;
C$.H=0;
C$.z=0;
C$.E=0;
C$.F=0;
C$.e$();
});

Clazz.newMeth(C$, 'b$javax_microedition_lcdui_Graphics',  function (var1) {
if (!this.K) {
this.q=var1.getClipX$();
this.r=var1.getClipY$();
this.s=var1.getClipWidth$();
this.t=var1.getClipHeight$();
this.m=this.q;
this.n=this.r;
this.o=this.s;
this.p=this.t;
this.K=true;
}}, p$1);

Clazz.newMeth(C$, 'c$javax_microedition_lcdui_Graphics',  function (var1) {
var1.setClip$I$I$I$I(this.q, this.r, this.s, this.t);
this.K=false;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.x=false;
C$.J=400;
C$.C=false;
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
