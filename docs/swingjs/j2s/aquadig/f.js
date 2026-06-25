(function(){var P$=Clazz.newPackage("aquadig"),I$=[[0,'aquadig.Mid','aquadig.d','aquadig.h','aquadig.g']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "f", null, 'aquadig.e');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.d_=0;
},1);

C$.$fields$=[['Z',['$b'],'I',['d_']]
,['I',['c'],'J',['$a']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I$I.apply(this,[-999, -999]);C$.$init$.apply(this);
this.$b=false;
C$.c=$I$(2).x.getHeight$();
}, 1);

Clazz.newMeth(C$, 'a$',  function () {
if (this.$b) {
++this.d_;
this.c$$();
this.Q=this.Q + this.W;
this.R=this.R + this.X;
var var1;
for (var1=false; this.r$(); this.R--) {
var1=true;
}
if (var1) {
this.X=(-this.X/3|0);
}++this.X;
if (this.X > 32) {
this.X=32;
}if (Long.$gt(this.d_,C$.$a )) {
this.b$();
}}});

Clazz.newMeth(C$, 'c$I$I',  function (var1, var2) {
if (!this.$b) {
this.d_=0;
this.$b=true;
this.V=true;
this.Q=var1;
this.R=var2;
}});

Clazz.newMeth(C$, 'a$javax_microedition_lcdui_Graphics',  function (var1) {
var var2=0;
if ($I$(3).c % 10 < 5) {
var2=C$.c;
}var var3=this.Q + $I$(4).l - (C$.c/2|0);
var var4=this.R + $I$(4).m - (C$.c/2|0);
var1.setClip$I$I$I$I(var3, var4, C$.c, C$.c);
var1.drawImage$javax_microedition_lcdui_Image$I$I$I($I$(2).x, var3 - var2, var4, 20);
});

Clazz.newMeth(C$, 'b$',  function () {
try {
$I$(4).a$J$I(500, 6);
$I$(1).c$I(1000);
var var1=false;
var var2=false;
for (var var3=this.S - 1; var3 < this.S + 1 + 1 ; var3++) {
for (var var4=this.T - 1; var4 < this.T + 1 + 1 ; var4++) {
if (var3 >= 0 && var3 < 32  && var4 >= 0  && var4 < 900 ) {
if ($I$(2).e.S == var3 && $I$(2).e.T == var4 ) {
var var5=this.S - var3;
var var6=(160/(Math.abs(var5) + 1)|0);
$I$(2).e.a$I(var6);
}$I$(4).a$I$I(var3, var4);
if (!var2 && $I$(4).g$I$I(var3, var4) ) {
$I$(2).e.n$();
$I$(4,"b$I$I$Z",[this.S + (this.T - 1) * 32, -1, true]);
if (this.S != 0) {
$I$(4,"b$I$I$Z",[this.S - 1 + (this.T - 1) * 32, -1, true]);
}if (this.S < 31) {
$I$(4,"b$I$I$Z",[this.S + 1 + (this.T - 1) * 32 , -1, true]);
$I$(4).b$I$I$Z(this.S + 1 + this.T * 32 , -1, true);
}if (this.T < 899) {
$I$(4,"b$I$I$Z",[this.S + (this.T + 1) * 32, -1, true]);
}if (this.S != 0 && this.T < 899 ) {
$I$(4,"b$I$I$Z",[this.S - 1 + (this.T + 1) * 32, -1, true]);
}if (this.S < 31 && this.T < 899 ) {
$I$(4,"b$I$I$Z",[this.S + 1 + (this.T + 1) * 32 , -1, true]);
}if (this.S != 0) {
$I$(4).b$I$I$Z(this.S - 1 + this.T * 32, -1, true);
}var2=true;
}}}
}
$I$(3).e$I$I(this.Q, this.R);
this.$b=false;
this.Q=-999;
this.R=-999;
this.W=0;
this.X=0;
this.V=false;
} catch (var7) {
}
});

C$.$static$=function(){C$.$static$=0;
C$.$a=$I$(1).frameMs * 2;
};
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
