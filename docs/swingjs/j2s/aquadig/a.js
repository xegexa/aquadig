(function(){var P$=Clazz.newPackage("aquadig"),p$1={},I$=[[0,'aquadig.Mid','aquadig.b','aquadig.g','aquadig.f','aquadig.d','com.vlm.redstar.client.ui.a','aquadig.c','com.vlm.redstar.client.ui.d','aquadig.h']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "a", null, 'aquadig.e');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$a=0;
this.b_=0;
this.c_=false;
this.d_=false;
this.f=0;
this.g_=0;
this.h_=0;
this.i=0;
this.j=0;
this.k=0;
this.l=0;
this.m=false;
this.n=false;
this.o=false;
this.p=false;
this.t=0;
this.u=0;
this.v=false;
this.w=Clazz.array(Byte.TYPE, -1, [0, 0, 0, 0, 0]);
this.x=Clazz.array(Byte.TYPE, -1, [0, 0, 0]);
this.y=Clazz.array(Boolean.TYPE, -1, [false, false, false, false]);
this.C=false;
this.D=0;
this.E=0;
this.F=false;
this.G=-1;
this.H=0;
this.I=0;
this.N=Clazz.array(Boolean.TYPE, [$I$(2).g.length]);
},1);

C$.$fields$=[['Z',['c_','d_','m','n','o','p','v','C','F'],'I',['$a','b_','e','f','k','l','q','r','s','t','u','z','A','D','E','G','H','I'],'J',['g_','h_','i','j'],'O',['w','byte[]','+x','y','boolean[]','B','int[]','J','aquadig.g','K','aquadig.f','N','boolean[]','P','aquadig.d']]
,['B',['ac'],'I',['ab'],'O',['L','javax.microedition.lcdui.Image','+M','O','boolean[]']]]

Clazz.newMeth(C$, 'c$$aquadig_g$Z$aquadig_d',  function (var1, var2, var3) {
;C$.superclazz.c$$I$I.apply(this,[$I$(3).a$I(9), $I$(3).a$I(3)]);C$.$init$.apply(this);
this.P=var3;
this.J=var1;
this.K=Clazz.new_($I$(4,1));
this.U=11;
this.c_=true;
this.v=false;
this.c$$();
this.A=$I$(2).a[4][this.w[4]];
this.B=Clazz.array(Integer.TYPE, [12]);
this.H=0;
this.z=this.g$();
for (var var4=0; var4 < this.N.length; var4++) {
this.N[var4]=false;
}
for (var var5=0; var5 < C$.O.length; var5++) {
C$.O[var5]=false;
}
this.o=false;
}, 1);

