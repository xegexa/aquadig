(function(){var P$=Clazz.newPackage("aquadig"),p$1={},I$=[[0,'javax.microedition.lcdui.Font','javax.microedition.lcdui.Image','aquadig.Mid','com.vlm.redstar.client.core.csp.a','javax.microedition.lcdui.GameDimensions','aquadig.g','aquadig.h','com.vlm.redstar.client.ui.d','com.vlm.redstar.client.ui.a','aquadig.e','aquadig.c','com.vlm.redstar.client.ui.c','StringBuffer','aquadig.b','aquadig.a','javax.microedition.rms.RecordStore','java.io.ByteArrayInputStream','java.io.DataInputStream','java.io.ByteArrayOutputStream','java.io.DataOutputStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "d", null, 'javax.microedition.lcdui.Canvas');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.n=Clazz.array($I$(2), [3]);
this.o=Clazz.array($I$(2), [5]);
this.E=false;
this.F=false;
this.G=0;
this.R=false;
this.S=false;
this.V=true;
this.W=false;
this.ae=0;
this.af=0;
this.aH=false;
this.aI=null;
this.aj=($b$[0] = 0, $b$[0]);
this.at=true;
this.aN=Clazz.array(Integer.TYPE, -1, [0, 8671760, 10840856]);
this.aS=Clazz.array(Integer.TYPE, -1, [3247359, 1604607]);
this.aT=Clazz.array(Integer.TYPE, -1, [25566, 17052]);
this.aV=Clazz.array(Integer.TYPE, -1, [11, 23, 36]);
this.av=($b$[0] = 100, $b$[0]);
this.aY=false;
this.aZ=false;
this.ay=($b$[0] = 3, $b$[0]);
this.az=($b$[0] = -1, $b$[0]);
this.aB=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [49152, 8454016, 32768]), Clazz.array(Integer.TYPE, -1, [16742657, 16751617, 16728833]), Clazz.array(Integer.TYPE, -1, [16711680, 16734977, 13181441])]);
this.aC=Clazz.array(Integer.TYPE, -1, [16776960, 16711573, 14080000]);
this.aD=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [255, 8421631, 128]), Clazz.array(Integer.TYPE, -1, [16711680, 16734977, 13181441])]);
this.bb=0;
this.bc=false;
this.bd=false;
this.be=0;
},1);

C$.$fields$=[['Z',['E','F','R','S','V','W','aH','at','aY','aZ','bc','bd'],'B',['U','aj','av','ay','az'],'I',['G','M','N','O','P','aG','T','ae','af','ag','aJ','aK','aM','aO','aP','aQ','aR','aU','bb','be'],'O',['gWorld','aquadig.g','gImg','javax.microedition.lcdui.Image','+hImg','+i','+j','+k','+l','+m','n','javax.microedition.lcdui.Image[]','+o','p','int[]','+q','r','javax.microedition.lcdui.Image','+s','+t','+u','H','aquadig.Mid','L','com.vlm.redstar.client.ui.d','aI','java.util.Vector','ak','javax.microedition.lcdui.Image','+al','+am','+an','+aL','aN','int[]','+aS','+aT','+aV','aB','int[][]','aC','int[]','aD','int[][]']]
,['Z',['z','B','D','X','Y','ap','aq','ar','as','au','aw','ax','aA','aE'],'B',['ao'],'I',['bw','bh','aF','y','A','C','Q','Z','aa','ab','ad','ah','ai','ba'],'J',['f'],'S',['ac'],'O',['a_','boolean[]','e','aquadig.a','v','javax.microedition.lcdui.Image','+w','+x','I','com.vlm.redstar.client.ui.a','J','com.vlm.redstar.client.ui.c','+K','aW','short[]','+aX']]]

Clazz.newMeth(C$, 'c$$aquadig_Mid',  function (var1) {
Clazz.super_(C$, this);
this.H=var1;
$I$(3).h=$I$(4).a$javax_microedition_midlet_MIDlet$S(var1, "AquaDig");
p$1.s.apply(this, []);
this.aJ=10;
this.p=Clazz.array(Integer.TYPE, [3]);
this.q=Clazz.array(Integer.TYPE, [3]);
p$1.applyLayoutDimensions.apply(this, []);
p$1.t.apply(this, []);
p$1.u.apply(this, []);
p$1.a$Z$Z.apply(this, [true, false]);
p$1.B.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'applyLayoutDimensions',  function () {
C$.bw=$I$(5).getWidth$();
C$.bh=$I$(5).getHeight$();
this.aG=C$.bw - 40;
C$.ai=10;
C$.ah=C$.bw - 2 * C$.ai;
this.aK=C$.bw - ((C$.bw/10|0) << 1);
if (this.o != null  && this.o[2] != null  ) {
this.ag=this.o[2].getHeight$();
}this.p[0]=(C$.bw/6|0);
this.p[1]=(C$.bw/2|0);
this.p[2]=(C$.bw * 2/3|0);
this.q[0]=C$.bh - 80;
this.q[1]=C$.bh - 73;
this.q[2]=C$.bh - 79;
$I$(6).y=C$.bw;
$I$(6).z=C$.bh;
$I$(7).a=C$.bw;
$I$(7).b=C$.bh;
}, p$1);

Clazz.newMeth(C$, 'hideNotify$',  function () {
try {
if (this.ay != 3) {
if (this.ay == 0) {
if (C$.e != null ) {
if (!C$.e.d_) {
for (var var1=0; var1 < C$.a_.length; var1++) {
C$.a_[var1]=false;
}
}this.az=$I$(3).a;
this.b$B(115);
}if ($I$(8).d) {
$I$(3).a$();
}}}} catch (var2) {
}
});

Clazz.newMeth(C$, 'showNotify$',  function () {
if (!this.H.p) {
this.H.p=true;
this.ay=($b$[0] = 0, $b$[0]);
} else if (this.ay == 0) {
this.repaint$();
this.serviceRepaints$();
this.ay=($b$[0] = 1, $b$[0]);
} else {
if (this.ay == 2) {
if ($I$(8).d && $I$(8).b$() ) {
var var10000;
var var10001;
if (C$.ao == 6) {
var10000=($b$[0] = 1, $b$[0]);
var10001=($b$[0] = 1, $b$[0]);
} else {
var10000=($b$[0] = 0, $b$[0]);
var10001=($b$[0] = -1, $b$[0]);
}$I$(3).a$B$I(var10000, var10001);
}if ($I$(8).d && $I$(8).b$() ) {
var var1;
var var3;
 label87 : {
if (this.az != 101 && this.az != 108  && this.az != 110  && this.az != 105  && this.az != 103  && this.az != 109 ) {
if (this.az == 107) {
var1=($b$[0] = 3, $b$[0]);
var3=($b$[0] = 1, $b$[0]);
break label87;
}var1=($b$[0] = 2, $b$[0]);
} else {
var1=($b$[0] = 0, $b$[0]);
}var3=($b$[0] = -1, $b$[0]);
}$I$(3).a$B$I(var1, var3);
}this.ay=($b$[0] = 0, $b$[0]);
if ($I$(8).b$()) {
C$.J.c$$();
this.aI=null;
p$1.a$Z$Z.apply(this, [false, false]);
return;
}var var2;
var var4;
if (this.az != 108) {
if (this.at) {
var2=this;
var4=($b$[0] = 106, $b$[0]);
} else {
var2=this;
var4=this.az;
}} else if (this.af != this.ae) {
var2=this;
var4=this.az;
} else if (C$.aA) {
var2=this;
var4=($b$[0] = 101, $b$[0]);
} else {
var2=this;
var4=($b$[0] = 110, $b$[0]);
}var2.b$B(var4);
}}});

Clazz.newMeth(C$, 'paint$javax_microedition_lcdui_Graphics',  function (var1) {
++C$.Z;
if ($I$(3).a == 115) {
p$1.q$javax_microedition_lcdui_Graphics.apply(this, [var1]);
} else if ($I$(3).f) {
try {
switch ($I$(3).a) {
case 100:
if ($I$(8).b$()) {
this.L.a$javax_microedition_lcdui_Graphics(var1);
$I$(7).a$javax_microedition_lcdui_Graphics(var1);
return;
}break;
case 101:
case 107:
p$1.c$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 102:
p$1.i$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 103:
case 104:
p$1.k$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 105:
p$1.o$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 106:
p$1.p$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 108:
p$1.h$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 109:
p$1.n$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 110:
p$1.d$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 111:
p$1.l$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 112:
p$1.m$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 113:
p$1.j$javax_microedition_lcdui_Graphics.apply(this, [var1]);
break;
case 114:
p$1.e$javax_microedition_lcdui_Graphics.apply(this, [var1]);
case 115:
case 116:
default:
break;
case 117:
case 118:
p$1.f$javax_microedition_lcdui_Graphics.apply(this, [var1]);
}
} catch (var4) {
}
try {
if ($I$(9).a$()) {
$I$(9).a$javax_microedition_lcdui_Graphics(var1);
}} catch (var3) {
}
}});

Clazz.newMeth(C$, 'c$javax_microedition_lcdui_Graphics',  function (var1) {
$I$(6).a$javax_microedition_lcdui_Graphics(var1);
$I$(6).b$javax_microedition_lcdui_Graphics(var1);
C$.e.b$();
$I$(10).b$javax_microedition_lcdui_Graphics(var1);
$I$(6).c$javax_microedition_lcdui_Graphics(var1);
$I$(7).a$javax_microedition_lcdui_Graphics(var1);
if ($I$(3).a != 110) {
p$1.r$javax_microedition_lcdui_Graphics.apply(this, [var1]);
}var var5;
var var8;
 label18 : {
C$.g$javax_microedition_lcdui_Graphics(var1);
var var3=false;
if ($I$(9).a$()) {
var8=$I$(11).Z;
} else {
if ($I$(3).a != 110) {
var5=$I$(11).G;
var8=$I$(11).ab;
break label18;
}var8="";
}var5=var8;
var8="";
}var var6=var8;
var var4=C$.bh - C$.J.g;
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I$I(var1, var5, 3, var4, 4);
var var7=C$.bw - 3;
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I$I(var1, var6, var7, var4, 8);
}, p$1);

Clazz.newMeth(C$, 'd$javax_microedition_lcdui_Graphics',  function (var1) {
var var2=$I$(11).W;
var var3=$I$(11).X;
if (C$.y >= $I$(11).ce.length - 1) {
var2=$I$(11).Y;
var3="";
}this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, -1, var2, var3);
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).ad, C$.bw >> 1, this.M);
C$.J.a$javax_microedition_lcdui_Graphics(var1);
}, p$1);

Clazz.newMeth(C$, 'e$javax_microedition_lcdui_Graphics',  function (var1) {
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, -1, $I$(11).W, "");
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).x, C$.bw >> 1, this.M);
var var2=C$.bw >> 1;
var var3=this.N + (this.O >> 1) - (C$.J.a$java_util_Vector(this.aI) >> 1);
C$.J.a$javax_microedition_lcdui_Graphics$java_util_Vector$I$I$I(var1, this.aI, var2, var3, 1);
}, p$1);

Clazz.newMeth(C$, 'f$javax_microedition_lcdui_Graphics',  function (var1) {
var var2=$I$(3).a == 118 ? (!this.bd ? $I$(11).W : $I$(11).Y) : $I$(11).Y;
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, 120, var2, "");
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).aF.toUpperCase$(), C$.bw >> 1, this.M);
C$.J.a$javax_microedition_lcdui_Graphics(var1);
}, p$1);

