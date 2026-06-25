(function(){var P$=Clazz.newPackage("javax.microedition.lcdui"),p$1={},I$=[[0,'java.awt.Font','java.awt.image.BufferedImage']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Font");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['awtFont','java.awt.Font']]
,['O',['CACHE','javax.microedition.lcdui.Font[][][]']]]

Clazz.newMeth(C$, 'c$$java_awt_Font',  function (f) {
;C$.$init$.apply(this);
this.awtFont=f;
}, 1);

Clazz.newMeth(C$, 'getAwtFont$',  function () {
return this.awtFont;
});

Clazz.newMeth(C$, 'getFont$I$I$I',  function (face, style, size) {
var faceIdx=face == 32 ? 1 : face == 64 ? 2 : 0;
var styleIdx=Math.min(3, style & 3);
var sizeIdx=size == 8 ? 0 : size == 16 ? 2 : 1;
var cached=C$.CACHE[faceIdx][styleIdx][sizeIdx];
if (cached != null ) {
return cached;
}var awtSize=12;
if (size == 8 || size == 8 ) {
awtSize=8;
} else if (size == 16 || size == 16 ) {
awtSize=14;
}var awtStyle=0;
if ((style & 1) != 0) {
awtStyle|=1;
}if ((style & 2) != 0) {
awtStyle|=2;
}var name="SansSerif";
if (face == 32) {
name="Monospaced";
}var f=Clazz.new_($I$(1,1).c$$S$I$I,[name, awtStyle, awtSize]);
cached=Clazz.new_(C$.c$$java_awt_Font,[f]);
C$.CACHE[faceIdx][styleIdx][sizeIdx]=cached;
return cached;
}, 1);

Clazz.newMeth(C$, 'getDefaultFont$',  function () {
return C$.getFont$I$I$I(64, 0, 8);
}, 1);

Clazz.newMeth(C$, 'getStyle$',  function () {
return this.awtFont.getStyle$();
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.awtFont.getSize$();
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return p$1.metrics.apply(this, []).getHeight$();
});

Clazz.newMeth(C$, 'getBaselinePosition$',  function () {
return p$1.metrics.apply(this, []).getAscent$();
});

Clazz.newMeth(C$, 'charWidth$C',  function (ch) {
return p$1.metrics.apply(this, []).charWidth$C(ch);
});

Clazz.newMeth(C$, 'stringWidth$S',  function (str) {
return p$1.metrics.apply(this, []).stringWidth$S(str);
});

Clazz.newMeth(C$, 'substringWidth$S$I$I',  function (str, offset, len) {
if (offset < 0 || len < 0  || offset + len > str.length$() ) {
return 0;
}return p$1.metrics.apply(this, []).stringWidth$S(str.substring$I$I(offset, offset + len));
});

Clazz.newMeth(C$, 'metrics',  function () {
var bi=Clazz.new_($I$(2,1).c$$I$I$I,[1, 1, 2]);
var g2=bi.createGraphics$();
g2.setFont$java_awt_Font(this.awtFont);
var fm=g2.getFontMetrics$java_awt_Font(this.awtFont);
g2.dispose$();
return fm;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.CACHE=Clazz.array(C$, [3, 4, 3]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
