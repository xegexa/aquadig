(function(){var P$=Clazz.newPackage("aquadig"),I$=[[0,'java.util.Random','aquadig.Mid','aquadig.d','aquadig.g','aquadig.e']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "h");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['r'],'I',['a','b','c','effectFrame','q','h','j'],'O',['rng','java.util.Random','k','int[]','+l','+m','+n','+o','+p','+s','+f','explosionImg','javax.microedition.lcdui.Image','+i']]]

Clazz.newMeth(C$, 'a$',  function () {
C$.r=false;
C$.i=null;
C$.explosionImg=null;
}, 1);

Clazz.newMeth(C$, 'b$',  function () {
if (null == C$.i ) {
C$.i=$I$(2).a$S("/res/clods.png");
C$.j=C$.i.getHeight$();
}C$.a=$I$(3).bw;
C$.b=$I$(3).bh;
C$.c=0;
C$.rng.setSeed$J(System.currentTimeMillis$());
for (var var0=0; var0 < 32; var0++) {
C$.k[var0]=0;
C$.l[var0]=0;
C$.m[var0]=0;
C$.n[var0]=0;
C$.o[var0]=2147483647;
C$.p[var0]=0;
}
C$.r=false;
}, 1);

Clazz.newMeth(C$, 'a$I$I$I$I',  function (var0, var1, var2, var3) {
if (var0 == 1 || var0 == 4 ) {
var1+=C$.rng.nextInt$() % 10;
var2+=C$.rng.nextInt$() % 10;
}C$.k[C$.q]=var1;
C$.l[C$.q]=var2;
C$.p[C$.q]=var0;
var var10000;
var var10001;
var var10002;
if (var3 < 0) {
var10000=C$.o;
var10001=C$.q;
var10002=-1;
} else {
var10000=C$.o;
var10001=C$.q;
var10002=-var3;
}var10000[var10001]=var10002;
++C$.q;
if (C$.q >= 32) {
C$.q=0;
}C$.r=true;
}, 1);

Clazz.newMeth(C$, 'a$I$I',  function (var0, var1) {
C$.m[C$.q]=$I$(2).a$I(3);
C$.a$I$I$I$I(3, var0, var1, -1);
}, 1);

Clazz.newMeth(C$, 'b$I$I',  function (var0, var1) {
C$.m[C$.q]=C$.rng.nextInt$() % 7;
C$.n[C$.q]=C$.rng.nextInt$() % 5 - 5;
C$.a$I$I$I$I(4, var0, var1, -1);
}, 1);

Clazz.newMeth(C$, 'c$I$I',  function (var0, var1) {
C$.m[C$.q]=C$.rng.nextInt$() % 7;
C$.n[C$.q]=C$.rng.nextInt$() % 5 - 5;
C$.a$I$I$I$I(1, var0, var1, -1);
}, 1);

Clazz.newMeth(C$, 'd$I$I',  function (var0, var1) {
C$.a$I$I$I$I(2, var0, var1, -1);
}, 1);

Clazz.newMeth(C$, 'e$I$I',  function (var0, var1) {
C$.a$I$I$I$I(2, var0, var1, -1);
C$.a$I$I$I$I(2, var0 + $I$(2).b$I(16), var1 + $I$(2).b$I(16), 5);
}, 1);

Clazz.newMeth(C$, 'a$I',  function (var0) {
var var1=C$.m[var0];
var var2=C$.l[var0];
if (var1 < 7 && $I$(2).a$I(6) == 0 ) {
C$.m[var0]=var1 + 1;
}var2-=var1;
if (!$I$(4).e$I$I(C$.k[var0], var2)) {
C$.o[var0]=C$.f[3];
} else if ($I$(3).e != null  && var2 <= 128 ) {
C$.o[var0]=C$.f[3];
} else {
var var10000;
var var10001;
var var10002;
if ($I$(3).aE) {
var10000=C$.n;
var10001=var0;
var10002=14083579;
} else {
var10000=C$.n;
var10001=var0;
var10002=$I$(4,"b$I",[(var2/32|0)]);
}var10000[var10001]=var10002;
C$.l[var0]=var2;
}}, 1);

Clazz.newMeth(C$, 'b$I',  function (var0) {
if (!$I$(4).e$I$I(C$.k[var0], C$.l[var0])) {
C$.o[var0]=C$.f[4];
} else {
C$.k[var0]=C$.k[var0] + C$.m[var0];
C$.l[var0]=C$.l[var0] + C$.n[var0];
++C$.n[var0];
}}, 1);