Clazz.newMeth(C$, 'g$javax_microedition_lcdui_Graphics',  function (var0) {
if (C$.ad < 20) {
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var0, C$.ac, C$.aa, C$.ab);
++C$.ad;
--C$.ab;
}}, 1);

Clazz.newMeth(C$, 'h$javax_microedition_lcdui_Graphics',  function (var1) {
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, -1, "", "");
var var2=this.aJ + C$.J.g;
var var3=(C$.bh >> 1) - (var2 >> 1);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).aK, C$.bw >> 1, var3);
var3+=C$.J.g;
var var4=(C$.bw >> 1) - (this.aK >> 1);
C$.a$javax_microedition_lcdui_Graphics$I$I$I$I$IA$I$I$I$Z(var1, var4, var3, this.aK, this.aJ, this.aC, 0, this.af, this.ae, false);
}, p$1);

Clazz.newMeth(C$, 'i$javax_microedition_lcdui_Graphics',  function (var1) {
var var2=C$.bw >> 1;
var var3=this.M;
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, 102, $I$(11).Z, $I$(11).V);
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).B, var2, var3);
var var4=$I$(8).I * 5 + 4 * this.P;
var3=this.N + (this.O >> 1) - (var4 >> 1);
var var5=($I$(8).I/2|0) - (C$.J.g >> 1);
var var6=0;
for (var var7=0; var7 < 5; var7++) {
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == var6);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).ca[var6], var2, var3 + var5);
var3+=$I$(8).I + this.P;
++var6;
}
}, p$1);

Clazz.newMeth(C$, 'j$javax_microedition_lcdui_Graphics',  function (var1) {
var var2=C$.bw >> 1;
var var3=this.M;
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, 113, $I$(11).Z, $I$(11).V);
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).ca[this.T].toUpperCase$(), var2, var3);
var2=C$.bw >> 1;
var3=this.N;
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).cb[this.T][this.aj], var2, var3);
var3+=C$.J.g;
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, "(" + $I$(11).ca[this.T] + " " + (this.aj + 1) + ")" , var2, var3);
C$.J.a$javax_microedition_lcdui_Graphics(var1);
if ($I$(3).n && this.V ) {
var3=this.N + (this.O >> 1) - (this.l.getHeight$() >> 1);
p$1.a$javax_microedition_lcdui_Graphics$I$I$Z.apply(this, [var1, 1, var3, true]);
var2=C$.bw - 1 - (this.l.getWidth$() >> 1) ;
p$1.a$javax_microedition_lcdui_Graphics$I$I$Z.apply(this, [var1, var2, var3, false]);
}}, p$1);

Clazz.newMeth(C$, 'k$javax_microedition_lcdui_Graphics',  function (var1) {
var var2;
var var3;
 label33 : {
var2=$I$(11).V;
var3="";
var var10000;
if (C$.e.l$()) {
var10000=$I$(3).a == 104 ? $I$(11).aa : $I$(11).ac;
} else {
if ($I$(3).a != 104) {
break label33;
}var10000=$I$(11).C;
}var3=var10000;
}this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, 120, var3, var2);
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).G, C$.bw >> 1, this.M);
if (C$.e.l$()) {
var var5=this.N;
var var4=C$.bw >> 1;
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).aR + C$.a$I$Z(C$.e.t, true), var4, var5);
var5+=C$.J.g;
var var6;
var var12;
var var10001;
var var10002;
if ((var6=C$.e.i$() - C$.e.H) == 0) {
var12=C$.J;
var10001=var1;
var10002=$I$(11).af;
} else {
var12=C$.J;
var10001=var1;
var10002=var6 + $I$(11).ai;
}var12.a$javax_microedition_lcdui_Graphics$S$I$I(var10001, var10002, var4, var5);
C$.J.a$javax_microedition_lcdui_Graphics(var1);
} else {
var var10=this.N + (this.O >> 1) - (C$.J.a$java_util_Vector(this.aI) >> 1);
var var7=C$.bw >> 1;
C$.J.a$javax_microedition_lcdui_Graphics$java_util_Vector$I$I$I(var1, this.aI, var7, var10, 1);
}if ($I$(3).n && $I$(3).a != 104 ) {
var var11=this.N + (this.O >> 1) - (this.l.getHeight$() >> 1);
p$1.a$javax_microedition_lcdui_Graphics$I$I$Z.apply(this, [var1, 1, var11, true]);
var var8=C$.bw - 1 - (this.l.getWidth$() >> 1) ;
p$1.a$javax_microedition_lcdui_Graphics$I$I$Z.apply(this, [var1, var8, var11, false]);
}}, p$1);

Clazz.newMeth(C$, 'l$javax_microedition_lcdui_Graphics',  function (var1) {
var var2=C$.bw >> 1;
var var3=this.M;
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, 104, $I$(11).Z, $I$(11).V);
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).A, var2, var3);
var var4=$I$(8).I * 3 + 2 * this.P;
var3=this.N + (this.O >> 1) - (var4 >> 1);
var var6=($I$(8).I >> 1) - (C$.J.g >> 1);
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == 0);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).D, var2, var3 + var6);
var3+=$I$(8).I + this.P;
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == 1);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).B, var2, var3 + var6);
var3+=$I$(8).I + this.P;
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == 2);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).E, var2, var3 + var6);
}, p$1);

Clazz.newMeth(C$, 'm$javax_microedition_lcdui_Graphics',  function (var1) {
var var2;
var var7;
 label17 : {
var2=C$.bw >> 1;
var7=this.M;
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, 112, $I$(11).Z, $I$(11).V);
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).E, var2, var7);
var7=this.N + this.P;
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, C$.e$B(this.aj), var2, var7);
var var6;
var7=(var6=var7 + C$.J.g) + this.P;
var var10000;
var var10001;
switch (this.aj) {
case 0:
C$.b$javax_microedition_lcdui_Graphics$I$I$Z(var1, var2, var7 + 10, $I$(3).n);
var1.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
break label17;
case 1:
var1.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
var10000=var1;
var10001=this.al;
break;
case 2:
var1.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
var10000=var1;
var10001=this.ak;
break;
default:
break label17;
}
var10000.drawImage$javax_microedition_lcdui_Image$I$I$I(var10001, var2, var7 + 10, 3);
}var7+=20;
C$.J.a$javax_microedition_lcdui_Graphics$java_util_Vector$I$I$I(var1, this.aI, var2, var7, 1);
if ($I$(3).n) {
var7=this.N + (this.O >> 1) - (this.l.getHeight$() >> 1);
p$1.a$javax_microedition_lcdui_Graphics$I$I$Z.apply(this, [var1, 1, var7, true]);
var2=C$.bw - 1 - (this.l.getWidth$() >> 1) ;
p$1.a$javax_microedition_lcdui_Graphics$I$I$Z.apply(this, [var1, var2, var7, false]);
}}, p$1);

Clazz.newMeth(C$, 'n$javax_microedition_lcdui_Graphics',  function (var1) {
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, 120, "", $I$(11).V);
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).H, C$.bw >> 1, this.M);
if (!C$.e.m$()) {
var var3=this.N + (this.O >> 1) - (C$.J.a$java_util_Vector(this.aI) >> 1);
var var2=C$.bw >> 1;
C$.J.a$javax_microedition_lcdui_Graphics$java_util_Vector$I$I$I(var1, this.aI, var2, var3, 1);
} else {
var var4=C$.bw >> 1;
var var6=this.N;
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).aL, var4, var6);
C$.J.a$javax_microedition_lcdui_Graphics(var1);
}if ($I$(3).n) {
var var7=this.N + (this.O >> 1) - (this.l.getHeight$() >> 1);
p$1.a$javax_microedition_lcdui_Graphics$I$I$Z.apply(this, [var1, 1, var7, true]);
var var5=C$.bw - 1 - (this.l.getWidth$() >> 1) ;
p$1.a$javax_microedition_lcdui_Graphics$I$I$Z.apply(this, [var1, var5, var7, false]);
}}, p$1);

Clazz.newMeth(C$, 'o$javax_microedition_lcdui_Graphics',  function (var1) {
var var2=C$.bw >> 1;
var var3=this.M;
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, 105, $I$(11).Z, $I$(11).V);
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).ab.toUpperCase$(), var2, var3);
var var4=$I$(8).I * 4 + 3 * this.P;
var3=this.N + (this.O >> 1) - (var4 >> 1);
var var5=($I$(8).I/2|0) - (C$.J.g >> 1);
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == 0);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).C, var2, var3 + var5);
var3+=$I$(8).I + this.P;
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == 1);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).I + ": " + ($I$(8).d ? $I$(11).J : $I$(11).K) , var2, var3 + var5);
var3+=$I$(8).I + this.P;
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == 2);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).bt + ": " + ($I$(8).e ? $I$(11).J : $I$(11).K) , var2, var3 + var5);
var3+=$I$(8).I + this.P;
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == 3);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).z, var2, var3 + var5);
}, p$1);

Clazz.newMeth(C$, 'p$javax_microedition_lcdui_Graphics',  function (var1) {
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, 120, $I$(11).Z, $I$(11).V);
var var2=C$.bw >> 1;
var var3=this.M;
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).F, var2, var3);
var var5=$I$(8).I * 3 + 2 * this.P;
var3=this.N + (this.O >> 1) - (var5 >> 1);
var var6=($I$(8).I/2|0) - (C$.J.g >> 1);
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == 0);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).C, var2, var3 + var6);
var3+=$I$(8).I + this.P;
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == 1);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).A, var2, var3 + var6);
var3+=$I$(8).I + this.P;
this.a$javax_microedition_lcdui_Graphics$I$Z(var1, var3, this.aj == 2);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).y, var2, var3 + var6);
}, p$1);

Clazz.newMeth(C$, 'q$javax_microedition_lcdui_Graphics',  function (var1) {
this.a$javax_microedition_lcdui_Graphics$B$S$S(var1, 120, "", "");
C$.K.a$javax_microedition_lcdui_Graphics$S$I$I(var1, $I$(11).C, C$.bw >> 1, this.M);
var var2=this.N + (this.O >> 1) - (C$.J.a$java_util_Vector(this.aI) >> 1);
var var3=C$.bw >> 1;
C$.J.a$javax_microedition_lcdui_Graphics$java_util_Vector$I$I$I(var1, this.aI, var3, var2, 1);
}, p$1);

Clazz.newMeth(C$, 'keyPressed$I',  function (var1) {
try {
if ($I$(3).a == 115) {
this.ay=($b$[0] = 2, $b$[0]);
this.showNotify$();
return;
}if ($I$(8).b$()) {
this.L.a$I(var1);
return;
}if ($I$(9).a$()) {
p$1.j$I.apply(this, [var1]);
return;
}switch ($I$(3).a) {
case 101:
p$1.b$I.apply(this, [var1]);
break;
case 102:
p$1.k$I.apply(this, [var1]);
break;
case 103:
case 104:
p$1.m$I.apply(this, [var1]);
break;
case 105:
p$1.n$I.apply(this, [var1]);
break;
case 106:
p$1.o$I.apply(this, [var1]);
break;
case 109:
p$1.c$I.apply(this, [var1]);
break;
case 110:
p$1.d$I.apply(this, [var1]);
break;
case 111:
p$1.e$I.apply(this, [var1]);
break;
case 112:
p$1.f$I.apply(this, [var1]);
break;
case 113:
p$1.l$I.apply(this, [var1]);
break;
case 114:
p$1.g$I.apply(this, [var1]);
break;
case 117:
p$1.i$I.apply(this, [var1]);
case 107:
case 108:
case 115:
case 116:
default:
return;
case 118:
p$1.h$I.apply(this, [var1]);
}
} catch (var3) {
}
});

