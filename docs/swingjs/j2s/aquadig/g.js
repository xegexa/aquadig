(function(){var P$=Clazz.newPackage("aquadig"),I$=[[0,'aquadig.Mid','java.util.Hashtable','javax.microedition.lcdui.GameDimensions','aquadig.a','aquadig.d','com.vlm.redstar.client.ui.a','aquadig.c','aquadig.h','javax.microedition.lcdui.Image','javax.microedition.lcdui.Graphics','java.util.Vector']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "g");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['f','C','p','q','A'],'I',['b','c_','dConst','e','D','l','m','n','o','I','y','z','B'],'J',['h_','E','F'],'O',['a_','byte[]','g','short[][]','i','byte[]','+j','k','java.util.Hashtable','G','javax.microedition.lcdui.Image[]','H','javax.microedition.lcdui.Graphics[]','r','aquadig.e','s','javax.microedition.lcdui.Image','+t','+u','+v','+w','+x']]]

Clazz.newMeth(C$, 'c$$Z',  function (var1) {
;C$.$init$.apply(this);
C$.l=0;
C$.m=0;
C$.n=0;
C$.o=0;
C$.b=105;
C$.a_=Clazz.array(Byte.TYPE, [8]);
for (var var2=0; var2 < C$.a_.length; var2++) {
C$.a_[var2]=(0|0);
}
C$.j=Clazz.array(Byte.TYPE, [28800]);
$I$(1).b.h$();
for (var var3=0; var3 < 320; var3++) {
C$.a$I$I$I(var3, 0, 0);
}
$I$(1).b.h$();
if (!var1) {
C$.h_=System.currentTimeMillis$();
C$.b$Z(false);
}for (var var4=0; var4 < 28800; var4++) {
if ($I$(1).a$I(30) == 0 && var4 < 28767 ) {
C$.e$I(var4);
}}
$I$(1).b.h$();
C$.p=true;
C$.c$$();
C$.c_=24 + 15 * C$.a_.length + 40 + C$.w.getWidth$() - 7;
}, 1);

Clazz.newMeth(C$, 'a$',  function () {
C$.b$();
}, 1);

Clazz.newMeth(C$, 'e$I',  function (var0) {
C$.b$I$I$Z(var0, -1, true);
if ($I$(1).a$I(3) > 0 && var0 < 28767 ) {
C$.e$I(var0 + 1);
}}, 1);

Clazz.newMeth(C$, 'a$I$I$Z',  function (var0, var1, var2) {
return var0 >= 0 && var0 < 32  && var1 >= 0  && var1 < 900  ? C$.a$I$Z(var1 * 32 + var0, var2) : false;
}, 1);

Clazz.newMeth(C$, 'a$I$Z',  function (var0, var1) {
if (var0 < 0 || var0 >= 28768 ) {
return false;
} else if (C$.c$I(var0) != 0) {
if (var1) {
var var2;
if ((var2=C$.d$I(var0)) == 11) {
$I$(4).b$I(var0);
} else if ($I$(5).e.H < $I$(5).e.i$()) {
if (var2 > 1) {
var var3=C$.d$I(var0);
++$I$(5).e.B[var3];
++$I$(5).e.H;
if ($I$(5).e.H >= $I$(5).e.i$() && $I$(5).ap ) {
$I$(5).aq=true;
$I$(6,"a$S$S",[$I$(7).af, $I$(7).ag]);
}$I$(5).a$I(var0);
$I$(1).b.c$B(5);
}} else if (C$.d$I(var0) != 0) {
$I$(5,"a$S",[$I$(7).af]);
}} else if (C$.d$I(var0) == 1) {
$I$(1).b.c$B(4);
}C$.a$I$I$I(var0, 0, 0);
C$.p=true;
return true;
} else {
return false;
}}, 1);

Clazz.newMeth(C$, 'a$I$I',  function (var0, var1) {
if (C$.a$I$I$Z(var0, var1, false)) {
var var2=C$.a$I(var0) + C$.l;
var var3=C$.a$I(var1) + C$.m;
$I$(8).c$I$I(var2, var3);
$I$(8).c$I$I(var2, var3);
}}, 1);