Clazz.newMeth(C$, 'c$I',  function (var0) {
C$.k[var0]=C$.k[var0] + C$.m[var0];
C$.l[var0]=C$.l[var0] + C$.n[var0];
++C$.n[var0];
}, 1);

Clazz.newMeth(C$, 'c$$',  function () {
++C$.c;
if (C$.r) {
var var0=false;
for (var var1=0; var1 < 32; var1++) {
if (C$.o[var1] < C$.f[C$.p[var1]]) {
++C$.o[var1];
switch (C$.p[var1]) {
case 1:
C$.c$I(var1);
case 2:
default:
break;
case 3:
C$.a$I(var1);
break;
case 4:
C$.b$I(var1);
}
var0=true;
}}
C$.r=var0;
}}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics',  function (var0) {
for (var var4=0; var4 < 32; var4++) {
if (!C$.r) {
return;
}var var3;
if ((var3=C$.p[var4]) != 0) {
var var1=C$.o[var4];
var var2=C$.f[var3];
if (var1 < var2 && var1 >= 0 ) {
switch (var3) {
case 1:
C$.a$javax_microedition_lcdui_Graphics$I$I$I(var0, C$.k[var4], C$.l[var4], var1);
break;
case 2:
C$.b$javax_microedition_lcdui_Graphics$I$I$I(var0, C$.k[var4] + $I$(4).l, C$.l[var4] + $I$(4).m, C$.o[var4]);
break;
case 3:
C$.a$javax_microedition_lcdui_Graphics$I$I$I$I(var0, C$.k[var4] + $I$(4).l, C$.l[var4] + $I$(4).m, C$.m[var4], C$.n[var4]);
break;
case 4:
C$.a$javax_microedition_lcdui_Graphics$I$I(var0, C$.k[var4] + $I$(4).l, C$.l[var4] + $I$(4).m);
}
}}}
}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$I$I$I',  function (var0, var1, var2, var3) {
if (C$.i == null ) {
return;
}var1-=(C$.j/2|0);
var2-=(C$.j/2|0);
var sheetFrames=C$.j > 0 ? (C$.i.getWidth$()/C$.j|0) : 1;
if (sheetFrames < 1) {
sheetFrames=1;
}var frame=var3 % sheetFrames;
var angleDeg=var3 * (360.0 / C$.f[1]);
var var4=var0.g2d.create$I$I$I$I(var1, var2, C$.j, C$.j);
try {
var4.translate$I$I((C$.j/2|0), (C$.j/2|0));
var4.rotate$D(Math.toRadians(angleDeg));
var4.translate$I$I((-C$.j/2|0), (-C$.j/2|0));
var4.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(C$.i.buf, -frame * C$.j, 0, null);
} finally {
var4.dispose$();
}
}, 1);