Clazz.newMeth(C$, 'b$I',  function (var1) {
if (C$.e != null ) {
var var2=false;
if (C$.e.d_) {
if ((var1 != -2 && var1 != 56  || !C$.a_[1] ) && (var1 != -1 && var1 != 50  || !C$.a_[0] ) && var1 != 42   && var1 != 48  && var1 != 35  && var1 != -6  && var1 != -7 ) {
if (C$.a_[0] && (var1 == -2 || var1 == 50 ) ) {
C$.e.k=0;
C$.e.l=0;
}C$.e.d_=false;
$I$(3).c$I(500);
for (var var3=0; var3 < C$.a_.length; var3++) {
C$.a_[var3]=false;
}
C$.a$S($I$(11).aH + $I$(11).aJ);
} else {
var2=true;
}}if (!var2 && (var1 == -2 || var1 == -1  || var1 == -3  || var1 == -4  || var1 == 50  || var1 == 52  || var1 == 54  || var1 == 56  || var1 == -7  || var1 == -6 ) ) {
for (var var4=0; var4 < C$.a_.length; var4++) {
C$.a_[var4]=false;
}
}switch (var1) {
case -7:
this.b$B(105);
return;
case -6:
this.b$B(103);
return;
case -5:
case 53:
C$.a_[4]=true;
return;
case -4:
case 54:
C$.a_[3]=true;
return;
case -3:
case 52:
C$.a_[2]=true;
return;
case -2:
case 56:
C$.e.l=0;
if (!C$.e.d_) {
C$.a_[1]=true;
}return;
case -1:
case 50:
C$.e.l=0;
if (!C$.e.d_) {
C$.a_[0]=true;
C$.e.k=0;
}return;
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
case 12:
case 13:
case 14:
case 15:
case 16:
case 17:
case 18:
case 19:
case 20:
case 21:
case 22:
case 23:
case 24:
case 25:
case 26:
case 27:
case 28:
case 29:
case 30:
case 31:
case 32:
case 33:
case 34:
case 36:
case 37:
case 38:
case 39:
case 40:
case 41:
case 43:
case 44:
case 45:
case 46:
case 47:
case 49:
case 51:
case 55:
default:
return;
case 35:
C$.e.f$();
return;
case 42:
C$.e.d$();
return;
case 48:
C$.e.e$();
}
}}, p$1);

Clazz.newMeth(C$, 'c$I',  function (var1) {
var var10000;
var var10001;
switch (var1) {
case -7:
var10000=this;
var10001=($b$[0] = 101, $b$[0]);
break;
case -4:
case -3:
case 52:
case 54:
var10000=this;
var10001=($b$[0] = 103, $b$[0]);
break;
case -2:
case 56:
if ($I$(12).a$Z(false)) {
return;
}return;
case -1:
case 50:
if ($I$(12).a$Z(true)) {
return;
}return;
default:
return;
}
var10000.b$B(var10001);
}, p$1);

Clazz.newMeth(C$, 'd$I',  function (var1) {
switch (var1) {
case -7:
if (C$.y >= $I$(11).ce.length - 1) {
return;
}break;
case -6:
case -5:
case 53:
if (C$.y < $I$(11).ce.length - 1) {
++C$.y;
p$1.a$S$Z.apply(this, [$I$(11).ce[C$.y], false]);
return;
}break;
case -2:
case 56:
if ($I$(12).a$Z(false)) {
return;
}return;
case -1:
case 50:
if ($I$(12).a$Z(true)) {
return;
}return;
default:
return;
}
this.at=true;
this.b$B(101);
C$.f=$I$(3).clockMs;
}, p$1);