Clazz.newMeth(C$, 'a$I',  function (var0) {
return var0 * 32 + 16;
}, 1);

Clazz.newMeth(C$, 'b$javax_microedition_lcdui_Graphics$I$I$I$I',  function (var0, var1, var2, var3, var4) {
var var5=0;
var var6=0;
var var7=0;
var var8=0;
var var9=0;
var var10=0;
var5=var1 - C$.l;
var6=var2 - C$.m;
var7=Math.max((var5/32|0), 0);
var8=Math.max((var6/32|0), 0);
var9=Math.min(((var5 + var3)/32|0), 31);
var10=Math.min(((var6 + var4)/32|0), 899);
for (var var13=var8; var13 <= var10; var13++) {
for (var var14=var7; var14 <= var9; var14++) {
var var11=C$.l + var14 * 32;
var var12=C$.m + var13 * 32;
C$.a$javax_microedition_lcdui_Graphics$I$I$I(var0, var14 + var13 * 32, var11, var12);
}
}
}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics',  function (var0) {
if (!C$.q) {
C$.b$javax_microedition_lcdui_Graphics$I$I$I$I(var0, 0, 0, C$.y, C$.z);
} else if (null != C$.G  && !C$.p  && C$.n == C$.l  && C$.o == C$.m ) {
var0.setClip$I$I$I$I(0, 0, C$.y, C$.z);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.G[C$.I], 0, 0, 20);
} else {
var var1=($b$[0] = ((C$.I + 1) % 2), $b$[0]);
if (null == C$.G ) {
try {
C$.G=Clazz.array($I$(9), [2]);
C$.H=Clazz.array($I$(10), [2]);
C$.G[C$.I]=$I$(9).createImage$I$I(C$.y, C$.z);
C$.H[C$.I]=C$.G[C$.I].getGraphics$();
C$.G[var1]=$I$(9).createImage$I$I(C$.y, C$.z);
C$.H[var1]=C$.G[var1].getGraphics$();
System.gc$();
var var2;
C$.b$javax_microedition_lcdui_Graphics$I$I$I$I(var2=C$.H[C$.I], 0, 0, C$.y, C$.z);
C$.n=C$.l;
C$.o=C$.m;
} catch (var7) {
if (Clazz.exceptionOf(var7,"OutOfMemoryError")){
C$.q=false;
C$.G[0]=null;
C$.G[1]=null;
C$.H[0]=null;
C$.H[1]=null;
System.gc$();
C$.b$javax_microedition_lcdui_Graphics$I$I$I$I(var0, 0, 0, C$.y, C$.z);
return;
} else {
throw var7;
}
}
}var var8;
(var8=C$.H[var1]).translate$I$I(-var8.getTranslateX$(), -var8.getTranslateY$());
var8.setClip$I$I$I$I(0, 0, C$.y, C$.z);
if (C$.p) {
C$.b$javax_microedition_lcdui_Graphics$I$I$I$I(var8, 0, 0, C$.y, C$.z);
C$.p=false;
} else {
var var3=C$.l - C$.n;
var var4=C$.m - C$.o;
var8.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.G[C$.I], var3, var4, 20);
var8.translate$I$I(-var8.getTranslateX$(), -var8.getTranslateY$());
var8.setClip$I$I$I$I(0, 0, C$.y, C$.z);
var var5=0;
var var6=C$.z;
if (0 != var4) {
if (var4 > 0) {
C$.b$javax_microedition_lcdui_Graphics$I$I$I$I(var8, 0, 0, C$.y, var4);
var5=var4;
} else {
C$.b$javax_microedition_lcdui_Graphics$I$I$I$I(var8, 0, C$.z + var4, C$.y, -var4);
var6=C$.z + var4;
}}if (0 != var3) {
var var10000;
var var10001;
var var10002;
var var10003;
if (var3 > 0) {
var10000=var8;
var10001=0;
var10002=var5;
var10003=var3;
} else {
var10000=var8;
var10001=C$.y + var3;
var10002=var5;
var10003=-var3;
}C$.b$javax_microedition_lcdui_Graphics$I$I$I$I(var10000, var10001, var10002, var10003, var6 - var5);
}}var0.setClip$I$I$I$I(0, 0, C$.y, C$.z);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.G[var1], 0, 0, 20);
C$.I=var1;
C$.n=C$.l;
C$.o=C$.m;
}}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$I$I$I',  function (var0, var1, var2, var3) {
try {
var var4=C$.c$I(var1);
var var5=($s$[0] = (C$.d$I(var1) + 7), $s$[0]);
if (var4 != 0) {
if (var4 == 6) {
C$.a$javax_microedition_lcdui_Graphics$I$I$I$I(var0, var1, var2, var3, -1);
}var0.setClip$I$I$I$I(var2, var3, 32, 32);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.s, var2 - C$.i[var4] * 32, var3, 20);
if (var5 >= 8) {
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.s, var2 - C$.i[var5] * 32, var3, 20);
}if (var4 >= 2) {
var var6=($b$[0] = 0, $b$[0]);
var var7;
if ((var7=var1 - 32) >= 0 && (var6=C$.c$I(var7)) > var4 ) {
var0.setClip$I$I$I$I(var2, var3, 32, 3);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.t, var2, var3 - 3 - C$.i[var6] * 6 , 20);
}if ((var7=var1 + 32) < 28800 && (var6=C$.c$I(var7)) > var4 ) {
var0.setClip$I$I$I$I(var2, var3 + 32 - 3, 32, 3);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.t, var2, var3 + 32 - 3 - C$.i[var6] * 6, 20);
}if ((var7=var1 - 1) >= 0 && (var6=C$.c$I(var7)) > var4 ) {
var0.setClip$I$I$I$I(var2, var3, 3, 32);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.u, var2 - 3 - C$.i[var6] * 6 , var3, 20);
}if ((var7=var1 + 1) < 28800 && (var6=C$.c$I(var7)) > var4 ) {
var0.setClip$I$I$I$I(var2 + 32 - 3, var3, 3, 32);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.u, var2 + 32 - 3 - C$.i[var6] * 6, var3, 20);
}return;
}} else {
C$.a$javax_microedition_lcdui_Graphics$I$I$I$I(var0, var1, var2, var3, -1);
}} catch (var8) {
}
}, 1);