Clazz.newMeth(C$, 'b$javax_microedition_lcdui_Graphics$I$I$I',  function (var0, var1, var2, var3) {
if (null == C$.explosionImg ) {
C$.explosionImg=$I$(2).a$S("/res/explosion.png");
C$.h=C$.explosionImg.getHeight$();
}var3>>=1;
var1-=C$.h >> 1;
var2-=C$.h >> 1;
var1+=$I$(2).b$I(4);
var2+=$I$(2).b$I(4);
var0.setClip$I$I$I$I(var1, var2, C$.h, C$.h);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.explosionImg, var1 - var3 * C$.h, var2, 20);
}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$B',  function (var0, var1) {
var var2=0;
var var3=0;
var var4=0;
var var5=0;
var var7=0;
var var8=0;
var var9;
var var10=$I$(5,"d$I",[var9=$I$(3).Q >> 1]);
var var10000;
var var10001;
if (var1 == 2) {
var10000=var0;
var10001=16711680;
} else {
var10000=var0;
var10001=0;
}var10000.setColor$I(var10001);
var var12=-51472;
var var13=102943;
for (var var15=0; var15 < 2; var15++) {
var var16=$I$(5).b$I$I(var15 << 16, 131072);
var var17=var12 + $I$(5).a$I$I(var16, var13);
var var18=$I$(5,"c$I",[$I$(5,"a$I$I",[var10, $I$(5).f$I(var17)])]);
var var19=$I$(5,"c$I",[$I$(5,"a$I$I",[var10, $I$(5).e$I(var17)])]);
var var20=(C$.a/2|0);
var var21=(C$.b/2|0);
var2=var20 * var15;
var3=C$.b;
var4=(C$.a >> 1) + var18;
var5=(C$.b >> 1) - var19;
var7=var20 * (var15 + 1);
var0.fillTriangle$I$I$I$I$I$I(var2, var3, var4, var5, var7, var3);
var2=C$.a;
var3=C$.b - var21 * var15;
var4=(C$.a >> 1) - var19;
var5=(C$.b >> 1) - var18;
var8=C$.b - var21 * (var15 + 1);
var0.fillTriangle$I$I$I$I$I$I(var2, var3, var4, var5, var2, var8);
var2=C$.a - var20 * var15;
var4=(C$.a >> 1) - var18;
var5=(C$.b >> 1) + var19;
var7=C$.a - var20 * (var15 + 1);
var0.fillTriangle$I$I$I$I$I$I(var2, 0, var4, var5, var7, 0);
var3=var21 * var15;
var4=(C$.a >> 1) + var19;
var5=(C$.b >> 1) + var18;
var8=var21 * (var15 + 1);
var0.fillTriangle$I$I$I$I$I$I(0, var3, var4, var5, 0, var8);
}
if (var1 == 0) {
if ($I$(3).Q < 0) {
return true;
} else {
$I$(3).Q-=10;
return false;
}} else if (var1 == 2) {
if ($I$(3).Q > C$.b) {
return true;
} else {
$I$(3).Q+=10;
return false;
}} else {
return true;
}}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$I$I$I$I',  function (var0, var1, var2, var3, var4) {
var0.setClip$I$I$I$I(0, 0, C$.a, C$.b);
var var10000;
var var10001;
if ($I$(2).a == 101) {
var10000=var0;
var10001=$I$(3).e.h$();
} else {
var10000=var0;
var10001=-1996488705;
}var10000.setColor$I($I$(2).a$I$I(var10001, var4));
var1+=C$.rng.nextInt$() % 2;
if (var3 < 2) {
var0.drawLine$I$I$I$I(var1, var2, var1, var2);
} else {
var var10002;
var var10003;
var var10004;
if (var3 == 2) {
var10000=var0;
var10001=var1;
var10002=var2;
var10003=2;
var10004=2;
} else {
if (var3 == 3) {
var0.drawLine$I$I$I$I(var1 - 1, var2, var1 + 1, var2);
var0.drawLine$I$I$I$I(var1, var2 - 1, var1, var2 + 1);
return;
}var var5;
var var6=(var5=(var3/2|0)) - 1;
var0.fillRect$I$I$I$I(var1 - var6, var2 - var5, var6 * 2, var5 * 2);
var10000=var0;
var10001=var1 - var5;
var10002=var2 - var6;
var10003=var5 * 2;
var10004=var6 * 2;
}var10000.fillRect$I$I$I$I(var10001, var10002, var10003, var10004);
}}, 1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$I$I',  function (var0, var1, var2) {
var0.setClip$I$I$I$I(0, 0, C$.a, C$.b);
var0.setColor$I(0);
var0.fillRect$I$I$I$I(var1 - 1, var2 - 1, 3, 3);
var0.drawLine$I$I$I$I(var1 - 1, var2 - 1, var1 - 1, var2 - 1);
var0.drawLine$I$I$I$I(var1 + 1, var2 + 1, var1 + 1, var2 + 1);
var0.setColor$I(16711680);
var0.drawLine$I$I$I$I(var1, var2, var1, var2);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.rng=Clazz.new_($I$(1,1));
C$.effectFrame=0;
C$.k=Clazz.array(Integer.TYPE, [32]);
C$.l=Clazz.array(Integer.TYPE, [32]);
C$.m=Clazz.array(Integer.TYPE, [32]);
C$.n=Clazz.array(Integer.TYPE, [32]);
C$.o=Clazz.array(Integer.TYPE, [32]);
C$.p=Clazz.array(Integer.TYPE, [32]);
C$.q=0;
C$.s=Clazz.array(Integer.TYPE, -1, [0, 88, 175, 255, 329, 392, 443, 481, 504, 512, 504, 481, 443, 392, 329, 255, 175, 88, 0, -88, -175, -256, -329, -392, -443, -481, -504, -512, -504, -481, -443, -392, -329, -256, -175, -88]);
C$.f=Clazz.array(Integer.TYPE, -1, [0, 15, 10, 30, 20]);
C$.explosionImg=null;
C$.i=null;
{
C$.b$();
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