Clazz.newMeth(C$, 'e$I',  function (var1) {
switch (var1) {
case -7:
this.b$B(106);
return;
case -6:
case -5:
case 53:
switch (this.aj) {
case 0:
this.b$B(104);
return;
case 1:
this.b$B(102);
return;
case 2:
this.b$B(112);
p$1.d$B.apply(this, [this.aj]);
return;
default:
return;
}
case -2:
case 56:
(($b$[0]=++this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj > 2) {
this.aj=($b$[0] = 0, $b$[0]);
return;
}break;
case -1:
case 50:
(($b$[0]=--this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj < 0) {
this.aj=($b$[0] = 2, $b$[0]);
return;
}}
}, p$1);

Clazz.newMeth(C$, 'f$I',  function (var1) {
var var10000;
switch (var1) {
case -7:
this.b$B(111);
return;
case -6:
case -5:
case 53:
 label35 : {
var var10001;
switch (this.aj) {
case 0:
var10000=this;
var10001=($b$[0] = 9, $b$[0]);
break;
case 1:
var10000=this;
var10001=($b$[0] = 5, $b$[0]);
break;
case 2:
var10000=this;
var10001=($b$[0] = 4, $b$[0]);
break;
default:
break label35;
}
var10000.be=var10001 - C$.e.x[this.aj];
}if (this.be == 0) {
$I$(9,"a$S$S",[$I$(11).aP, $I$(11).bg + C$.e$B(this.aj)]);
return;
}if (C$.e.t >= C$.f$B(this.aj)) {
C$.D=true;
var var2=$I$(11).aq;
var var3=$I$(11).ax + C$.e$B(this.aj) + "(s)" + $I$(11).az + " \n" + '\u0000' + " \n" + C$.C + " \n" + '\u0001' + " \n" + "$" + C$.C * C$.f$B(this.aj) ;
$I$(9).a$S$S(var2, var3);
return;
}$I$(9,"a$S$S",[$I$(11).ao, $I$(11).bU]);
return;
case -4:
case 54:
(($b$[0]=++this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj > 2) {
this.aj=($b$[0] = 0, $b$[0]);
}var10000=this;
break;
case -3:
case 52:
(($b$[0]=--this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj < 0) {
this.aj=($b$[0] = 2, $b$[0]);
}var10000=this;
break;
default:
return;
}
p$1.d$B.apply(var10000, [this.aj]);
}, p$1);

Clazz.newMeth(C$, 'g$I',  function (var1) {
switch (var1) {
case -6:
case -5:
case 53:
p$1.a$Z$Z.apply(this, [false, true]);
}
}, p$1);

Clazz.newMeth(C$, 'h$I',  function (var1) {
switch (var1) {
case -6:
case -5:
case 53:
var var10000;
var var10001;
if (!this.bd) {
var10000=this;
var10001=($b$[0] = 117, $b$[0]);
} else {
var10000=this;
var10001=($b$[0] = 101, $b$[0]);
}var10000.b$B(var10001);
default:
return;
case -2:
case 56:
$I$(12).a$Z(false);
return;
case -1:
case 50:
$I$(12).a$Z(true);
}
}, p$1);

Clazz.newMeth(C$, 'i$I',  function (var1) {
switch (var1) {
case -6:
case -5:
case 53:
this.b$B(101);
default:
return;
case -2:
case 56:
$I$(12).a$Z(false);
return;
case -1:
case 50:
$I$(12).a$Z(true);
}
}, p$1);

Clazz.newMeth(C$, 'keyReleased$I',  function (var1) {
if (C$.e != null ) {
try {
switch (var1) {
case -5:
case 53:
C$.a_[4]=false;
return;
case -4:
case 54:
C$.a_[3]=false;
return;
case -3:
case 52:
C$.a_[2]=false;
return;
case -2:
case 56:
if (!C$.e.d_) {
C$.a_[1]=false;
}return;
case -1:
case 50:
if (!C$.e.d_) {
C$.a_[0]=false;
C$.e.k=0;
}return;
}
} catch (var3) {
}
}});

Clazz.newMeth(C$, 'j$I',  function (var1) {
if (C$.B || C$.D ) {
var var2=false;
if (var1 == -1 || var1 == 50 ) {
var var5;
 label142 : {
var var3=false;
var var10000;
if (C$.D) {
if ((var5=(C$.e.t/C$.f$B(this.aj)|0)) <= this.be) {
break label142;
}var10000=this.be;
} else {
var10000=C$.e.B[C$.e.G];
}var5=var10000;
}if (C$.C < var5) {
++C$.C;
var2=true;
}} else if ((var1 == -2 || var1 == 56 ) && C$.C > 0 ) {
--C$.C;
var2=true;
}if (var2) {
var var6=(C$.D ? Clazz.new_($I$(13,1)).append$S($I$(11).ax).append$S(C$.e$B(this.aj)).append$S("(s)").append$S($I$(11).az).append$S(" \n").append$C("\u0000").append$S(" \n").append$I(C$.C).append$S(" \n").append$C("\u0001").append$S(" \n").append$S("$").append$I(C$.C * C$.f$B(this.aj)) : Clazz.new_($I$(13,1)).append$S($I$(11).aw).append$S($I$(11).bV[C$.e.G]).append$S($I$(11).ay).append$S(" \n").append$C("\u0000").append$S(" \n").append$I(C$.C).append$S(" \n").append$C("\u0001")).toString();
$I$(9,"b$S$S",[$I$(11).aq, var6]);
}}var var4;
 label160 : {
var4=($b$[0] = 2, $b$[0]);
var var7;
if (var1 == -3 || var1 == 52 ) {
var7=$I$(9).b;
} else if (var1 != -4 && var1 != 54 ) {
if (var1 != -5 && var1 != 53  && var1 != -6 ) {
break label160;
}var7=$I$(9).d;
} else {
var7=$I$(9).c;
}var4=$I$(9).a$I(var7);
}if (var4 != 2) {
switch (var4) {
case 0:
if (C$.z) {
C$.e.t=C$.e.t - $I$(14).c[this.T][this.aj];
C$.e.w[this.T]=this.aj;
C$.z=false;
this.b$B(102);
} else if (C$.B) {
C$.e.B[C$.e.G]=C$.e.B[C$.e.G] - C$.C;
C$.e.H=C$.e.H - C$.C;
C$.e.G=-1;
C$.C=0;
C$.B=false;
p$1.x.apply(this, []);
} else {
if (this.E) {
$I$(9,"a$S$S$I",[$I$(11).y, $I$(11).bq, 5000]);
this.repaint$();
this.serviceRepaints$();
C$.v$();
C$.b$Z(true);
this.E=false;
return;
}if (this.F) {
this.F=false;
if (!C$.aw) {
this.aY=true;
}p$1.a$Z$Z.apply(this, [false, false]);
} else if (C$.X) {
C$.X=false;
this.aY=false;
C$.z$();
this.b$B(114);
} else if (C$.D) {
C$.D=false;
C$.e.x[this.aj]=((C$.e.x[this.aj] + C$.C)|0);
if (!C$.e.y[this.aj] && C$.C > 0 ) {
$I$(9,"a$S$S",[$I$(11).aB, $I$(11).cd[this.aj]]);
C$.e.y[this.aj]=true;
}C$.e.t=C$.e.t - C$.f$B(this.aj) * C$.C;
C$.C=0;
p$1.d$B.apply(this, [this.aj]);
} else if (C$.A > -1) {
if (C$.au) {
C$.au=false;
var var8;
var var10001;
if (C$.A == 5) {
C$.e.t=-$I$(3).a$I(2000);
var8=$I$(11).bW[C$.A];
var10001=$I$(11).bY[C$.A] + C$.a$I$Z(C$.e.t, true);
} else {
var8=$I$(11).bW[C$.A];
var10001=$I$(11).bY[C$.A];
}$I$(9).b$S$S(var8, var10001);
return;
}switch (C$.A) {
case 0:
C$.e.C=true;
break;
case 1:
C$.e.t+=7000;
break;
case 2:
C$.e.t+=10000;
break;
case 3:
C$.e.t+=15000;
break;
case 4:
C$.e.F=true;
case 5:
case 8:
case 9:
default:
break;
case 6:
C$.e.t+=3000;
break;
case 7:
C$.e.t+=2500;
break;
case 10:
++C$.e.D;
}
C$.A=-1;
} else if (C$.aq) {
C$.aq=false;
if (C$.ar) {
C$.ar=false;
C$.as=true;
$I$(9,"a$S$S$Z",[$I$(11).af, $I$(11).bf, false]);
return;
}} else if (C$.as) {
C$.ap=true;
C$.as=false;
}}break;
case 1:
if (C$.as) {
C$.ap=false;
}C$.as=false;
C$.z=false;
C$.B=false;
this.E=false;
this.F=false;
}
$I$(9).b$();
}}, p$1);

Clazz.newMeth(C$, 'k$I',  function (var1) {
var var10000;
var var10001;
switch (var1) {
case -7:
var10000=this;
var10001=($b$[0] = 111, $b$[0]);
break;
case -6:
case -5:
case 53:
if (C$.t$I(this.aj) == 4) {
$I$(9,"a$S$S",[$I$(11).ar, $I$(11).as]);
return;
}this.T=this.aj;
var10000=this;
var10001=($b$[0] = 113, $b$[0]);
break;
case -2:
case 56:
(($b$[0]=++this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj > 4) {
this.aj=($b$[0] = 0, $b$[0]);
return;
}return;
case -1:
case 50:
(($b$[0]=--this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj < 0) {
this.aj=($b$[0] = 4, $b$[0]);
return;
}return;
default:
return;
}
var10000.b$B(var10001);
}, p$1);

Clazz.newMeth(C$, 'l$I',  function (var1) {
switch (var1) {
case -7:
this.b$B(102);
return;
case -6:
case -5:
case 53:
if (C$.e.t >= C$.c$B$B(($b$[0] = this.T, $b$[0]), this.aj)) {
C$.z=true;
var var2=$I$(11).bR + "'" + C$.b$B$B(($b$[0] = this.T, $b$[0]), this.aj) + "' " + $I$(11).ca[this.T] + "?" ;
$I$(9,"a$S$S$B$Z",[$I$(11).aq, var2, 2, false]);
return;
}$I$(9,"a$S$S",[$I$(11).ao, $I$(11).bT]);
break;
case -4:
case 54:
if (!this.V) {
return;
}(($b$[0]=++this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj > 4) {
this.aj=this.U;
}p$1.u$I.apply(this, [this.aj]);
return;
case -3:
case 52:
if (!this.V) {
return;
}(($b$[0]=--this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj < this.U) {
this.aj=($b$[0] = 4, $b$[0]);
}p$1.u$I.apply(this, [this.aj]);
return;
case -2:
case 56:
if ($I$(12).a$Z(false)) {
return;
}break;
case -1:
case 50:
if ($I$(12).a$Z(true)) {
return;
}}
}, p$1);

Clazz.newMeth(C$, 'm$I',  function (var1) {
switch (var1) {
case -7:
if ($I$(3).a == 104) {
this.b$B(111);
return;
}this.b$B(101);
return;
case -6:
case -5:
case 53:
if (!C$.e.l$()) {
if ($I$(3).a == 104) {
this.b$B(101);
return;
}return;
}if ($I$(3).a == 103) {
C$.e.j$();
return;
}C$.e.k$();
break;
case -4:
case -3:
case 52:
case 54:
if ($I$(3).a != 103) {
return;
}this.b$B(109);
break;
case -2:
case 56:
if ($I$(12).a$Z(false)) {
return;
}return;
case -1:
case 50:
if ($I$(12).a$Z(true)) {
return;
}return;
default:
return;
}
p$1.x.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'n$I',  function (var1) {
var var10000;
var var10001;
switch (var1) {
case -7:
this.b$B(101);
return;
case -6:
case -5:
case 53:
switch (this.aj) {
case 0:
this.b$B(101);
return;
case 1:
$I$(8).d=!$I$(8).d;
if (!$I$(8).d) {
this.l$();
} else {
this.e$();
}return;
case 2:
$I$(8).e=!$I$(8).e;
return;
case 3:
$I$(9,"a$S$S$B$Z",[$I$(11).aq, $I$(11).bQ, 2, false]);
this.F=true;
default:
return;
}
case -2:
case 56:
(($b$[0]=++this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj <= 3) {
return;
}var10000=this;
var10001=($b$[0] = 0, $b$[0]);
break;
case -1:
case 50:
(($b$[0]=--this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj < 0) {
var10000=this;
var10001=($b$[0] = 3, $b$[0]);
break;
}return;
default:
return;
}
var10000.aj=var10001;
}, p$1);

Clazz.newMeth(C$, 'o$I',  function (var1) {
var var10000;
var var10001;
switch (var1) {
case -7:
this.b$B(101);
return;
case -6:
case -5:
case 53:
switch (this.aj) {
case 0:
this.b$B(101);
return;
case 1:
this.b$B(111);
return;
case 2:
if (!C$.aw) {
$I$(9,"a$S$S$B$Z",[$I$(11).aq, $I$(11).bP, 2, false]);
this.E=true;
return;
}$I$(9,"a$S$S",[$I$(11).x, $I$(11).bm]);
return;
default:
return;
}
case -2:
case 56:
(($b$[0]=++this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj <= 2) {
return;
}var10000=this;
var10001=($b$[0] = 0, $b$[0]);
break;
case -1:
case 50:
(($b$[0]=--this.aj,this.aj=$b$[0],$b$[0]));
if (this.aj < 0) {
var10000=this;
var10001=($b$[0] = 2, $b$[0]);
break;
}return;
default:
return;
}
var10000.aj=var10001;
}, p$1);

Clazz.newMeth(C$, 'r$javax_microedition_lcdui_Graphics',  function (var1) {
var1.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.aL, 0, 0, 20);
var var3=1 + this.an.getWidth$() + 1 ;
var var4=0;
var var5=false;
var var6=false;
if (C$.e.z < (C$.e.g$()/3|0)) {
var5=true;
}if (C$.e.z < C$.e.g$() >> 2 && $I$(3).n ) {
var6=true;
}var var10005;
var var10006;
if (!var5) {
var10005=this.aD;
var10006=($b$[0] = 0, $b$[0]);
} else {
var10005=this.aD;
var10006=($b$[0] = 1, $b$[0]);
}C$.a$javax_microedition_lcdui_Graphics$I$I$I$I$IA$I$I$I$Z(var1, var3, 1, this.aU, 7, var10005[var10006], 0, C$.e.z, C$.e.g$(), var6);
var3=1 + this.an.getWidth$() + 1 ;
var var7;
var7=(var7=C$.a$I$I(C$.e.H, C$.e.i$())) < 50 ? 0 : (var7 < 75 ? 1 : 2);
var6=C$.e.H == C$.e.i$() && $I$(3).n ;
C$.a$javax_microedition_lcdui_Graphics$I$I$I$I$IA$I$I$I$Z(var1, var3, 10, this.aU, this.aM, this.aB[var7], 0, C$.e.H, C$.e.i$(), var6);
var3=this.aO;
var4=this.aQ;
var var8=Integer.toString$I(C$.e.e) + "m";
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I$I(var1, var8, var3, var4, 4);
var3=this.aP;
var4=this.aR;
var8=C$.a$J$Z(C$.e.g_, false);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I$I(var1, var8, var3, var4, 4);
var3=C$.bw - 1 - 45 ;
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, C$.e.x[0] + "", var3 + this.aV[0], 14);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, C$.e.x[1] + "", var3 + this.aV[1], 14);
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I(var1, C$.e.x[2] + "", var3 + this.aV[2], 14);
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.am, 1, 34, 20);
var3=1 + this.am.getWidth$() + 1 ;
var4=34 + ((this.am.getHeight$() >> 1) - (C$.J.g >> 1));
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I$I(var1, C$.a$I$Z(C$.e.t, false), var3, var4, 4);
}, p$1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$B$S$S',  function (var1, var2, var3, var4) {
var var5=0;
var var6=0;
var1.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
var var10000=0;
while (true){
var var7=var10000;
if (var10000 >= C$.bw) {
if (this.n[0].getHeight$() < C$.bh - 64) {
var1.setColor$I(C$.aF);
var1.fillRect$I$I$I$I(0, this.n[0].getHeight$(), C$.bw, C$.bh - 64 - this.n[0].getHeight$() );
}var5=0;
var6=C$.bh - 64;
for (var var14=0; var14 < (C$.bw/this.o[0].getWidth$()|0) + 1; var14++) {
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.o[0], var5, var6, 20);
var5+=this.o[0].getWidth$();
}
for (var var15=0; var15 < 1; var15++) {
var var10=0;
var6+=32;
for (var var8=0; var8 < (C$.bw/32|0) + 1; var8++) {
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.o[4], var10, var6, 20);
var10+=32;
}
}
for (var var16=0; var16 < this.p.length; var16++) {
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.o[1], this.p[var16], this.q[var16], 20);
}
if (var2 != 6 && $I$(3).a != 108 ) {
var var17=($b$[0] = ((this.o[3].getWidth$()/3|0)), $b$[0]);
C$.a$javax_microedition_lcdui_Graphics$javax_microedition_lcdui_Image$B$I$I$I(var1, this.o[3], var17, 0, 0, C$.bw);
}if ($I$(3).a != 108) {
if ($I$(9).a$()) {
var3=$I$(11).Z;
var4="";
}p$1.a$javax_microedition_lcdui_Graphics$S$S.apply(this, [var1, var3, var4]);
}if ($I$(3).a != 108) {
++$I$(7).effectFrame;
for (var var18=0; var18 < 10; var18++) {
var5=$I$(3).b$I(C$.bw);
var6=C$.bh - 64;
if ($I$(3).b$() && $I$(7).effectFrame % 15 == 0 ) {
$I$(7,"a$I$I",[var5 + $I$(3).b$I(6), var6 + $I$(3).b$I(6)]);
}}
}return true;
}var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.n[0], var7, 0, 20);
var10000=var7 + this.n[0].getWidth$();
}
});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$S$S',  function (var1, var2, var3) {
var var5=0;
var var6=C$.bh - (this.ag >> 1) - (C$.J.g >> 1) ;
if (var2 != null  && var2 !== ""  ) {
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I$I(var1, var2, 2, var6, 4);
}if (var3 != null  && var3 !== ""  ) {
var5=C$.bw - 2;
C$.J.a$javax_microedition_lcdui_Graphics$S$I$I$I(var1, var3, var5, var6, 8);
}}, p$1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$I$Z',  function (var1, var2, var3) {
var1.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
var var5=0;
var5=(C$.bw >> 1) - (this.aG >> 1);
if (var3 && !this.a$() ) {
if (this.k == null ) {
this.k=$I$(3).a$S("/res/selected.png");
}var var6=(this.k.getWidth$()/3|0);
C$.a$javax_microedition_lcdui_Graphics$javax_microedition_lcdui_Image$B$I$I$I(var1, this.k, ($b$[0] = var6, $b$[0]), var5, var2, this.aG);
}var1.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
return C$.bw >> 1;
});