Clazz.newMeth(C$, 'a$',  function () {
++this.k;
++this.l;
this.c$$();
this.e=((this.R - 128)/4|0);
if (this.e > this.f) {
this.f=this.e;
this.h_=this.g_;
$I$(1).b.c$B(6);
}if (!$I$(5).Y && this.T == $I$(3).B ) {
$I$(6,"a$S$S",[$I$(7).ae, $I$(7).br]);
$I$(5).Y=true;
}for (var var1=0; var1 < this.N.length; var1++) {
if (!this.N[var1]) {
if (this.e >= $I$(2).g[var1]) {
for (var var2=0; var2 < $I$(5).a_.length; var2++) {
$I$(5).a_[var2]=false;
}
$I$(6,"a$S$S",[$I$(7).aA, $I$(7).cc[var1]]);
this.t=this.t + $I$(2).h[var1];
this.N[var1]=true;
}break;
}}
if (this.e < 1) {
if (this.d_) {
this.d_=false;
$I$(5).a_[0]=false;
$I$(5).a_[1]=false;
$I$(1).c$I(500);
}this.z=this.z + (this.g$()/10|0);
if (this.z > this.g$()) {
this.z=this.g$();
}if ($I$(1).a == 101 && this.p  && this.Q > $I$(3).b  && this.Q < $I$(3).b + $I$(3).c_ ) {
this.p=false;
$I$(1).b.b$B(106);
this.X=0;
}if (this.I > 0) {
this.I=0;
}} else {
this.p=true;
if (this.T >= 10) {
$I$(3).b=this.Q - $I$(3).c_ + 15 + 3;
}}if (this.z < 1) {
for (var var4=0; var4 < $I$(5).a_.length; var4++) {
$I$(5).a_[var4]=false;
}
this.n=false;
if (this.b_ == 0) {
this.K.c$I$I(this.Q, this.R);
this.K.V=false;
this.K.c$$();
this.K.b$();
}++this.b_;
if (this.b_ > 50) {
$I$(6,"a$S$S",[$I$(7).x, $I$(7).aT]);
$I$(5).X=true;
$I$(1).b.b$B(107);
$I$(5).aw=true;
$I$(5).ax=false;
if ($I$(8).d && $I$(1).k != 3 ) {
$I$(1).a$B$I(3, 1);
}$I$(5).b$Z(false);
}}if (this.n) {
p$1.u.apply(this, []);
} else {
if ($I$(5).a_[0]) {
p$1.c$I$I.apply(this, [0, -1]);
} else if (this.I > 0) {
var var5=(-$I$(2).a[1][$I$(2).a[1].length - 1]/$I$(2).a[1][0]|0);
p$1.c$I$I.apply(this, [0, var5]);
--this.I;
}if ($I$(5).a_[1]) {
p$1.c$I$I.apply(this, [0, 1]);
p$1.g$I.apply(this, [1]);
}if ($I$(5).a_[2]) {
if (this.W == 0 && !this.c_ ) {
p$1.A.apply(this, []);
} else {
p$1.c$I$I.apply(this, [-1, 0]);
p$1.g$I.apply(this, [2]);
}}if ($I$(5).a_[3]) {
if (this.W == 0 && this.c_ ) {
p$1.A.apply(this, []);
} else {
p$1.c$I$I.apply(this, [1, 0]);
p$1.g$I.apply(this, [3]);
}}var var6;
if (Long.$ge(Long.$sub((var6=System.currentTimeMillis$()),this.i),2500 )) {
this.a$I(8);
this.i=var6;
}if (this.l > C$.ab && ($I$(5).a_[0] || $I$(5).a_[1] )  && !this.n  && !this.d_  && this.T > 4  && $I$(3).d$I$I(this.S, this.T + 1) ) {
this.d_=true;
$I$(5,"a$S",[$I$(7).aH + $I$(7).aI]);
}if (this.z >= 1) {
 label209 : {
this.Q=this.Q + this.W;
this.R=this.R + this.X;
var var10000;
var var10001;
if (this.Q - this.U < 0) {
var10000=this;
var10001=this.U + 1;
} else {
if (this.Q + this.U <= 1024) {
break label209;
}var10000=this;
var10001=1024 - this.U - 2 ;
}var10000.Q=var10001;
}if (this.R - this.U >= 0 && this.R + this.U > 28800 ) {
this.R=28800 - this.U - 2 ;
}if (this.T == 898 && !$I$(5).aw ) {
$I$(5).aw=true;
$I$(5).ax=true;
if ($I$(8).d) {
$I$(1).a$B$I(4, 1);
}$I$(5).X=true;
$I$(6,"a$S$S",[$I$(7).x, $I$(7).bl]);
}var var3=false;
if (this.m) {
this.Z=false;
this.aa=false;
if (this.W < 0) {
if (this.s$()) {
var3=true;
this.Z=true;
}} else if (this.W > 0 && this.t$() ) {
var3=true;
this.aa=true;
}if (var3) {
this.Q=this.Q - this.W;
this.W=(-this.W/2|0);
var3=false;
}this.Y=false;
if (this.X < 0) {
if (this.q$()) {
var3=true;
this.I=0;
this.k=0;
this.l=0;
if (this.d_) {
this.d_=false;
$I$(5).a_[0]=false;
$I$(1).c$I(500);
$I$(5,"a$S",[$I$(7).aH + $I$(7).aJ]);
}}} else if (this.X > 0 && this.r$() ) {
var3=true;
this.Y=true;
if (this.d_) {
this.d_=false;
$I$(5).a_[1]=false;
$I$(1).c$I(500);
$I$(5,"a$S",[$I$(7).aH + $I$(7).aJ]);
}this.k=0;
this.l=0;
}if (var3) {
this.R=this.R - this.X;
if (Math.abs(this.X) > 3) {
this.X=(-this.X/2|0);
}}} label199 : {
var var7;
var var9;
if (this.W < 0) {
var7=this;
var9=this.W + 1;
} else {
if (this.W <= 0) {
break label199;
}var7=this;
var9=this.W - 1;
}var7.W=var9;
}var var8;
var var10;
if (this.m) {
if (this.Y) {
return;
}if (this.X < p$1.z.apply(this, [])) {
if (this.X == 0 && Long.$lt(Long.$sub(var6,this.j),240 ) ) {
return;
}++this.X;
if (this.X == 0 && Long.$gt(this.j,(Long.$neg(1)) ) ) {
this.j=System.currentTimeMillis$();
return;
}return;
}var8=this;
var10=this.X - 1;
} else {
var8=this;
var10=this.X + 1;
}var8.X=var10;
}}});

