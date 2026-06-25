(function(){var P$=Clazz.newPackage("javax.microedition.lcdui"),p$1={},I$=[[0,'javax.microedition.lcdui.Font','java.awt.AlphaComposite','java.awt.RenderingHints','java.awt.Color','java.awt.Rectangle','javax.microedition.lcdui.GameDimensions']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Graphics");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['disposeG2d'],'O',['g2d','java.awt.Graphics2D','font','javax.microedition.lcdui.Font']]]

Clazz.newMeth(C$, 'c$$java_awt_Graphics2D$Z',  function (g2d, disposeG2d) {
;C$.$init$.apply(this);
this.g2d=g2d;
this.disposeG2d=disposeG2d;
this.font=$I$(1).getDefaultFont$();
g2d.setFont$java_awt_Font(this.font.getAwtFont$());
g2d.setComposite$java_awt_Composite($I$(2).SrcOver);
g2d.setRenderingHint$java_awt_RenderingHints_Key$O($I$(3).KEY_INTERPOLATION, $I$(3).VALUE_INTERPOLATION_NEAREST_NEIGHBOR);
g2d.setRenderingHint$java_awt_RenderingHints_Key$O($I$(3).KEY_RENDERING, $I$(3).VALUE_RENDER_SPEED);
g2d.setRenderingHint$java_awt_RenderingHints_Key$O($I$(3).KEY_ANTIALIASING, $I$(3).VALUE_ANTIALIAS_OFF);
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.disposeG2d) {
this.g2d.dispose$();
}});

Clazz.newMeth(C$, 'setColor$I',  function (rgb) {
this.g2d.setColor$java_awt_Color(Clazz.new_([(rgb >> 16) & 255, (rgb >> 8) & 255, rgb & 255],$I$(4,1).c$$I$I$I));
});

Clazz.newMeth(C$, 'setColor$I$I$I',  function (r, g, b) {
this.g2d.setColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[r & 255, g & 255, b & 255]));
});

Clazz.newMeth(C$, 'getColor$',  function () {
var c=this.g2d.getColor$();
return (c.getRed$() << 16) | (c.getGreen$() << 8) | c.getBlue$() ;
});

Clazz.newMeth(C$, 'setFont$javax_microedition_lcdui_Font',  function (f) {
this.font=f;
this.g2d.setFont$java_awt_Font(f.getAwtFont$());
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.font;
});

Clazz.newMeth(C$, 'clipBounds',  function () {
var r=this.g2d.getClipBounds$();
if (r == null ) {
return Clazz.new_([0, 0, $I$(6).getWidth$(), $I$(6).getHeight$()],$I$(5,1).c$$I$I$I$I);
}return r;
}, p$1);

Clazz.newMeth(C$, 'getClipX$',  function () {
return p$1.clipBounds.apply(this, []).x;
});

Clazz.newMeth(C$, 'getClipY$',  function () {
return p$1.clipBounds.apply(this, []).y;
});

Clazz.newMeth(C$, 'getClipWidth$',  function () {
return p$1.clipBounds.apply(this, []).width;
});

Clazz.newMeth(C$, 'getClipHeight$',  function () {
return p$1.clipBounds.apply(this, []).height;
});

Clazz.newMeth(C$, 'setClip$I$I$I$I',  function (x, y, width, height) {
this.g2d.setClip$I$I$I$I(x, y, width, height);
});

Clazz.newMeth(C$, 'clipRect$I$I$I$I',  function (x, y, width, height) {
this.g2d.clipRect$I$I$I$I(x, y, width, height);
});

Clazz.newMeth(C$, 'translate$I$I',  function (dx, dy) {
this.g2d.translate$I$I(dx, dy);
});

Clazz.newMeth(C$, 'getTranslateX$',  function () {
return (this.g2d.getTransform$().getTranslateX$()|0);
});

Clazz.newMeth(C$, 'getTranslateY$',  function () {
return (this.g2d.getTransform$().getTranslateY$()|0);
});

Clazz.newMeth(C$, 'fillRect$I$I$I$I',  function (x, y, w, h) {
this.g2d.fillRect$I$I$I$I(x, y, w, h);
});