Clazz.newMeth(C$, 'a$',  function () {
return this.S;
});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics',  function (var1) {
var1.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
var var2=0;
var var3=0;
var var10000=0;
while (true){
var var4=var10000;
if (var10000 >= C$.bw) {
if (this.n[0].getHeight$() < C$.bh) {
var1.setColor$I(C$.aF);
var1.fillRect$I$I$I$I(0, this.n[0].getHeight$(), C$.bw, C$.bh - this.n[0].getHeight$());
}var2=C$.bw - this.n[1].getWidth$() >> 1;
var3=C$.bh - this.n[1].getHeight$() >> 1;
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.n[1], var2, var3, 20);
var2=C$.bw - this.n[2].getWidth$() >> 1;
var3=C$.bh + this.n[1].getHeight$() >> 1;
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.n[2], var2, var3, 20);
var2=(C$.bw - this.n[1].getWidth$() >> 1) + 79;
var3=(C$.bh + this.n[1].getHeight$() >> 1) - 27;
var1.setClip$I$I$I$I(var2, var3, 31, $I$(15).L.getHeight$());
var1.drawImage$javax_microedition_lcdui_Image$I$I$I($I$(15).L, var2, var3, 20);
for (var var13=0; var13 < 1; var13++) {
if ($I$(3).b$()) {
++$I$(7).effectFrame;
if ($I$(7).effectFrame % 5 == 0) {
$I$(7,"a$I$I",[var2 + $I$(3).b$I(6), var3 + $I$(3).b$I(6)]);
}}}
for (var var14=0; var14 < 10; var14++) {
var2=$I$(3).b$I(C$.bw);
var3=C$.bh;
if ($I$(3).b$() && $I$(7).effectFrame % 8 == 0 ) {
$I$(7,"a$I$I",[var2 + $I$(3).b$I(6), var3 + $I$(3).b$I(6)]);
}}
var1.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
return;
}var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.n[0], var4, 0, 20);
var10000=var4 + this.n[0].getWidth$();
}
});

Clazz.newMeth(C$, 'b$',  function () {
return null;
});

Clazz.newMeth(C$, 'a$Z$Z',  function (var1, var2) {
if (this.aY) {
C$.z$();
this.aY=false;
}if (var2 || !var1 ) {
this.gWorld=null;
if (C$.e != null ) {
$I$(10).a$aquadig_e(C$.e);
C$.e=null;
System.gc$();
}}try {
p$1.r.apply(this, []);
this.L=Clazz.new_([this, C$.bw, C$.bh, C$.J, C$.K, var1 ? -1 : (!var2 ? 2 : 8)],$I$(8,1).c$$aquadig_d$I$I$com_vlm_redstar_client_ui_c$com_vlm_redstar_client_ui_c$I);
this.M=$I$(8).q;
this.N=C$.bh - $I$(8).O;
this.P=$I$(8).m;
this.O=C$.bh - (this.ag + this.N + 4 );
if ($I$(8).d && var2 ) {
this.e$();
}this.b$B(100);
} catch (var4) {
this.c$$();
}
}, p$1);

Clazz.newMeth(C$, 'r',  function () {
$I$(8).p=18;
$I$(8).q=5;
$I$(8).L=Clazz.array(Byte.TYPE, -1, [2, 3, 1, 4, 0]);
$I$(8).p+=5;
$I$(8).r=1;
$I$(8).k=($b$[0] = 2, $b$[0]);
$I$(8).K=this.aG - 10;
try {
if (this.k == null ) {
this.k=$I$(3).a$S("/res/selected.png");
}$I$(8).I=this.k.getHeight$();
} catch (var2) {
}
$I$(8).F=true;
$I$(8).J=($b$[0] = 1, $b$[0]);
$I$(8).h=10;
$I$(8).R=Clazz.array(Integer.TYPE, -1, [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 42, 35, -1, -2, -3, -4, -6, -7, -5, -8]);
}, p$1);

Clazz.newMeth(C$, 'c$$',  function () {
this.H.destroyApp$Z(false);
});

Clazz.newMeth(C$, 'b$javax_microedition_lcdui_Graphics',  function (var1) {
var var2=C$.J.a$java_util_Vector(this.aI);
var var3=(C$.bh >> 1) - (var2 >> 1);
var var4=this.G;
var var5=$I$(8).r;
var1.setClip$I$I$I$I(0, 0, C$.bw, C$.bh - this.ag);
C$.J.a$javax_microedition_lcdui_Graphics$java_util_Vector$I$I$I(var1, this.aI, C$.bw >> 1, var4, 1);
if (this.G > var3) {
this.G-=var5;
if (this.G < var3) {
this.G=var3;
}}});

Clazz.newMeth(C$, 'd$',  function () {
C$.Q=C$.bh;
});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$B',  function (var1, var2) {
return this.R ? $I$(7).a$javax_microedition_lcdui_Graphics$B(var1, var2) : true;
});

Clazz.newMeth(C$, 'e$',  function () {
$I$(3).a$B$I(0, -1);
});

Clazz.newMeth(C$, 'a$B$B',  function (var1, var2) {
if (var1 == 4) {
if (var2 == 1) {
$I$(8).M=true;
} else {
$I$(8).M=false;
}} else if (var1 == 6) {
this.G=C$.bh;
this.aH=true;
this.aI=C$.J.a$S$I($I$(11).d + " \n" + $I$(11).c + " \n\n" + $I$(11).e + ": " + this.H.l + " \n" + $I$(11).f + ": " + this.H.m , C$.bw - 20);
$I$(3).a$B$I(1, 1);
} else if (this.aH) {
this.aH=false;
if (this.aI != null ) {
this.aI=null;
}}if (var1 == 0) {
$I$(7).b$();
}C$.aE=var1 == 1;
if (C$.ao == 6) {
$I$(3).a$B$I(0, -1);
}C$.ao=var1;
});

Clazz.newMeth(C$, 'a$Z',  function (var1) {
if (this.L != null ) {
this.L.a$();
this.L=null;
System.gc$();
}C$.aA=var1;
this.b$B(116);
});

Clazz.newMeth(C$, 's',  function () {
this.gImg=$I$(3).a$S("/res/vlmintro.png");
this.hImg=$I$(3).a$S("/res/updownarrows.png");
this.i=$I$(3).a$S("/res/menuIcons.png");
this.l=$I$(3).a$S("/res/menuArrows.png");
this.j=$I$(3).a$S("/res/secondaryMenuIcons.png");
this.k=$I$(3).a$S("/res/selected.png");
this.n[0]=$I$(3).a$S("/res/splash_gradient.png");
this.n[1]=$I$(3).a$S("/res/splash_title.png");
this.n[2]=$I$(3).a$S("/res/splash_subtitle.png");
var var1=$I$(3).a$S("/res/seabed.png");
this.o[0]=$I$(2).createImage$javax_microedition_lcdui_Image$I$I$I$I$I(var1, 0, 0, 32, 32, 0);
this.o[4]=$I$(2).createImage$javax_microedition_lcdui_Image$I$I$I$I$I(var1, 32, 0, 32, 32, 0);
this.o[1]=$I$(3).a$S("/res/seaweed.png");
this.o[2]=$I$(3).a$S("/res/lowerbar.png");
this.o[3]=$I$(3).a$S("/res/upperbar.png");
this.an=$I$(3).a$S("/res/o2tank.png");
C$.v=$I$(3).a$S("/res/depth.png");
C$.w=$I$(3).a$S("/res/clock.png");
C$.x=$I$(3).a$S("/res/bomb.png");
this.ak=$I$(3).a$S("/res/booster.png");
this.al=$I$(3).a$S("/res/oxygenTankSmall.png");
this.am=$I$(3).a$S("/res/coins.png");
$I$(3).a$S("/res/scope.png");
System.gc$();
}, p$1);

Clazz.newMeth(C$, 't',  function () {
try {
var var1="_!#$%*,-./0123456789:;<=>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()\'+@\u00e0\u00e2\u00e7\u00e9\u00f1\u00f4\u00e4\u00f6\u00fc\u00e1\u00ed\u00a1\u00f3\u00bf\u00fa\u00c0\u00c4\u00df\u00dc\u00c1\u00c9\u00d3\u00f9\u00e8\u00ef\u00cd\u00c8\u00dc\u00ea\u00da\u0000\u0001\u00f2\u00d6\u017d\u017e\u00c3\u00e3\u00d5\u00fd\u0160\u0161\u00c7\u00f5";
var var2=Clazz.array(Short.TYPE, -1, [0, 7, 11, 20, 30, 40, 48, 53, 59, 63, 69, 77, 82, 90, 98, 106, 114, 122, 129, 137, 144, 148, 153, 159, 166, 172, 179, 187, 195, 203, 211, 219, 227, 235, 243, 247, 254, 262, 269, 280, 288, 296, 304, 312, 320, 328, 336, 344, 352, 363, 371, 379, 387, 394, 401, 408, 415, 422, 428, 435, 442, 446, 451, 458, 462, 472, 479, 486, 493, 500, 506, 513, 519, 526, 533, 543, 550, 557, 563, 569, 575, 578, 585, 595, 602, 609, 616, 623, 630, 637, 644, 651, 658, 665, 669, 673, 680, 687, 694, 702, 710, 718, 726, 734, 742, 750, 757, 764, 769, 775, 783, 791, 798, 806, 815, 824, 831, 839, 847, 853, 861, 868, 876, 883, 891, 898, 906]);
C$.J=Clazz.new_([$I$(3).a$S("/res/smallFont.png"), this.hImg, var1, var2, 0, 3, C$.bw, C$.bh],$I$(12,1).c$$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$S$HA$I$I$I$I);
var1="ABCDEFGHIJKLMNOPQRSTUVWXYZ-.\u00c7\u00dc\u00cd\u00c1\u00da\u00d5\u00c3";
var2=Clazz.array(Short.TYPE, -1, [0, 15, 28, 40, 52, 63, 74, 86, 99, 104, 115, 128, 140, 156, 169, 181, 193, 205, 218, 230, 242, 255, 268, 286, 299, 312, 324, 332, 336, 348, 361, 366, 381, 394, 406]);
C$.K=Clazz.new_([$I$(3).a$S("/res/titleFont.png"), this.hImg, var1, var2, 1, 3, C$.bw, C$.bh],$I$(12,1).c$$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$S$HA$I$I$I$I);
} catch (var3) {
}
}, p$1);

Clazz.newMeth(C$, 'u',  function () {
this.m=$I$(3).a$S("/res/popupArrows.png");
this.r=$I$(3).a$S("/res/left.png");
this.s=$I$(3).a$S("/res/right.png");
this.t=$I$(3).a$S("/res/top.png");
this.u=$I$(3).a$S("/res/bottom.png");
C$.I=Clazz.new_($I$(9,1).c$$com_vlm_redstar_client_ui_c$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$javax_microedition_lcdui_Image$I$I$I$B,[C$.J, this.t, this.u, this.r, this.s, this.m, C$.bw, C$.bh, 28415, 0]);
$I$(9).a$B(15);
}, p$1);