Clazz.newMeth(C$, 'b$I',  function (var0) {
var0+=10;
var var1;
var var10000;
if ((var1=255 - var0 * 3) > 255) {
var10000=($s$[0] = 255, $s$[0]);
} else {
if (var1 >= 0) {
return var1 << 8 | var1;
}var10000=($s$[0] = 0, $s$[0]);
}var var3=var10000;
return var3 << 8 | var3;
}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$I$I$I$I',  function (var0, var1, var2, var3, var4) {
if (var1 < 128) {
var0.setClip$I$I$I$I(0, 0, C$.y, C$.z);
var0.setColor$I(11072255);
var0.fillRect$I$I$I$I(var2, var3, 32, 32);
} else {
var var5=var1 % 32;
var var6=(var1/32|0);
var var7=($b$[0] = 0, $b$[0]);
var var8=0;
var var9=0;
var var10=0;
var var11=0;
if (!C$.A) {
var0.setClip$I$I$I$I(0, 0, C$.y, C$.z);
}var0.setColor$I(C$.b$I(var6));
var0.fillRect$I$I$I$I(var2, var3, 32, 32);
if (var4 != 0 && C$.b$I$I(var5, var6 - 1)  && !C$.d$I$I(var5, var6 - 1) ) {
if (!C$.A) {
var0.setClip$I$I$I$I(var2, var3, 32, 3);
} else {
var8=var0.getClipX$();
var9=var0.getClipY$();
var10=var0.getClipWidth$();
var11=var0.getClipHeight$();
var0.clipRect$I$I$I$I(var2, var3, 32, 3);
}var7=C$.c$I(var1 - 32);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.t, var2, var3 - 3 - C$.i[var7] * 6 , 20);
if (C$.A) {
var0.setClip$I$I$I$I(var8, var9, var10, var11);
}}if (var4 != 1 && C$.b$I$I(var5, var6 + 1)  && !C$.d$I$I(var5, var6 + 1) ) {
if (!C$.A) {
var0.setClip$I$I$I$I(var2, var3 + 32 - 3, 32, 3);
} else {
var8=var0.getClipX$();
var9=var0.getClipY$();
var10=var0.getClipWidth$();
var11=var0.getClipHeight$();
var0.clipRect$I$I$I$I(var2, var3 + 32 - 3, 32, 3);
}var7=C$.c$I(var1 + 32);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.t, var2, var3 + 32 - 3 - C$.i[var7] * 6, 20);
if (C$.A) {
var0.setClip$I$I$I$I(var8, var9, var10, var11);
}}if (var4 != 2 && C$.b$I$I(var5 - 1, var6)  && !C$.d$I$I(var5 - 1, var6) ) {
if (!C$.A) {
var0.setClip$I$I$I$I(var2, var3, 3, 32);
} else {
var8=var0.getClipX$();
var9=var0.getClipY$();
var10=var0.getClipWidth$();
var11=var0.getClipHeight$();
var0.clipRect$I$I$I$I(var2, var3, 3, 32);
}var7=C$.c$I(var1 - 1);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.u, var2 - 3 - C$.i[var7] * 6 , var3, 20);
if (C$.A) {
var0.setClip$I$I$I$I(var8, var9, var10, var11);
}}if (var4 != 3 && C$.b$I$I(var5 + 1, var6)  && !C$.d$I$I(var5 + 1, var6) ) {
if (!C$.A) {
var0.setClip$I$I$I$I(var2 + 32 - 3, var3, 3, 32);
} else {
var0.getClipX$();
var0.getClipY$();
var0.getClipWidth$();
var0.getClipHeight$();
var0.clipRect$I$I$I$I(var2 + 32 - 3, var3, 3, 32);
}var7=C$.c$I(var1 + 1);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.u, var2 + 32 - 3 - C$.i[var7] * 6, var3, 20);
}C$.A=false;
}}, 1);