Clazz.newMeth(C$, 'b$',  function () {
if (this.n) {
++this.$a;
if (this.$a >= 2) {
this.$a=0;
}}});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics',  function (var1) {
if (this.V) {
var var2=this.Q + $I$(3).l;
var var3=this.R + $I$(3).m;
var2=var2 - this.U - 3 ;
var3=var3 - this.U - 2 ;
if (this.z >= 1) {
if (this.n) {
if (this.Q != this.q) {
var3+=$I$(1).a$I(3) - 1;
}if (this.R != this.r) {
var2+=$I$(1).a$I(3) - 1;
}var var4;
var var5;
var var7;
var var8;
var var9;
var var10;
 label70 : {
var var28;
var var30;
var var32;
var var10003;
var var10004;
 label69 : {
this.c$$();
var4=$I$(3).l + this.S * 32;
var5=$I$(3).m + this.T * 32;
var var6=0;
var7=0;
var8=0;
var9=0;
var10=0;
switch (this.s) {
case 1:
var7=var4;
var8=var5;
var9=32;
var10=var3 + 13 - var5;
if ($I$(3,"c$I",[var6=this.S + (this.T - 1) * 32]) == 0) {
var1.setClip$I$I$I$I(var4, var5 - 3, 32, 3);
$I$(3).A=true;
$I$(3).a$javax_microedition_lcdui_Graphics$I$I$I$I(var1, var6, var4, var5 - 32, this.s);
}if ($I$(3,"c$I",[var6=this.S + 1 + this.T * 32 ]) == 0) {
var1.setClip$I$I$I$I(var4 + 32, var5, 3, var10);
$I$(3).A=true;
$I$(3).a$javax_microedition_lcdui_Graphics$I$I$I$I(var1, var6, var4 + 32, var5, 2);
}if ($I$(3,"c$I",[var6=this.S - 1 + this.T * 32]) != 0) {
break label70;
}var1.setClip$I$I$I$I(var4 - 3, var5, 3, var10);
$I$(3).A=true;
var28=var1;
var30=var6;
var32=var4 - 32;
var10003=var5;
var10004=($b$[0] = 3, $b$[0]);
break label69;
case 2:
var7=var2 + 15;
var8=var5;
var9=32 - (var7 - var4);
var10=32;
if ($I$(3,"c$I",[var6=this.S + 1 + this.T * 32 ]) == 0) {
var1.setClip$I$I$I$I(var4 + 32, var5, 3, 32);
$I$(3).A=true;
$I$(3).a$javax_microedition_lcdui_Graphics$I$I$I$I(var1, var6, var4 + 32, var5, this.s);
}if ($I$(3,"c$I",[var6=this.S + (this.T - 1) * 32]) == 0) {
var1.setClip$I$I$I$I(var7, var5 - 3, var9, 3);
$I$(3).A=true;
$I$(3).a$javax_microedition_lcdui_Graphics$I$I$I$I(var1, var6, var4, var5 - 32, 1);
}if ($I$(3,"c$I",[var6=this.S + (this.T + 1) * 32]) != 0) {
break label70;
}var28=var1;
var30=var7;
var32=var5;
break;
case 3:
var7=var4;
var8=var5;
var9=var2 + 15 - var4;
var10=32;
if ($I$(3,"c$I",[var6=this.S - 1 + this.T * 32]) == 0) {
var1.setClip$I$I$I$I(var4 - 3, var5, 3, 32);
$I$(3).A=true;
$I$(3).a$javax_microedition_lcdui_Graphics$I$I$I$I(var1, var6, var4 - 32, var5, this.s);
}if ($I$(3,"c$I",[var6=this.S + (this.T - 1) * 32]) == 0) {
var1.setClip$I$I$I$I(var4, var5 - 3, var9, 3);
$I$(3).A=true;
$I$(3).a$javax_microedition_lcdui_Graphics$I$I$I$I(var1, var6, var4, var5 - 32, 1);
}if ($I$(3,"c$I",[var6=this.S + (this.T + 1) * 32]) == 0) {
var28=var1;
var30=var4;
var32=var5;
break;
}default:
break label70;
}
var28.setClip$I$I$I$I(var30, var32 + 32, var9, 3);
$I$(3).A=true;
var28=var1;
var30=var6;
var32=var4;
var10003=var5 + 32;
var10004=($b$[0] = 0, $b$[0]);
}$I$(3).a$javax_microedition_lcdui_Graphics$I$I$I$I(var28, var30, var32, var10003, var10004);
}var1.setClip$I$I$I$I(var7, var8, var9, var10);
$I$(3).A=true;
var var25=this.S + this.T * 32;
$I$(3).a$javax_microedition_lcdui_Graphics$I$I$I$I(var1, var25, var4, var5, -1);
p$1.c$javax_microedition_lcdui_Graphics.apply(this, [var1]);
}var var29;
var var31;
var var33;
if (this.c_) {
var var13=var2 - 10;
var var26=var3 + 1;
var1.setClip$I$I$I$I(var13, var26, 32, 32);
var13-=this.$a * 32 + 64 * this.w[4];
if (this.w[4] >= C$.ac) {
var13-=128;
}var1.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.M, var13, var26, 20);
var1.setClip$I$I$I$I(var2, var3, 31, 27);
var29=var1;
var31=C$.L;
var33=var2 - 31;
} else {
var var15=var2 + 31 - 22;
var var27=var3 + 1;
var1.setClip$I$I$I$I(var15, var27, 32, 32);
var15-=this.$a * 32 + 64 * this.w[4];
var1.drawImage$javax_microedition_lcdui_Image$I$I$I(C$.M, var15, var27, 20);
var1.setClip$I$I$I$I(var2, var3, 31, 27);
var29=var1;
var31=C$.L;
var33=var2;
}var29.drawImage$javax_microedition_lcdui_Image$I$I$I(var31, var33, var3, 20);
}}});