Clazz.newMeth(C$, 'f$',  function () {
if (C$.I != null ) {
$I$(9).c$$();
C$.I=null;
}this.gWorld=null;
C$.e=null;
C$.J=null;
C$.K=null;
this.gImg=null;
this.hImg=null;
this.m=null;
this.l=null;
this.n=null;
this.o=null;
this.r=null;
this.s=null;
this.t=null;
this.u=null;
C$.v=null;
C$.w=null;
this.ak=null;
this.al=null;
C$.x=null;
this.an=null;
this.am=null;
this.aL=null;
$I$(3).i=null;
$I$(3).k=($b$[0] = -1, $b$[0]);
if (this.L != null ) {
this.L.a$();
this.L=null;
}$I$(10).o$();
$I$(4).a$();
System.gc$();
});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$javax_microedition_lcdui_Image$B$I$I$I',  function (var0, var1, var2, var3, var4, var5) {
var var8=var1.getHeight$();
var var9=var5 - var2;
var var11=var2;
var var7=var4;
var0.setClip$I$I$I$I(var3, var4, var2, var8);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(var1, var3, var4, 20);
var var10=var2 + var2;
var var6;
var var10000=var6=var3 + var2;
while (true){
var var12=var10000;
if (var10000 >= var3 + var5 - var2) {
var6=var3 + var5;
var0.setClip$I$I$I$I(var6 - var2, var7, var2, var8);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(var1, var6, var7, 24);
var0.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
return;
}if (var10 > var9) {
var11=var5 - var10;
}var0.setClip$I$I$I$I(var12, var7, var11, var8);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(var1, var12 - var2, var7, 20);
var10+=var2;
var10000=var12 + var2;
}
}, 1);

Clazz.newMeth(C$, 'g$',  function () {
try {
var var1;
var var2=(var1=$I$(16).openRecordStore$S$Z("AD_RMS_SAVED", false)).enumerateRecords$javax_microedition_rms_RecordFilter$javax_microedition_rms_RecordComparator$Z(null, null, false);
var var3=Clazz.new_([var2.nextRecord$()],$I$(17,1).c$$BA);
var var4=Clazz.new_($I$(18,1).c$$java_io_InputStream,[var3]);
try {
this.W=var4.readBoolean$();
} catch (var6) {
if (Clazz.exceptionOf(var6,"java.io.IOException")){
} else {
throw var6;
}
}
var1.closeRecordStore$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreNotFoundException")){
var var7 = e$$;
{
C$.b$Z(false);
}
} else if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreException")){
var var8 = e$$;
{
}
} else {
throw e$$;
}
}
return this.W;
});

Clazz.newMeth(C$, 'b$Z',  function (var0) {
try {
var var1=Clazz.new_($I$(19,1));
Clazz.new_($I$(20,1).c$$java_io_OutputStream,[var1]).writeBoolean$Z(var0);
try {
$I$(16).deleteRecordStore$S("AD_RMS_SAVED");
} catch (var4) {
if (Clazz.exceptionOf(var4,"javax.microedition.rms.RecordStoreException")){
} else {
throw var4;
}
}
var var3;
(var3=$I$(16).openRecordStore$S$Z("AD_RMS_SAVED", true)).addRecord$BA$I$I(var1.toByteArray$(), 0, var1.size$());
var3.closeRecordStore$();
} catch (var5) {
}
}, 1);

Clazz.newMeth(C$, 'v$',  function () {
try {
var var6=Clazz.new_($I$(19,1));
var var7;
(var7=Clazz.new_($I$(20,1).c$$java_io_OutputStream,[var6])).writeShort$I($I$(6).b);
var7.writeByte$I(C$.e.w[0]);
var7.writeByte$I(C$.e.w[1]);
var7.writeByte$I(C$.e.w[2]);
var7.writeByte$I(C$.e.w[3]);
var7.writeByte$I(C$.e.w[4]);
var7.writeBoolean$Z(C$.e.C);
var7.writeByte$I(C$.e.D);
var7.writeInt$I(C$.e.t);
var7.writeInt$I(C$.e.H);
var7.writeLong$J(C$.e.g_);
var7.writeInt$I(C$.e.f);
var7.writeInt$I(C$.e.E);
for (var var8=0; var8 < C$.e.B.length; var8++) {
var7.writeInt$I(C$.e.B[var8]);
}
for (var var14=0; var14 < C$.e.x.length; var14++) {
var7.writeByte$I(C$.e.x[var14]);
}
for (var var15=0; var15 < $I$(6).a_.length; var15++) {
var7.writeByte$I($I$(6).a_[var15]);
}
for (var var16=0; var16 < C$.e.N.length; var16++) {
var7.writeBoolean$Z(C$.e.N[var16]);
}
var7.writeLong$J($I$(6).h_);
var var17;
var var9=(var17=$I$(6).a$Z(true))[0];
var var10=var17[1];
var7.writeInt$I(var9.length);
for (var var11=0; var11 < var9.length; var11++) {
var7.writeByte$I(var9[var11]);
var7.writeShort$I(var10[var11]);
}
System.gc$();
if (!C$.aw) {
$I$(9,"b$S$S",[$I$(11).ak, $I$(11).aj]);
}try {
$I$(16).deleteRecordStore$S("AD_RMS");
} catch (var12) {
if (Clazz.exceptionOf(var12,"javax.microedition.rms.RecordStoreException")){
} else {
throw var12;
}
}
var var18;
(var18=$I$(16).openRecordStore$S$Z("AD_RMS", true)).addRecord$BA$I$I(var6.toByteArray$(), 0, var6.size$());
var18.closeRecordStore$();
} catch (var13) {
}
}, 1);

Clazz.newMeth(C$, 'w',  function () {
try {
var var1;
var var2=(var1=$I$(16).openRecordStore$S$Z("AD_RMS", false)).enumerateRecords$javax_microedition_rms_RecordFilter$javax_microedition_rms_RecordComparator$Z(null, null, false);
var var3=Clazz.new_([var2.nextRecord$()],$I$(17,1).c$$BA);
var var4=Clazz.new_($I$(18,1).c$$java_io_InputStream,[var3]);
try {
$I$(6).b=var4.readShort$();
C$.e.w[0]=var4.readByte$();
C$.e.w[1]=var4.readByte$();
C$.e.w[2]=var4.readByte$();
C$.e.w[3]=var4.readByte$();
C$.e.w[4]=var4.readByte$();
C$.e.C=var4.readBoolean$();
C$.e.D=var4.readByte$();
C$.e.t=var4.readInt$();
C$.e.H=var4.readInt$();
C$.e.g_=var4.readLong$();
C$.e.f=var4.readInt$();
C$.e.E=var4.readInt$();
for (var var5=0; var5 < C$.e.B.length; var5++) {
C$.e.B[var5]=var4.readInt$();
}
for (var var12=0; var12 < C$.e.x.length; var12++) {
C$.e.x[var12]=var4.readByte$();
}
for (var var13=0; var13 < $I$(6).a_.length; var13++) {
$I$(6).a_[var13]=var4.readByte$();
}
for (var var14=0; var14 < C$.e.N.length; var14++) {
C$.e.N[var14]=var4.readBoolean$();
}
this.bc=true;
$I$(6).h_=var4.readLong$();
var var15;
var var6=Clazz.array(Byte.TYPE, [var15=var4.readInt$()]);
var var7=Clazz.array(Short.TYPE, [var15]);
for (var var8=0; var8 < var15; var8++) {
var6[var8]=var4.readByte$();
var7[var8]=var4.readShort$();
}
$I$(6).a$Z$BA$HA(true, var6, var7);
System.gc$();
$I$(6).b$Z(true);
this.bd=true;
System.gc$();
} catch (var9) {
}
var1.closeRecordStore$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreNotFoundException")){
var var10 = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreException")){
var var11 = e$$;
{
if (!this.bc) {
p$1.d$Z.apply(this, [false]);
}if (!this.bd) {
p$1.d$Z.apply(this, [true]);
}}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'a$I$Z',  function (var0, var1) {
var var2;
for (var var3=(var2=Clazz.new_([Integer.toString$I(Math.abs(var0))],$I$(13,1).c$$S)).length$() - 3; var3 > 0; var3-=3) {
var2.insert$I$S(var3, ",");
}
return var1 ? (var0 < 0 ? "-" : "") + "$" + var2.toString()  : (var0 < 0 ? "-" : "") + var2.toString();
}, 1);

Clazz.newMeth(C$, 'p$I',  function (var1) {
this.b$B(108);
this.ae=var1;
this.af=0;
}, p$1);

Clazz.newMeth(C$, 'h$',  function () {
++this.af;
this.repaint$();
this.serviceRepaints$();
});

Clazz.newMeth(C$, 'a$J$Z',  function (var0, var2) {
var var3=null;
var var4=1000;
var var6=Long.$mul(60,var4);
var var8=Long.$mul(60,var6);
var var10=Long.$div(var0,var8);
var var18;
var var12=Long.$div((var18=Long.$sub(var0,Long.$mul(var10,var8))),var6);
var var14=Long.$div((var0=Long.$sub(var18,Long.$mul(var12,var6))),var4);
var var20;
var var16=var20=Long.$sub(var0,Long.$mul(var14,var4));
return (var2 ? Clazz.new_($I$(13,1)).append$J(var10).append$S("h ").append$J(var12).append$S("m ").append$J(var14).append$S("s ").append$J(var16) : (Long.$gt(var10,0 ) ? Clazz.new_($I$(13,1)).append$J(var10).append$S("h ").append$J(var12).append$S("m ") : (Long.$gt(var12,0 ) ? Clazz.new_($I$(13,1)).append$J(var12).append$S("m ") : Clazz.new_($I$(13,1)))).append$J(var14).append$S("s")).toString();
}, 1);

Clazz.newMeth(C$, 'a$I',  function (var0) {
var var2=$I$(6).d$I(var0);
var var1;
C$.a$S$I(var1=$I$(11).bV[var2], var0);
}, 1);

Clazz.newMeth(C$, 'a$S',  function (var0) {
var var1=C$.e.T * 32 + C$.e.S;
C$.a$S$I(var0, var1);
}, 1);

Clazz.newMeth(C$, 'a$S$I',  function (var0, var1) {
 label14 : {
var var2=(var1/32|0);
var var3;
C$.aa=(var3=var1 % 32) * 32 + $I$(6).l + 16;
C$.ab=var2 * 32 + $I$(6).m - 13;
C$.ac=var0;
var var4=C$.J.a$S(C$.ac);
var var10000;
if (C$.aa - (var4 >> 1) < 0) {
var10000=(var4 >> 1) + 2;
} else {
if (C$.aa + (var4 >> 1) <= C$.bw) {
break label14;
}var10000=C$.bw - (var4 >> 1) - 2 ;
}C$.aa=var10000;
}C$.ad=0;
}, 1);

Clazz.newMeth(C$, 'i$',  function () {
C$.b$Z(false);
for (var var1=0; var1 < 7; var1++) {
C$.aW[var1]=(0|0);
}
C$.ba=0;
C$.z$();
});

Clazz.newMeth(C$, 'j$',  function () {
return Clazz.array(String, -1, [$I$(11).L, $I$(11).M, $I$(11).V, $I$(11).Z, $I$(11).N, $I$(11).O, $I$(11).P, $I$(11).Q, $I$(11).R, $I$(11).U, $I$(11).bQ, $I$(11).J, $I$(11).K, $I$(11).I, $I$(11).aS, $I$(11).S, $I$(11).bu, $I$(11).bv, $I$(11).bw, $I$(11).bx, $I$(11).by, $I$(11).bz, $I$(11).aK, $I$(11).bB, $I$(11).bA, $I$(11).bC, $I$(11).bD, $I$(11).bE, $I$(11).bF, $I$(11).bG, $I$(11).bH, $I$(11).bI, $I$(11).bJ, $I$(11).bK, $I$(11).bL, $I$(11).bu, "use the up and down keys to enter name:", $I$(11).aO, $I$(11).bt, $I$(11).aM, $I$(11).aV, $I$(11).j, $I$(11).j, $I$(11).T, $I$(11).z, $I$(11).w, $I$(11).P, $I$(11).Q, $I$(11).I, $I$(11).bv, $I$(11).bM, $I$(11).bs, $I$(11).g, $I$(11).o, $I$(11).h, $I$(11).p, $I$(11).i, $I$(11).q, $I$(11).j, $I$(11).r, $I$(11).k, $I$(11).s, $I$(11).l, $I$(11).t, $I$(11).m, $I$(11).u, $I$(11).n, $I$(11).v]);
});

Clazz.newMeth(C$, 'k$',  function () {
if (!this.aZ) {
p$1.B.apply(this, []);
}var var1="";
for (var var2=0; var2 < 7; var2++) {
if (var2 != 0) {
var1=var1 + " \n\n";
}var1=var1 + $I$(11).cf[var2];
var1=var1 + " \n" + C$.aW[var2] ;
if (var2 == 6) {
var1=var1 + "m";
}}
return var1 + " \n\n" + $I$(11).cf[7] + " \n" + C$.a$I$Z(C$.ba, false) + "pts" ;
});

Clazz.newMeth(C$, 'a$B',  function (var1) {
$I$(3).c=Clazz.new_($I$(11,1).c$$B,[var1]);
});

Clazz.newMeth(C$, 'l$',  function () {
this.c$Z(false);
});

Clazz.newMeth(C$, 'c$Z',  function (var1) {
if (!var1) {
$I$(3).a$();
}});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$I$I$I$I$IA$I$I$I$Z',  function (var0, var1, var2, var3, var4, var5, var6, var7, var8, var9) {
var var10=var1 + 1;
var var11=var2 + 1;
var var12=var7 == 0 ? 0 : (var7 * (var3 - 2)/var8|0);
var var13=var4 - 2;
var0.setClip$I$I$I$I(0, 0, C$.bw, C$.bh);
var0.setColor$I(var6);
var0.drawRect$I$I$I$I(var1, var2, var3, var4);
if (!var9 && var12 > 0 ) {
var0.setColor$I(var5[0]);
var0.fillRect$I$I$I$I(var10, var11, var12 + 1, var13);
var0.setColor$I(var5[1]);
var0.drawLine$I$I$I$I(var10, var11, var10 + var12, var11);
var0.setColor$I(var5[2]);
var11+=var13;
var0.drawLine$I$I$I$I(var10, var11, var10 + var12, var11);
}}, 1);