Clazz.newMeth(C$, 'b$',  function () {
C$.n=C$.l;
C$.o=C$.m;
if (C$.C && Long.$gt(Long.$sub(System.currentTimeMillis$(),C$.E),C$.F ) ) {
C$.C=false;
}if (C$.r == null ) {
return true;
} else {
var var1;
var var3;
var var4;
var var5;
 label44 : {
var var0=(C$.y >> 1) - C$.l - 1 ;
var1=(C$.z >> 1) - C$.m - 1 ;
var var2=C$.r.Q;
var3=C$.r.R;
var4=Math.abs(var2 - var0);
var5=Math.abs(var3 - var1);
var var10000;
if (var0 < var2) {
var10000=C$.l - (var4 >> 2);
} else {
if (var0 <= var2) {
break label44;
}var10000=C$.l + (var4 >> 2);
}C$.l=var10000;
} label38 : {
var var8;
if (var1 < var3) {
var8=C$.m - (var5 >> 2);
} else {
if (var1 <= var3) {
break label38;
}var8=C$.m + (var5 >> 2);
}C$.m=var8;
}if (C$.C) {
var var6=$I$(1).rng.nextInt$() % C$.D;
var var7=$I$(1).rng.nextInt$() % C$.D;
C$.l+=var6;
C$.m+=var7;
if ($I$(5).e.I == 0) {
$I$(5).e.W+=(var6/2|0);
$I$(5).e.X+=(var7/2|0);
}}C$.l=($s$[0] = Math.min(0, C$.l), $s$[0]);
C$.l=($s$[0] = Math.max(-(1024 - C$.y), C$.l), $s$[0]);
C$.m=($s$[0] = Math.min(0, C$.m), $s$[0]);
C$.m=($s$[0] = Math.max(-(28800 - C$.z), C$.m), $s$[0]);
return var4 < 8 && var5 < 8 ;
}}, 1);