Clazz.newMeth(C$, 'c$I$I',  function (var1, var2) {
if (this.m) {
 label71 : {
var var10000;
var var10001;
if (var1 > 0) {
if (!this.t$()) {
this.W+=var1;
}var10000=this;
var10001=false;
} else {
if (var1 >= 0) {
break label71;
}if (!this.s$()) {
this.W+=var1;
}var10000=this;
var10001=true;
}var10000.c_=var10001;
} label65 : {
var var3;
var var5;
if (var2 > 0) {
if (!this.r$()) {
this.X+=var2;
break label65;
}var3=System.out;
var5="Digger.engineThrust() we should turn autopilot off here 1";
} else {
if (var2 >= 0) {
break label65;
}if (!this.q$()) {
this.X+=var2;
break label65;
}var3=System.out;
var5="Digger.engineThrust() we should turn autopilot off here 2";
}var3.println$S(var5);
}this.W+=var1;
this.X+=var2;
if (this.W > p$1.y.apply(this, [])) {
this.W=p$1.y.apply(this, []);
}if (this.X > p$1.y.apply(this, []) && this.X > p$1.z.apply(this, []) ) {
this.X=Math.max(p$1.y.apply(this, []), p$1.z.apply(this, []));
}if (this.W < -p$1.y.apply(this, [])) {
this.W=-p$1.y.apply(this, []);
}if (this.X < -p$1.y.apply(this, [])) {
var var4;
var var6;
if (this.I < 1) {
var4=this;
var6=-p$1.y.apply(this, []);
} else {
this.X=-(($I$(2).a[1][$I$(2).a[1].length - 1]/$I$(2).a[1][0]|0) * 8);
if (this.X >= -32) {
return;
}var4=this;
var6=-32;
}var4.X=var6;
}}}, p$1);