Clazz.newMeth(C$, 'a$I$I',  function (var0, var1) {
if (var0 != 0 && var0 != 50  && var0 != 100 ) {
var var2=false;
var var3=C$.b$I$I(C$.r$I(var0), C$.r$I(var1));
return C$.q$I(C$.c$I$I(C$.r$I(100), var3)) + 1;
} else {
return var0;
}}, 1);

Clazz.newMeth(C$, 'q$I',  function (var0) {
return var0 >> 16;
}, 1);

Clazz.newMeth(C$, 'r$I',  function (var0) {
return var0 << 16;
}, 1);

Clazz.newMeth(C$, 'b$I$I',  function (var0, var1) {
return var1 == 0 ? 2147483647 : Long.$ival((Long.$sr(Long.$div((Long.$sl(var0,32)),var1),16)));
}, 1);

Clazz.newMeth(C$, 'c$I$I',  function (var0, var1) {
return Long.$ival((Long.$sr(Long.$mul(var0,var1),16)));
}, 1);

Clazz.newMeth(C$, 'x',  function () {
var var1="";
var var3=true;
if ($I$(3).a == 109) {
if (C$.e.m$()) {
var var15=($b$[0] = 0, $b$[0]);
for (var var17=0; var17 < C$.e.x.length; var17++) {
if ((var15=C$.e.x[var17]) > 0) {
if (!var3) {
var1=var1 + " \n\n";
}var1=var1 + var15 + "x " + " " ;
var1=var1 + C$.e$B(($b$[0] = var17, $b$[0])) + " \n" ;
var1=var1 + $I$(11).aY + $I$(11).b[var17] + ")" ;
var3=false;
}}
var var18=this.N + C$.J.g + (C$.J.g >> 1) ;
var var6=this.O - (C$.J.g + (C$.J.g >> 1));
C$.J.a$S$I$I$I$I$Z(var1, C$.ai, var18, C$.ah, var6, true);
} else {
var1=$I$(11).aX + " \n\n" + $I$(11).aN + C$.a$I$Z(C$.e.t, true) ;
this.aI=C$.J.a$S$I(var1, C$.ah);
}} else if (!C$.e.l$()) {
if (C$.e.v) {
var1=$I$(11).aW + C$.a$I$Z(C$.e.u, true) + " \n\n" + $I$(11).aN + C$.a$I$Z(C$.e.t, true) ;
this.aI=C$.J.a$S$I(var1, C$.ah);
} else {
var1=$I$(11).ah + " \n\n" + (C$.e.i$() - C$.e.H) + $I$(11).ai + " \n\n" + $I$(11).aN + C$.a$I$Z(C$.e.t, true) ;
this.aI=C$.J.a$S$I(var1, C$.ah);
}} else {
for (var var4=0; var4 < C$.e.B.length; var4++) {
var var2;
if ((var2=C$.e.B[var4]) > 0) {
if (!var3) {
var1=var1 + " \n\n";
}var1=var1 + var2 + "x " + " " ;
var1=var1 + $I$(11).bV[var4];
var1=var1 + " \n(" + C$.a$I$Z($I$(14).f[var4] * var2, true) + " " + $I$(11).aU + ")" ;
var3=false;
}}
var var14=this.N + C$.J.g * 2 + (C$.J.g >> 1);
var var5=C$.bh - var14 - this.ag ;
C$.J.a$S$I$I$I$I$Z(var1, C$.ai, var14, C$.ah, var5, true);
}}, p$1);

Clazz.newMeth(C$, 'a$S$Z',  function (var1, var2) {
var var10000;
var var10001;
if (var1 != null  && var1 !== ""  ) {
var10000=C$.J;
var10001=var1;
} else {
var10000=C$.J;
var10001="INVALID TEXT PASSED";
}var10000.a$S$I$I$I$I$Z(var10001, C$.ai, this.N, C$.ah, this.O, var2);
}, p$1);

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics$I$I$Z',  function (var1, var2, var3, var4) {
var1.setClip$I$I$I$I(var2, var3, this.l.getWidth$() >> 1, this.l.getHeight$());
var var7=var4 ? 0 : this.l.getWidth$() >> 1;
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(this.l, var2 - var7, var3, 20);
}, p$1);

Clazz.newMeth(C$, 'b$B',  function (var1) {
this.av=$I$(3).a;
$I$(3).a=var1;
C$.J.c$$();
this.aI=null;
this.aj=($b$[0] = 0, $b$[0]);
var var10000;
var var10001;
switch (var1) {
case 101:
C$.e.v=false;
C$.e.c_=false;
if (this.at) {
C$.e.z=C$.e.g$();
C$.e.Q=$I$(6).b + $I$(6).c_ - 15 - 3;
C$.e.R=$I$(6).a$I(3);
C$.e.k=0;
this.at=false;
$I$(6).p=true;
$I$(6).a$aquadig_e$Z(C$.e, true);
}if (this.av == 106 || this.av == 104 ) {
if ($I$(8).d) {
this.e$();
}return;
}return;
case 102:
case 105:
case 107:
case 108:
case 111:
case 112:
case 116:
default:
return;
case 103:
case 104:
case 109:
p$1.x.apply(this, []);
return;
case 106:
this.at=true;
C$.ad=21;
if ($I$(8).d && $I$(3).k != 2 ) {
this.c$Z(false);
$I$(3).a$B$I(2, -1);
return;
}return;
case 110:
C$.y=0;
this.at=true;
var10000=this;
var10001=$I$(11).ce[C$.y];
break;
case 113:
this.U=($b$[0] = C$.t$I(this.T), $b$[0]);
(($b$[0]=++this.U,this.U=$b$[0],$b$[0]));
this.aj=this.U;
var var7;
if (this.U == 4) {
var10000=this;
var7=false;
} else {
var10000=this;
var7=true;
}var10000.V=var7;
p$1.u$I.apply(this, [this.aj]);
return;
case 114:
this.bb=C$.C$();
this.c$B(7);
var var2=C$.ax ? $I$(11).aQ : $I$(11).bh;
var2=var2 + " \n\n" + $I$(11).bi + C$.a$I$Z(this.bb, false) + "pts" ;
var2=var2 + " \n\n" + $I$(11).bk + C$.a$I$Z(C$.e.f, false) + "m" ;
var2=var2 + " \n\n" + $I$(11).bj + C$.a$J$Z(C$.e.h_, false) ;
this.aI=C$.J.a$S$I(var2, C$.ah);
return;
case 115:
this.aI=C$.J.a$S$I($I$(11).bn, C$.ah);
return;
case 117:
var10000=this;
var10001=$I$(11).bp;
break;
case 118:
var10000=this;
var10001=$I$(11).bo;
}
p$1.a$S$Z.apply(var10000, [var10001, false]);
});

Clazz.newMeth(C$, 'd$B',  function (var1) {
this.aI=C$.J.a$S$I(C$.g$B(var1) + " \n\n" + $I$(11).am + C$.a$I$Z(C$.f$B(var1), true) + " \n(" + C$.s$I(var1) + $I$(11).aZ + ")" + " \n\n" + $I$(11).aN + C$.a$I$Z(C$.e.t, true) , C$.ah);
}, p$1);

Clazz.newMeth(C$, 'd$Z',  function (var1) {
if (var1) {
this.gWorld=Clazz.new_($I$(6,1).c$$Z,[false]);
if ((C$.e.f/8|0) > 10) {
$I$(6,"f$I$I",[C$.e.S, (C$.e.f/8|0)]);
return;
}} else {
C$.e=Clazz.new_($I$(15,1).c$$aquadig_g$Z$aquadig_d,[this.gWorld, false, this]);
}}, p$1);

Clazz.newMeth(C$, 'b$B$B',  function (var0, var1) {
return $I$(11).cb[var0][var1];
}, 1);

Clazz.newMeth(C$, 'c$B$B',  function (var0, var1) {
return $I$(14).c[var0][var1];
}, 1);

Clazz.newMeth(C$, 'e$B',  function (var0) {
return $I$(11).bN[var0];
}, 1);

Clazz.newMeth(C$, 'f$B',  function (var0) {
return $I$(14).d[var0];
}, 1);

Clazz.newMeth(C$, 'g$B',  function (var0) {
return $I$(11).bO[var0];
}, 1);

Clazz.newMeth(C$, 's$I',  function (var0) {
return C$.e.x[var0];
}, 1);

Clazz.newMeth(C$, 't$I',  function (var0) {
return C$.e.w[var0];
}, 1);

Clazz.newMeth(C$, 'u$I',  function (var1) {
var var2="";
var2=var2 + $I$(11).am + C$.a$I$Z(C$.c$B$B(($b$[0] = this.T, $b$[0]), this.aj), true) ;
var2=var2 + " \n" + $I$(11).aR + C$.a$I$Z(C$.e.t, true) ;
var2=var2 + " \n\n" + $I$(11).an + $I$(14).a[this.T][var1] + $I$(11).bZ[this.T] ;
var var3=$I$(14).a[this.T][var1] - $I$(14).a[this.T][C$.t$I(this.T)];
var2=var2 + " \n\n" + $I$(11).ba + $I$(11).ca[this.T] + $I$(11).bb ;
var2=var2 + var3 + $I$(11).bZ[this.T] + $I$(11).cg[this.T] ;
var var4=this.N + C$.J.g * 2 + (C$.J.g >> 1);
var var5=this.O - (C$.J.g * 2 + (C$.J.g >> 1));
C$.J.a$S$I$I$I$I$Z(var2, C$.ai, var4, C$.ah, var5, false);
}, p$1);

