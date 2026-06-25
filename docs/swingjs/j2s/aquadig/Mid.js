(function(){var P$=Clazz.newPackage("aquadig"),p$1={},I$=[[0,'java.util.Random','javax.microedition.lcdui.Display','aquadig.d','javax.swing.Timer',['aquadig.Mid','.GameTick'],'com.vlm.redstar.client.ui.d','aquadig.ParticleTick','com.vlm.redstar.client.ui.a','aquadig.e','aquadig.g','com.vlm.redstar.client.core.csp.a','aquadig.c','javax.microedition.lcdui.Image']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Mid", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.microedition.midlet.MIDlet');
C$.$classes$=[['GameTick',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.o=0;
this.p=false;
},1);

C$.$fields$=[['Z',['p'],'J',['o'],'S',['l','m'],'O',['gameTimer','javax.swing.Timer']]
,['Z',['f','n'],'B',['a','k'],'I',['frameMs'],'J',['s','t','clockMs'],'O',['b','aquadig.d','q','javax.microedition.lcdui.Display','c','aquadig.c','rng','java.util.Random','h','com.vlm.redstar.client.core.csp.a','i','javax.microedition.media.Player','j','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.l=this.getAppProperty$S("MIDlet-Version");
this.m=C$.f$();
C$.a=($b$[0] = 100, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'startApp$',  function () {
if (this.gameTimer == null ) {
C$.q=$I$(2).getDisplay$javax_microedition_midlet_MIDlet(this);
C$.b=Clazz.new_($I$(3,1).c$$aquadig_Mid,[this]);
C$.q.setCurrent$javax_microedition_lcdui_Displayable(C$.b);
C$.f=true;
C$.clockMs=0;
this.gameTimer=Clazz.new_([Long.$ival(C$.s), Clazz.new_($I$(5,1).c$$aquadig_Mid,[this])],$I$(4,1).c$$I$java_awt_event_ActionListener);
this.gameTimer.setInitialDelay$I(0);
this.gameTimer.setRepeats$Z(true);
this.gameTimer.start$();
}});

Clazz.newMeth(C$, 'tickFrame',  function () {
if (!C$.f) {
return;
}try {
C$.t=C$.clockMs;
p$1.c.apply(this, []);
(C$.clockMs=Long.$add(C$.clockMs,(C$.s)));
C$.b.repaint$();
C$.b.serviceRepaints$();
} catch (ignored) {
}
}, p$1);

Clazz.newMeth(C$, 'pauseApp$',  function () {
});

Clazz.newMeth(C$, 'c',  function () {
try {
switch (C$.a) {
case 100:
if ($I$(6).b$()) {
C$.b.L.c$$();
$I$(7).tick$();
}break;
case 101:
if (!$I$(8).a$()) {
C$.tickIdle$();
}break;
case 116:
C$.b.o$();
break;
}
if (Long.$ge(C$.clockMs,Long.$add(this.o,400) )) {
C$.n=!C$.n;
this.o=C$.clockMs;
}} catch (var2) {
}
}, p$1);

Clazz.newMeth(C$, 'tickIdle$',  function () {
if ($I$(3).e != null ) {
if (Long.$gt($I$(3).f,0 )) {
$I$(3).e.g_=Long.$add($I$(3).e.g_,(Long.$sub(C$.t,$I$(3).f)));
$I$(3).f=0;
} else {
$I$(3).e.g_=Long.$add($I$(3).e.g_,C$.s);
}}$I$(9).p$();
$I$(10).a$();
$I$(7).tick$();
}, 1);

Clazz.newMeth(C$, 'e$',  function () {
if (C$.h != null ) {
$I$(11).a$();
}$I$(7).reset$();
if (C$.c != null ) {
$I$(12).a$();
C$.c=null;
}if (C$.b != null ) {
C$.b.f$();
C$.b=null;
}System.gc$();
}, 1);

Clazz.newMeth(C$, 'destroyApp$Z',  function (var1) {
C$.f=false;
if (this.gameTimer != null ) {
this.gameTimer.stop$();
this.gameTimer=null;
}C$.e$();
this.notifyDestroyed$();
});

Clazz.newMeth(C$, 'a$S',  function (var0) {
var var1=null;
try {
var1=$I$(13).createImage$S(var0);
} catch (var3) {
}
return var1;
}, 1);

Clazz.newMeth(C$, 'a$B',  function (var0) {
try {
var var2=C$.a;
C$.a=($b$[0] = 108, $b$[0]);
C$.b.af=1;
C$.b.ae=1;
C$.b.repaint$();
C$.b.serviceRepaints$();
C$.i=C$.a$S$S(C$.j[var0], "audio/midi");
C$.a=var2;
} catch (var3) {
}
}, 1);

Clazz.newMeth(C$, 'a$S$S',  function (var0, var1) {
return null;
}, 1);

Clazz.newMeth(C$, 'a$B$I',  function (var0, var1) {
if ($I$(6).d) {
try {
 label27 : {
if (C$.i != null  && C$.k != var0 ) {
C$.a$();
} else if (C$.i != null ) {
break label27;
}C$.a$B(var0);
}C$.i.realize$();
C$.i.prefetch$();
C$.i.setLoopCount$I(var1);
C$.i.start$();
C$.k=var0;
} catch (var3) {
}
}}, 1);

Clazz.newMeth(C$, 'a$',  function () {
try {
if (C$.i != null ) {
if (C$.i.getState$() == 400) {
C$.i.stop$();
}C$.i.deallocate$();
C$.i.close$();
C$.i=null;
C$.k=($b$[0] = -1, $b$[0]);
System.gc$();
}} catch (var1) {
}
}, 1);

Clazz.newMeth(C$, 'a$I',  function (var0) {
return Math.abs(C$.rng.nextInt$() % var0);
}, 1);

Clazz.newMeth(C$, 'b$I',  function (var0) {
return C$.rng.nextInt$() % var0;
}, 1);

Clazz.newMeth(C$, 'b$',  function () {
return C$.rng.nextInt$() >= 0;
}, 1);

Clazz.newMeth(C$, 'a$I$I$I$I$I$I$I$I',  function (var0, var1, var2, var3, var4, var5, var6, var7) {
if (var1 + var3 < var5) {
return false;
} else if (var1 > var5 + var7) {
return false;
} else {
return var0 + var2 < var4 ? false : var0 <= var4 + var6;
}}, 1);

Clazz.newMeth(C$, 'a$I$I',  function (var0, var1) {
var var5=var0 >>> 24;
var var6=256 - var5;
return 16711680 & (var0 & 16711680) * var5 + (var1 & 16711680) * var6 >> 8 | 65280 & (var0 & 65280) * var5 + (var1 & 65280) * var6 >> 8 | 255 & (var0 & 255) * var5 + (var1 & 255) * var6 >> 8;
}, 1);

Clazz.newMeth(C$, 'f$',  function () {
var var0=Clazz.array(Byte.TYPE, [0]);
try {
var var1;
var0=Clazz.array(Byte.TYPE, [(var1= Clazz.new_().getClass$().getResourceAsStream$S("/res/version.txt")).available$()]);
var1.read$BA$I$I(var0, 0, var1.available$());
var1.close$();
} catch (var2) {
}
return  String.instantialize(var0);
}, 1);

Clazz.newMeth(C$, 'c$I',  function (var0) {
if ($I$(6).e) {
C$.q.vibrate$I(var0);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.a=($b$[0] = 100, $b$[0]);
C$.b=null;
C$.q=null;
C$.frameMs=25;
C$.s=(1000/C$.frameMs|0);
C$.f=true;
C$.rng=Clazz.new_($I$(1,1));
C$.i=null;
C$.j=Clazz.array(String, -1, ["/res/theme.mid", "/res/credits.mid", "/res/shopping.mid", "/res/death.mid", "/res/win.mid"]);
C$.k=($b$[0] = -1, $b$[0]);
C$.n=false;
};
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Mid, "GameTick", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['mid','aquadig.Mid']]]

Clazz.newMeth(C$, 'c$$aquadig_Mid',  function (mid) {
;C$.$init$.apply(this);
this.mid=mid;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.tickFrame.apply(this.mid, []);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