Clazz.newMeth(C$, 'fillArc$I$I$I$I$I$I',  function (x, y, width, height, startAngle, arcAngle) {
this.g2d.fillArc$I$I$I$I$I$I(x, y, width, height, startAngle, arcAngle);
});

Clazz.newMeth(C$, 'drawRect$I$I$I$I',  function (x, y, w, h) {
this.g2d.drawRect$I$I$I$I(x, y, w, h);
});

Clazz.newMeth(C$, 'fillRoundRect$I$I$I$I$I$I',  function (x, y, w, h, aw, ah) {
this.g2d.fillRoundRect$I$I$I$I$I$I(x, y, w, h, aw, ah);
});

Clazz.newMeth(C$, 'drawRoundRect$I$I$I$I$I$I',  function (x, y, w, h, aw, ah) {
this.g2d.drawRoundRect$I$I$I$I$I$I(x, y, w, h, aw, ah);
});

Clazz.newMeth(C$, 'drawLine$I$I$I$I',  function (x1, y1, x2, y2) {
this.g2d.drawLine$I$I$I$I(x1, y1, x2, y2);
});

Clazz.newMeth(C$, 'drawImage$javax_microedition_lcdui_Image$I$I$I',  function (img, x, y, anchor) {
var w=img.getWidth$();
var h=img.getHeight$();
var tl=C$.anchorTopLeft$I$I$I$I$I(x, y, w, h, anchor);
if (img.cropped) {
this.g2d.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(img.buf, tl[0], tl[1], tl[0] + w, tl[1] + h, img.cropX, img.cropY, img.cropX + w, img.cropY + h, null);
} else {
this.g2d.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(img.buf, tl[0], tl[1], null);
}});

Clazz.newMeth(C$, 'anchorTopLeft$I$I$I$I$I',  function (x, y, w, h, anchor) {
var left=x;
var top=y;
if ((anchor & 4) != 0) {
left=x;
} else if ((anchor & 1) != 0) {
left=x - (w/2|0);
} else if ((anchor & 8) != 0) {
left=x - w;
}if ((anchor & 16) != 0) {
top=y;
} else if ((anchor & 2) != 0) {
top=y - (h/2|0);
} else if ((anchor & 32) != 0) {
top=y - h;
} else if ((anchor & 64) != 0) {
top=y;
}return Clazz.array(Integer.TYPE, -1, [left, top]);
}, 1);

Clazz.newMeth(C$, 'drawString$S$I$I$I',  function (str, x, y, anchor) {
if (str == null ) {
return;
}var fm=this.g2d.getFontMetrics$();
var sw=fm.stringWidth$S(str);
var sh=fm.getHeight$();
var ascent=fm.getAscent$();
var bx=x;
var by=y;
if ((anchor & 4) != 0) {
bx=x;
} else if ((anchor & 1) != 0) {
bx=x - (sw/2|0);
} else if ((anchor & 8) != 0) {
bx=x - sw;
}if ((anchor & 16) != 0) {
by=y + ascent;
} else if ((anchor & 2) != 0) {
by=y + ascent - (sh/2|0);
} else if ((anchor & 32) != 0) {
by=y - (sh - ascent);
} else if ((anchor & 64) != 0) {
by=y;
} else {
by=y + ascent;
}this.g2d.drawString$S$I$I(str, bx, by);
});

Clazz.newMeth(C$, 'drawSubstring$S$I$I$I$I$I',  function (str, offset, len, x, y, anchor) {
if (str == null  || offset < 0  || len < 0  || offset + len > str.length$() ) {
return;
}this.drawString$S$I$I$I(str.substring$I$I(offset, offset + len), x, y, anchor);
});

Clazz.newMeth(C$, 'fillTriangle$I$I$I$I$I$I',  function (x1, y1, x2, y2, x3, y3) {
var xs=Clazz.array(Integer.TYPE, -1, [x1, x2, x3]);
var ys=Clazz.array(Integer.TYPE, -1, [y1, y2, y3]);
this.g2d.fillPolygon$IA$IA$I(xs, ys, 3);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