Clazz.newMeth(C$, 'u',  function () {
if (!$I$(3,"c$I$I",[(this.q/32|0), (this.r/32|0)])) {
this.n=false;
if ($I$(9).c % 2 == 0) {
$I$(9).b$I$I(this.q, this.r);
}this.a$I(1);
} else {
 label82 : {
var var1=0;
var var2=0;
var var10000;
var var10001;
if (this.Q < this.q) {
this.A=this.A + p$1.w.apply(this, []);
if (this.A >= 4) {
var1=(this.A/4|0);
if ((var2=this.q - this.Q) < var1) {
var1=var2;
}this.Q+=var1;
this.A=0;
}if (this.q - this.Q <= 2) {
break label82;
}var10000=this;
var10001=false;
} else {
if (this.Q <= this.q) {
break label82;
}this.A=this.A + p$1.w.apply(this, []);
if (this.A >= 4) {
var1=(this.A/4|0);
if ((var2=this.Q - this.q) < var1) {
var1=var2;
}this.Q-=var1;
this.A=0;
}if (this.Q - this.q <= 2) {
break label82;
}var10000=this;
var10001=true;
}var10000.c_=var10001;
} label70 : {
var var10;
var var11;
if (this.R < this.r) {
this.A=this.A + p$1.w.apply(this, []);
if (this.A < 4) {
break label70;
}var var5=(this.A/4|0);
var var9;
if ((var9=this.r - this.R) < var5) {
var5=var9;
}var10=this;
var11=this.R + var5;
} else {
if (this.R <= this.r) {
break label70;
}this.A=this.A + p$1.w.apply(this, []);
if (this.A < 4) {
break label70;
}var var6=(this.A/4|0);
var10=this;
var11=this.R - var6;
}var10.R=var11;
this.A=0;
}this.a$I(1);
if (this.Q == this.q && this.R == this.r ) {
$I$(3).a$I$I$Z(this.S, this.T, true);
this.n=false;
this.k=0;
this.l=0;
this.j=(Long.$neg(1));
if (this.o) {
$I$(6,"a$S$S",[$I$(7).aF, $I$(7).aG]);
this.o=false;
}if ($I$(3).g$I$I(this.S, this.T)) {
this.n$();
$I$(3).b$I$I$Z(this.S + this.T * 32, -1, true);
}$I$(1).b.c$B(0);
}if ($I$(9).c % 2 == 0) {
$I$(9,"c$I$I",[this.q + $I$(3).l, this.r + $I$(3).m]);
}}}, p$1);

Clazz.newMeth(C$, 'g$I',  function (var1) {
if (!this.n && this.Y ) {
this.c$$();
var var2=this.S;
var var3=this.T;
var var4;
if ($I$(3,"c$I",[var4=this.S + (this.T + 1) * 32]) != 0) {
this.s=var1;
if (var1 == 1) {
++var3;
} else if (var1 == 2) {
if (!this.Z) {
return;
}--var2;
} else {
if (var1 != 3) {
return;
}if (!this.aa) {
return;
}++var2;
}if ($I$(3).b$I$I(var2, var3) && !$I$(3).d$I$I(var2, var3) ) {
var var5;
if ((var5=$I$(3).c$I(var3 * 32 + var2)) - this.w[4] > 3 && !C$.O[var5 - 4] ) {
this.o=true;
C$.O[var5 - 4]=true;
}this.q=$I$(3).a$I(var2);
this.r=$I$(3).a$I(var3);
this.n=true;
}}}}, p$1);

Clazz.newMeth(C$, 'c$$',  function () {
this.S=(this.Q/32|0);
this.T=(this.R/32|0);
var var10000;
var var10001;
if (this.T * 32 + this.S < 128) {
var10000=this;
var10001=false;
} else {
var10000=this;
var10001=true;
}var10000.m=var10001;
});

Clazz.newMeth(C$, 'd$',  function () {
if (!this.n && this.x[0] > 0  && this.z > 0  && !this.K.$b ) {
this.K.c$I$I(this.Q, this.R);
(($b$[0]=--this.x[0],this.x[0]=$b$[0],$b$[0]));
$I$(5,"a$S",[$I$(7).bc]);
$I$(1).b.c$B(2);
}});

Clazz.newMeth(C$, 'e$',  function () {
if (this.x[1] > 0 && this.z > 0 ) {
this.z=this.z + $I$(2).b[1];
(($b$[0]=--this.x[1],this.x[1]=$b$[0],$b$[0]));
if (this.z > this.g$()) {
this.z=this.g$();
}$I$(5,"a$S",[$I$(7).be]);
$I$(1).b.c$B(1);
}});