Clazz.newMeth(C$, 'a$aquadig_e$Z',  function (var0, var1) {
C$.r=var0;
if (var1) {
C$.l=-(C$.r.Q - (C$.y/2|0));
C$.m=-(C$.r.R - (C$.z/2|0));
}}, 1);

Clazz.newMeth(C$, 'a$J$I',  function (var0, var2) {
C$.F=var0;
C$.E=System.currentTimeMillis$();
C$.C=true;
C$.D=var2;
}, 1);

Clazz.newMeth(C$, 'b$I$I',  function (var0, var1) {
return var0 >= 0 && var0 < 32  && var1 >= 0  && var1 < 900 ;
}, 1);

Clazz.newMeth(C$, 'c$I$I',  function (var0, var1) {
if (C$.d$I$I(var0, var1)) {
return false;
} else if (C$.d$I(var1 * 32 + var0) == 1) {
$I$(1,"c$I",[(1000/$I$(1).frameMs|0)]);
return false;
} else {
return var1 < 899;
}}, 1);

Clazz.newMeth(C$, 'd$I$I',  function (var0, var1) {
return var1 * 32 + var0 >= 28799 ? false : C$.c$I(var1 * 32 + var0) == 0;
}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$I$I',  function (var0, var1, var2) {
var0.setClip$I$I$I$I(0, 0, C$.y, C$.z);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.v, var1, var2, 20);
for (var var3=0; var3 < 8; var3++) {
var0.setClip$I$I$I$I(var1 + 24, var2 + 15, C$.y, C$.z);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.v, var1, var2, 20);
var0.setClip$I$I$I$I(0, 0, C$.y, C$.z);
var1+=15;
}
var1-=120;
for (var var6=0; var6 < C$.a_.length; var6++) {
for (var var4=0; var4 < C$.a_[var6]; var4++) {
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.x, var1 + 22, var2 + 10 - var4 * 5, 20);
}
var1+=15;
}
var0.setClip$I$I$I$I(0, 0, C$.y, C$.z);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.w, var1 + 40, var2 + 2, 20);
}, 1);

Clazz.newMeth(C$, 'b$javax_microedition_lcdui_Graphics',  function (var0) {
var var1=C$.m + 128 + 24 ;
var var2=((60 - var1)/4|0);
C$.f=true;
if (var1 < 0) {
C$.f=false;
} else {
 label17 : {
var var10000;
var var10001;
var var10002;
var var10003;
var var10004;
if (var2 < 0) {
var0.setClip$I$I$I$I(0, 0, C$.y, C$.z);
var0.setColor$I(C$.e);
var10000=var0;
var10001=($b$[0] = 0, $b$[0]);
var10002=128 + C$.m + var2 ;
var10003=C$.y;
var10004=-var2;
} else {
if (var2 <= 0) {
break label17;
}var0.setClip$I$I$I$I(0, 0, C$.y, C$.z);
var0.setColor$I(C$.dConst);
var10000=var0;
var10001=($b$[0] = 0, $b$[0]);
var10002=128 + C$.m;
var10003=C$.y;
var10004=var2;
}var10000.fillRect$I$I$I$I(var10001, var10002, var10003, var10004);
}var2=(var2/(3)|0);
C$.a$javax_microedition_lcdui_Graphics$I$I(var0, C$.b + C$.l, 96 + C$.m + var2 );
}}, 1);

Clazz.newMeth(C$, 'c$javax_microedition_lcdui_Graphics',  function (var0) {
if (C$.f) {
var var1=C$.m + 128 + 24 ;
var var2;
if ((var2=((60 - var1)/4|0)) < 0) {
var2=(var2/(3)|0);
var0.setClip$I$I$I$I(0, 0, C$.y, C$.z);
var0.setColor$I(C$.e);
var0.fillRect$I$I$I$I(0, 128 + C$.m + var2 , C$.y, -var2);
}}}, 1);

Clazz.newMeth(C$, 'e$I$I',  function (var0, var1) {
if (-C$.l > var0) {
return false;
} else if (C$.y - C$.l < var0) {
return false;
} else {
return -C$.m > var1 ? false : C$.z - C$.m >= var1;
}}, 1);