Clazz.newMeth(C$, 'b$javax_microedition_lcdui_Graphics$I$I$Z',  function (var0, var1, var2, var3) {
var var4=C$.x.getHeight$();
var var5=C$.x.getWidth$() >> 1;
var var6=var3 ? 0 : var5;
var1-=var5 >> 1;
var2-=var4 >> 1;
var0.setClip$I$I$I$I(var1, var2, var5, var4);
var0.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.x, var1 - var6, var2, 20);
}, 1);

Clazz.newMeth(C$, 'y',  function () {
var var4;
var var5;
(var5=(var4=$I$(2).createImage$I$I(C$.bw, 33)).getGraphics$()).setColor$I(16761889);
var5.fillRect$I$I$I$I(0, 0, var4.getWidth$(), var4.getHeight$());
for (var var6=0; var6 < this.aN.length; var6++) {
var var2=var4.getHeight$() - 1 - var6 ;
var5.setColor$I(this.aN[var6]);
var5.drawLine$I$I$I$I(0, var2, var4.getWidth$(), var2);
}
var var1=0;
var5.drawImage$javax_microedition_lcdui_Image$I$I$I(this.an, 1, 1, 20);
var5.drawImage$javax_microedition_lcdui_Image$I$I$I($I$(6).x, 1, 10, 20);
this.aM=$I$(6).x.getHeight$() - 1;
var var9=10 + this.aM + 1 + 1 ;
var5.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.v, 1, var9, 20);
var var10=(C$.v.getHeight$() >> 1) - (C$.J.g >> 1);
this.aO=1 + C$.v.getWidth$() + 1 ;
this.aQ=var9 + var10;
var1=1 + C$.v.getWidth$() + 1 + C$.J.a$S("0000m") + 1 ;
var5.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.w, var1, var9, 20);
this.aP=var1 + C$.w.getWidth$() + 1 ;
this.aR=this.aQ;
var1=C$.bw - 1 - 45 ;
var5.setColor$I(0);
var5.fillRect$I$I$I$I(var1, 1, 45, 28);
var5.setColor$I(27647);
var5.fillRect$I$I$I$I(var1 + 1, 1, 43, 28);
var5.setColor$I(this.aS[0]);
var5.drawLine$I$I$I$I(var1 + 1, 1, var1 + 1, 28);
var5.setColor$I(this.aS[1]);
var5.drawLine$I$I$I$I(var1 + 2, 1, var1 + 2, 28);
var5.setColor$I(this.aT[0]);
var5.drawLine$I$I$I$I(var1 + 45 - 3, 1, var1 + 45 - 3, 28);
var5.setColor$I(this.aT[1]);
var5.drawLine$I$I$I$I(var1 + 45 - 2, 1, var1 + 45 - 2, 28);
var5.setClip$I$I$I$I(var1, 1, 45, 2);
var5.drawImage$javax_microedition_lcdui_Image$I$I$I(this.t, var1 - 9, -18, 20);
var5.setClip$I$I$I$I(var1, 24, 45, 5);
var5.drawImage$javax_microedition_lcdui_Image$I$I$I(this.u, var1 - 9, 24, 20);
this.aU=C$.bw - 2 - (1 + this.an.getWidth$() + 1 + 45 + 1 ) ;
C$.b$javax_microedition_lcdui_Graphics$I$I$Z(var5, var1 + this.aV[0], 10, true);
var5.setClip$I$I$I$I(0, 0, var4.getWidth$(), var4.getHeight$());
var5.drawImage$javax_microedition_lcdui_Image$I$I$I(this.al, var1 + this.aV[1], 10, 3);
var5.drawImage$javax_microedition_lcdui_Image$I$I$I(this.ak, var1 + this.aV[2], 10, 3);
return var4;
}, p$1);

Clazz.newMeth(C$, 'm$',  function () {
return true;
});

Clazz.newMeth(C$, 'n$',  function () {
try {
var var1=Clazz.new_($I$(19,1));
var var2;
(var2=Clazz.new_($I$(20,1).c$$java_io_OutputStream,[var1])).writeInt$I(this.bb);
var2.writeShort$I(C$.aX[0]);
var2.writeShort$I(C$.aX[5]);
return var1.toByteArray$();
} catch (var3) {
if (Clazz.exceptionOf(var3,"java.io.IOException")){
return Clazz.array(Byte.TYPE, -1, [0]);
} else {
throw var3;
}
}
});

Clazz.newMeth(C$, 'c$B',  function (var1) {
if (!C$.aw || var1 == 7 ) {
switch (var1) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
(($s$[0]=++C$.aX[$k$=var1],C$.aX[$k$]=$s$[0],$s$[0]));
(($s$[0]=++C$.aW[$k$=var1],C$.aW[$k$]=$s$[0],$s$[0]));
return;
case 6:
C$.aX[var1]=(C$.e.f|0);
if (C$.aW[var1] < C$.e.f) {
C$.aW[var1]=(C$.e.f|0);
return;
}break;
case 7:
if (this.bb > C$.ba) {
C$.ba=this.bb;
C$.z$();
}}
}});

Clazz.newMeth(C$, 'z$',  function () {
try {
var var0=Clazz.new_($I$(19,1));
var var1=Clazz.new_($I$(20,1).c$$java_io_OutputStream,[var0]);
for (var var2=0; var2 < 7; var2++) {
var1.writeShort$I(C$.aW[var2]);
}
var1.writeInt$I(C$.ba);
try {
$I$(16).deleteRecordStore$S("AD_STATS");
} catch (var3) {
if (Clazz.exceptionOf(var3,"javax.microedition.rms.RecordStoreException")){
} else {
throw var3;
}
}
var var6;
(var6=$I$(16).openRecordStore$S$Z("AD_STATS", true)).addRecord$BA$I$I(var0.toByteArray$(), 0, var0.size$());
var6.closeRecordStore$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreNotFoundException")){
var var4 = e$$;
{
}
} else {
var var5 = e$$;
{
}
}
}
}, 1);

Clazz.newMeth(C$, 'A',  function () {
try {
var var1;
var var2=(var1=$I$(16).openRecordStore$S$Z("AD_STATS", false)).enumerateRecords$javax_microedition_rms_RecordFilter$javax_microedition_rms_RecordComparator$Z(null, null, false);
var var3=Clazz.new_([var2.nextRecord$()],$I$(17,1).c$$BA);
var var4=Clazz.new_($I$(18,1).c$$java_io_InputStream,[var3]);
try {
for (var var5=0; var5 < C$.aW.length; var5++) {
C$.aW[var5]=var4.readShort$();
}
C$.ba=var4.readInt$();
this.aZ=true;
} catch (var6) {
if (Clazz.exceptionOf(var6,"java.io.IOException")){
} else {
throw var6;
}
}
var1.closeRecordStore$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreNotFoundException")){
var var7 = e$$;
{
C$.ba=0;
C$.z$();
}
} else if (Clazz.exceptionOf(e$$,"javax.microedition.rms.RecordStoreException")){
var var8 = e$$;
{
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'B',  function () {
C$.aW=Clazz.array(Short.TYPE, [7]);
C$.aX=Clazz.array(Short.TYPE, [7]);
for (var var1=0; var1 < 7; var1++) {
C$.aW[var1]=(0|0);
C$.aX[var1]=(0|0);
}
p$1.A.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'o$',  function () {
this.bc=false;
this.bd=false;
try {
p$1.p$I.apply(this, [$I$(6).g.length + 4]);
this.gImg=null;
this.i=null;
this.j=null;
System.gc$();
if (this.gWorld != null ) {
this.gWorld=null;
System.gc$();
}if (C$.e != null ) {
C$.e=null;
System.gc$();
}this.gWorld=Clazz.new_($I$(6,1).c$$Z,[C$.aA]);
if ($I$(3).f) {
C$.e=Clazz.new_($I$(15,1).c$$aquadig_g$Z$aquadig_d,[this.gWorld, false, this]);
if ($I$(3).f) {
$I$(6).a$aquadig_e$Z(C$.e, true);
if ($I$(3).f) {
if (C$.aA) {
p$1.w.apply(this, []);
} else {
this.bc=true;
this.bd=true;
}if ($I$(3).f) {
p$1.B.apply(this, []);
C$.ap=true;
C$.aq=false;
C$.ar=true;
this.aL=p$1.y.apply(this, []);
C$.aw=C$.aA && C$.aw ;
C$.X=false;
C$.Y=false;
this.h$();
if ($I$(3).f) {
var var10000;
var var10001;
if (C$.aA) {
if (!this.bc) {
var10000=this;
var10001=($b$[0] = 118, $b$[0]);
} else if (!this.bd) {
var10000=this;
var10001=($b$[0] = 117, $b$[0]);
} else {
this.at=true;
var10000=this;
var10001=($b$[0] = 101, $b$[0]);
}} else {
var10000=this;
var10001=($b$[0] = 110, $b$[0]);
}var10000.b$B(var10001);
$I$(6).p=true;
this.bb=0;
}}}}}} catch (var2) {
}
});

Clazz.newMeth(C$, 'C$',  function () {
var var0=100000;
var var2=0;
var2=Long.$div(Long.$mul(C$.e.f,var0),(Long.$add(10000,Long.$div(C$.e.h_,1000))));
var var4=$I$(6).g[2].length;
var var5=(3600/var4|0);
var var6=(C$.e.f/var5|0) + 1;
(var2=Long.$mul(var2,(var6)));
if (C$.ax) {
(var2=Long.$mul(var2,(2)));
}var var9;
return Long.$ival((var9=Long.$add(var2,C$.e.t)));
}, 1);

Clazz.newMeth(C$, 'p$',  function () {
return 0;
});

Clazz.newMeth(C$, 'q$',  function () {
var var1=Clazz.array($I$(2), [5]);
if (this.i == null ) {
this.i=$I$(3).a$S("/res/menuIcons.png");
}if (this.j == null ) {
this.j=$I$(3).a$S("/res/secondaryMenuIcons.png");
}var1[0]=this.i;
var1[1]=this.j;
var1[2]=this.l;
var1[3]=$I$(3).a$S("/res/updownarrows.png");
var1[4]=this.gImg;
return var1;
});

C$.$static$=function(){C$.$static$=0;
C$.a_=Clazz.array(Boolean.TYPE, [5]);
C$.f=0;
C$.aF=69928;
C$.y=0;
C$.z=false;
C$.A=-1;
C$.B=false;
C$.C=0;
C$.D=false;
C$.Q=0;
C$.X=false;
C$.Y=false;
C$.Z=0;
C$.aa=0;
C$.ab=0;
C$.ac="";
C$.ad=0;
C$.ao=($b$[0] = -1, $b$[0]);
C$.ap=true;
C$.aq=false;
C$.ar=true;
C$.as=false;
C$.au=false;
C$.ba=0;
C$.aw=false;
C$.ax=false;
C$.aA=false;
C$.aE=false;
{
$I$(1).getFont$I$I$I(0, 1, 8);
};
};
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