Clazz.newMeth(C$, 'f$',  function () {
if (this.x[2] > 0 && this.z > 0 ) {
(($b$[0]=--this.x[2],this.x[2]=$b$[0],$b$[0]));
this.I=500;
$I$(5,"a$S",[$I$(7).bd]);
$I$(1).b.c$B(3);
}});

Clazz.newMeth(C$, 'a$I',  function (var1) {
for (var var2=0; var2 < var1; var2++) {
if ($I$(1).b$()) {
$I$(9,"a$I$I",[this.Q + $I$(1).b$I(this.U), this.R + $I$(1).b$I(this.U)]);
--this.z;
if (this.z < 0) {
this.z=0;
}}}
});

Clazz.newMeth(C$, 'g$',  function () {
return $I$(2).a[0][this.w[0]];
});

Clazz.newMeth(C$, 'v',  function () {
var var1=($b$[0] = 0, $b$[0]);
if (this.F) {
var1=($b$[0] = 4, $b$[0]);
}return $I$(2).a[4][this.w[4]] + var1;
}, p$1);

Clazz.newMeth(C$, 'w',  function () {
var var1=(this.q/32|0);
var var2=(this.r/32|0);
var var3;
var var4=$I$(3,"c$I",[var3=var1 + var2 * 32]);
return (p$1.v.apply(this, [])/($I$(3).i[var4] + 1)|0);
}, p$1);

Clazz.newMeth(C$, 'x',  function () {
return ($I$(2).a[1][this.w[1]]/($I$(2).a[1][0] >> 1)|0);
}, p$1);

Clazz.newMeth(C$, 'y',  function () {
var var1;
if ((var1=(this.k/($I$(1).frameMs >> 2)|0) + 4) > p$1.x.apply(this, []) << 1) {
var1=p$1.x.apply(this, []) << 1;
}return var1;
}, p$1);

Clazz.newMeth(C$, 'h$',  function () {
return $I$(2).e[this.w[1]];
});

Clazz.newMeth(C$, 'i$',  function () {
var var1=($b$[0] = 0, $b$[0]);
if (this.C) {
var1=($b$[0] = 20, $b$[0]);
}return $I$(2).a[2][this.w[2]] + var1;
});

Clazz.newMeth(C$, 'z',  function () {
if (this.z < 1) {
return 0;
} else {
var var1=(this.k/($I$(1).frameMs >> 2)|0) + 3;
var var2=$I$(2).a[3][this.w[3]] + (this.D << 1);
if (var1 > var2) {
var1=var2;
}return var1;
}}, p$1);

Clazz.newMeth(C$, 'j$',  function () {
this.G=-1;
var var1=2147483647;
for (var var2=0; var2 < this.B.length; var2++) {
if (this.B[var2] > 0 && var1 > $I$(2).f[var2] ) {
this.G=var2;
var1=$I$(2).f[var2];
}}
if (this.G != -1) {
$I$(5).B=true;
$I$(6,"a$S$S",[$I$(7).aq, $I$(7).aw + $I$(7).bV[this.G] + $I$(7).ay + " \n" + '\u0000' + " \n" + $I$(5).C + " \n" + '\u0001' ]);
}});

Clazz.newMeth(C$, 'k$',  function () {
this.u=0;
for (var var1=0; var1 < this.B.length; var1++) {
var var2=this.B[var1] * $I$(2).f[var1];
this.t+=var2;
this.u+=var2;
this.B[var1]=0;
}
this.E=this.E + this.H;
var var4=this.E;
for (var var5=0; var5 < (var4/5|0); var5++) {
var var3=Math.abs($I$(1).b$I(8));
(($b$[0]=++($j$=$I$(3).a_)[$k$=var3],$j$[$k$]=$b$[0],$b$[0]));
this.E-=5;
}
this.H=0;
this.v=true;
});

Clazz.newMeth(C$, 'l$',  function () {
return this.H > 0;
});