Clazz.newMeth(C$, 'a$I$I$I',  function (var0, var1, var2) {
if (var1 == 6) {
C$.b$I$I$Z(var0, -1, false);
} else {
if (var1 == 0) {
var2=0;
}C$.j[var0]=((var2 * 12 + var1)|0);
}}, 1);

Clazz.newMeth(C$, 'b$I$I$Z',  function (var0, var1, var2) {
if (var0 < 0 || var0 < 28800 ) {
var var3=($b$[0] = 6, $b$[0]);
if (var2) {
var3=($b$[0] = 0, $b$[0]);
}C$.j[var0]=((0 + var3)|0);
C$.c$I$I$Z(var0, var1, var2);
if (var2) {
$I$(8,"d$I$I",[C$.a$I(var0 % 32), C$.a$I((var0/32|0))]);
}}}, 1);

Clazz.newMeth(C$, 'c$I$I$Z',  function (var0, var1, var2) {
var var3=var0;
var var4=($b$[0] = 6, $b$[0]);
if (!var2) {
var4=($b$[0] = 0, $b$[0]);
}for (var var5=0; var5 < 4; var5++) {
 label36 : {
var var6;
 label35 : {
var var10001;
switch (var5) {
case 0:
var6=var0;
var10001=($b$[0] = 32, $b$[0]);
break;
case 1:
var6=var0 + 1;
break label35;
case 2:
var6=var0 + 32;
break label35;
case 3:
var6=var0;
var10001=($b$[0] = 1, $b$[0]);
break;
default:
break label36;
}
var6-=var10001;
}var3=var6;
}if (var3 < 28800 && var3 >= 0  && var3 != var1  && C$.c$I(var3) == var4 ) {
C$.b$I$I$Z(var3, var0, var2);
}}
}, 1);