Clazz.newMeth(C$, 'm$',  function () {
for (var var1=0; var1 < this.x.length; var1++) {
if (this.x[var1] > 0) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'b$I',  function (var0) {
var var1= new Short(($s$[0] = var0, $s$[0]));
var var3;
$I$(5).A=var3=($I$(3).k.remove$O(var1)).$c();
$I$(5).au=true;
$I$(6,"a$S$S",[$I$(7).bW[var3], $I$(7).bX[var3]]);
}, 1);

Clazz.newMeth(C$, 'A',  function () {
this.c_=!this.c_;
}, p$1);

Clazz.newMeth(C$, 'c$javax_microedition_lcdui_Graphics',  function (var1) {
var var18;
var var19;
var var10002;
var var10003;
 label56 : {
var var2=(this.q/32|0);
var var3=(this.r/32|0);
var var4;
var var5=$I$(3,"c$I",[var4=var2 + var3 * 32]);
var var6=$I$(3).l + var2 * 32;
var var7=$I$(3).m + var3 * 32;
var var8;
var var14;
var var10001;
switch (this.s) {
case 1:
var var11=false;
var var13=this.R + $I$(3).m + 13  - var7;
if (var2 != 31) {
var14=$I$(3).c$I(var4 + 1);
if (var5 > var14 && var14 != 0 ) {
var1.setClip$I$I$I$I(var6 + 32, var7, 3, var13);
var1.drawImage$javax_microedition_lcdui_Image$I$I$I($I$(3).s, var6 + 32 - $I$(3).i[var14] * 32, $I$(3).m + (this.r/32|0) * 32, 20);
}}if (var2 == 0) {
return;
}var14=$I$(3).c$I(var4 - 1);
if (var5 <= var14 || var14 == 0 ) {
return;
}var1.setClip$I$I$I$I(var6 - 3, var7, 3, var13);
var18=var1;
var19=$I$(3).s;
var10002=var6 - 3 - $I$(3).i[var14] * 32 ;
var10003=$I$(3).m + (this.r/32|0) * 32;
break label56;
case 2:
var8=var6 + 32 - (this.Q + $I$(3).l);
var var12=false;
var14=$I$(3).c$I(var4 - 32);
if (var5 > var14 && var14 != 0 ) {
var1.setClip$I$I$I$I(var6 + 32 - var8, var7 - 3, var8, 3);
var1.drawImage$javax_microedition_lcdui_Image$I$I$I($I$(3).s, var6 - $I$(3).i[var14] * 32, $I$(3).m + (this.r/32|0) * 32 - 3, 20);
}var14=$I$(3).c$I(var4 + 32);
if (var5 <= var14 || var14 == 0 ) {
return;
}var18=var1;
var10001=var6 + 32 - var8;
break;
case 3:
var8=this.Q + $I$(3).l - var6;
var var9=false;
var14=$I$(3).c$I(var4 - 32);
if (var5 > var14 && var14 != 0 ) {
var1.setClip$I$I$I$I(var6, var7 - 3, var8, 3);
var1.drawImage$javax_microedition_lcdui_Image$I$I$I($I$(3).s, var6 - $I$(3).i[var14] * 32, $I$(3).m + (this.r/32|0) * 32 - 3, 20);
}var14=$I$(3).c$I(var4 + 32);
if (var5 > var14 && var14 != 0 ) {
var18=var1;
var10001=var6;
break;
}return;
default:
return;
}
var18.setClip$I$I$I$I(var10001, var7 + 32, var8, 3);
var18=var1;
var19=$I$(3).s;
var10002=var6 - $I$(3).i[var14] * 32;
var10003=$I$(3).m + ((this.r/32|0) + 1) * 32 - 3;
}var18.drawImage$javax_microedition_lcdui_Image$I$I$I(var19, var10002, var10003, 20);
}, p$1);

Clazz.newMeth(C$, 'n$',  function () {
$I$(5,"a$S",[$I$(7).av]);
this.z=this.z - ($I$(2).a[0][$I$(2).a[0].length - 1]/5|0);
this.a$I(20);
$I$(1).c$I(1000);
$I$(3).a$J$I(500, 6);
});

C$.$static$=function(){C$.$static$=0;
C$.ab=$I$(1).frameMs * 5;
C$.ac=($b$[0] = 3, $b$[0]);
C$.L=$I$(1).a$S("/res/subrightleft.png");
C$.M=$I$(1).a$S("/res/blades.png");
C$.O=Clazz.array(Boolean.TYPE, [4]);
};
var $b$ = new Int8Array(1);
var $j$;
var $k$;
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