Clazz.newMeth(C$, 'c$I',  function (var0) {
var var1;
if ((var1=C$.j[var0]) < 0) {
var1=($s$[0] = var1+(256), $s$[0]);
}return ($b$[0] = (var1 % 12), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'd$I',  function (var0) {
var var1;
if ((var1=C$.j[var0]) < 0) {
var1=($s$[0] = var1+(256), $s$[0]);
}return ($b$[0] = ((var1/12|0)), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'a$Z',  function (var0) {
var var1=0;
try {
var var2=Clazz.new_($I$(11,1));
var var3=($b$[0] = -1, $b$[0]);
var var4=var0 ? C$.c$I(0) : C$.d$I(0);
var2.addElement$O( new Byte(var4));
++var1;
for (var var5=1; var5 < C$.j.length; var5++) {
if ((var4=var0 ? C$.c$I(var5) : C$.d$I(var5)) != var3) {
++var1;
var3=var4;
}}
var4=var0 ? C$.c$I(0) : C$.d$I(0);
var var15=Clazz.array(Byte.TYPE, [var1]);
var var6=Clazz.array(Short.TYPE, [var1]);
var1=0;
var15[0]=var4;
var var7=($s$[0] = 1, $s$[0]);
for (var var8=1; var8 < C$.j.length; var8++) {
var var10000;
if ((var4=var0 ? C$.c$I(var8) : C$.d$I(var8)) != var3) {
var6[var1]=var7;
var3=var4;
var15[++var1]=var4;
var10000=($s$[0] = 1, $s$[0]);
} else {
var10000=($s$[0] = (var7 + 1), $s$[0]);
}var7=var10000;
}
var6[var1]=var7;
return Clazz.array(java.lang.Object, -1, [var15, var6]);
} catch (var9) {
return null;
}
}, 1);

Clazz.newMeth(C$, 'a$Z$BA$HA',  function (var0, var1, var2) {
var var3=($s$[0] = 0, $s$[0]);
for (var var4=0; var4 < var1.length; var4++) {
var var5=var1[var4];
var var6=var2[var4];
for (var var7=0; var7 < var6; var7++) {
var var8;
var var10000;
if (var0) {
var8=var5;
var10000=C$.d$I(var3 + var7);
} else {
var8=C$.c$I(var3 + var7);
var10000=var5;
}var var9=var10000;
C$.j[var3 + var7]=((var9 * 12 + var8)|0);
}
var3+=var6;
}
}, 1);

Clazz.newMeth(C$, 'b$Z',  function (var0) {
var var1=($b$[0] = 0, $b$[0]);
if (var0) {
var1=($b$[0] = 8, $b$[0]);
$I$(1).rng.setSeed$J(C$.h_);
}C$.k.clear$();
for (var var2=var1; var2 < C$.g.length; var2++) {
for (var var3=0; var3 < C$.g[var2].length; var3++) {
if (!var0 && var2 == 8  && var3 == 0 ) {
C$.h_=System.currentTimeMillis$();
$I$(1).rng.setSeed$J(C$.h_);
}var var4;
if ((var4=C$.g[var2][var3]) != 0) {
var var5;
if ((var5=(var3 * 28800/C$.g[var2].length|0)) < 320) {
var5=320;
}for (var var11=var5; var11 < ((var3 + 1) * 28800/C$.g[var2].length|0); var11++) {
var var7=$I$(1).a$I(var4);
if ((var11+=var7) < 28768) {
if (var2 < 8) {
C$.a$I$I$I(var11, var2, C$.d$I(var11));
} else {
var var8;
var var9=($b$[0] = ((var8=var2 - 7) - 11), $b$[0]);
if (var8 >= 11) {
var8=11;
C$.k.put$O$O( new Short(($s$[0] = var11, $s$[0])),  new Byte(var9));
}C$.a$I$I$I(var11, C$.c$I(var11), var8);
if (var9 == 0 || var9 == 1  || var9 == 2  || var9 == 3  || var9 == 4  || var9 == 5  || var9 == 6  || var9 == 7  || var9 == 8 ) {
var11=28800;
var3=C$.g[var2].length;
}}}}
}}
$I$(1).b.h$();
}
for (var var10=28768; var10 < C$.j.length; var10++) {
C$.a$I$I$I(var10, 7, C$.d$I(var10));
}
}, 1);

Clazz.newMeth(C$, 'f$I$I',  function (var0, var1) {
for (var var2=10; var2 <= var1 + 4; var2++) {
C$.a$I$I$I(var0 + var2 * 32, 0, 0);
var var3=(var2/((900/C$.g[2].length|0))|0);
if (var0 != 0 && C$.c$I(var0 - 1 + var2 * 32) == 6 ) {
C$.a$I$I$I(var0 - 1 + var2 * 32, var3, 0);
}if (var0 < 31 && C$.c$I(var0 + 1 + var2 * 32 ) == 6 ) {
C$.a$I$I$I(var0 + 1 + var2 * 32 , var3, 0);
}}
}, 1);

Clazz.newMeth(C$, 'g$I$I',  function (var0, var1) {
if (var0 != 0 && C$.c$I(var0 - 1 + var1 * 32) == 6 ) {
return true;
} else if (var0 < 31 && C$.c$I(var0 + 1 + var1 * 32 ) == 6 ) {
return true;
} else {
return C$.c$I(var0 + (var1 - 1) * 32) == 6 ? true : var1 < 899 && C$.c$I(var0 + (var1 + 1) * 32) == 6 ;
}}, 1);

Clazz.newMeth(C$, 'c$$',  function () {
var var0=C$.g[5];
for (var var1=0; var1 < var0.length; var1++) {
if (var0[var1] != 0) {
C$.B=(var1 * 900/var0.length|0) - 1;
return;
}}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.b=105;
C$.c_=218;
C$.dConst=$I$(1,"a$I$I",[-2136411393, C$.b$I(0)]);
C$.e=C$.b$I(10);
C$.f=false;
C$.g=Clazz.array(Short.TYPE, -2, [Clazz.array(Short.TYPE, -1, [0]), Clazz.array(Short.TYPE, -1, [0]), Clazz.array(Short.TYPE, -1, [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Clazz.array(Short.TYPE, -1, [0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Clazz.array(Short.TYPE, -1, [0, 0, 0, 0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]), Clazz.array(Short.TYPE, -1, [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1]), Clazz.array(Short.TYPE, -1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 20]), Clazz.array(Short.TYPE, -1, [0]), Clazz.array(Short.TYPE, -1, [100, 100, 80, 70, 60, 50, 40, 35, 30, 25, 24, 22, 20, 18, 14, 10]), Clazz.array(Short.TYPE, -1, [10, 20, 30, 40, 50, 75, 60, 200, 240, 280, 320, 400, 600, 600, 800, 1200]), Clazz.array(Short.TYPE, -1, [60, 70, 80, 100, 100, 150, 200, 300, 400, 500, 600, 700, 1000, 1000, 1000, 1000]), Clazz.array(Short.TYPE, -1, [150, 150, 150, 200, 400, 500, 600, 800, 1200, 400, 400, 600, 800, 1600, 2000, 2000]), Clazz.array(Short.TYPE, -1, [400, 300, 300, 600, 300, 200, 150, 75, 150, 200, 300, 600, 900, 1500, 1500, 1500]), Clazz.array(Short.TYPE, -1, [0, 800, 1200, 900, 600, 300, 200, 150, 75, 75, 200, 200, 300, 200, 450, 750]), Clazz.array(Short.TYPE, -1, [0, 0, 800, 600, 1500, 1500, 1500, 1200, 900, 450, 300, 200, 150, 75, 300, 750]), Clazz.array(Short.TYPE, -1, [0, 0, 0, 750, 750, 350, 750, 1200, 750, 350, 300, 200, 150, 100, 75, 150]), Clazz.array(Short.TYPE, -1, [0, 0, 0, 0, 0, 0, 1200, 1200, 1200, 750, 750, 350, 350, 150, 100, 75]), Clazz.array(Short.TYPE, -1, [0, 0, 0, 0, 0, 0, 0, 1200, 1200, 1200, 1200, 750, 350, 350, 300, 150]), Clazz.array(Short.TYPE, -1, [0, 50, 0, 0, 0, 0, 0, 0]), Clazz.array(Short.TYPE, -1, [0, 0, 0, 500, 50, 10, 0, 0]), Clazz.array(Short.TYPE, -1, [0, 0, 0, 0, 0, 0, 100, 0]), Clazz.array(Short.TYPE, -1, [0, 1000, 900, 900, 800, 700, 500, 200]), Clazz.array(Short.TYPE, -1, [0, 1000, 900, 900, 0, 0]), Clazz.array(Short.TYPE, -1, [0, 1000, 900, 900, 800, 600, 400, 200]), Clazz.array(Short.TYPE, -1, [0, 800, 100, 10, 0, 0, 0, 0]), Clazz.array(Short.TYPE, -1, [0, 800, 100, 10, 0, 0, 0, 0]), Clazz.array(Short.TYPE, -1, [0, 0, 0, 0, 0, 0, 0, 250]), Clazz.array(Short.TYPE, -1, [0, 9000, 9000, 9000, 9000, 9000, 9000, 9000]), Clazz.array(Short.TYPE, -1, [0, 4000, 4000, 4000, 4000, 4000, 4000, 4000])]);
C$.h_=0;
C$.i=Clazz.array(Byte.TYPE, -1, [-1, -1, 0, 1, 2, 3, 16, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]);
C$.k=Clazz.new_($I$(2,1));
C$.C=false;
C$.D=0;
C$.E=0;
C$.F=0;
C$.l=0;
C$.m=0;
C$.I=0;
C$.p=true;
C$.q=false;
C$.r=null;
C$.s=$I$(1).a$S("/res/tiles.png");
C$.t=$I$(1).a$S("/res/dirt_top_bottom.png");
C$.u=$I$(1).a$S("/res/dirt_left_right.png");
C$.v=$I$(1).a$S("/res/tanker.png");
C$.w=$I$(1).a$S("/res/crane.png");
C$.x=$I$(1).a$S("/res/cargo_brick.png");
C$.y=$I$(3).getWidth$();
C$.z=$I$(3).getHeight$();
C$.A=false;
C$.B=0;
};
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
