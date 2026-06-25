(function(){var P$=Clazz.newPackage("javax.microedition.lcdui"),I$=[[0,'javax.imageio.ImageIO','java.io.ByteArrayInputStream','java.awt.image.BufferedImage','java.awt.AlphaComposite','javax.microedition.lcdui.Graphics']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Image");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['cropped'],'I',['cropX','cropY','cropW','cropH'],'O',['buf','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage',  function (buf) {
;C$.$init$.apply(this);
this.buf=buf;
this.cropped=false;
this.cropX=0;
this.cropY=0;
this.cropW=0;
this.cropH=0;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage$I$I$I$I',  function (buf, x, y, w, h) {
;C$.$init$.apply(this);
this.buf=buf;
this.cropped=true;
this.cropX=x;
this.cropY=y;
this.cropW=w;
this.cropH=h;
}, 1);

Clazz.newMeth(C$, 'fromBufferedImage$java_awt_image_BufferedImage',  function (buf) {
return Clazz.new_(C$.c$$java_awt_image_BufferedImage,[C$.toArgb$java_awt_image_BufferedImage(buf)]);
}, 1);

Clazz.newMeth(C$, 'createImage$BA$I$I',  function (data, offset, len) {
try {
var bi=$I$(1,"read$java_io_InputStream",[Clazz.new_($I$(2,1).c$$BA$I$I,[data, offset, len])]);
if (bi == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad image"]);
}bi=C$.toArgb$java_awt_image_BufferedImage(bi);
return Clazz.new_(C$.c$$java_awt_image_BufferedImage,[bi]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createImage$S',  function (path) {
var $in=Clazz.getClass(C$).getResourceAsStream$S(path);
if ($in == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["resource not found: " + path]);
}try {
var bi=$I$(1).read$java_io_InputStream($in);
if (bi == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["bad image: " + path]);
}return Clazz.new_(C$.c$$java_awt_image_BufferedImage,[C$.toArgb$java_awt_image_BufferedImage(bi)]);
} finally {
$in.close$();
}
}, 1);

Clazz.newMeth(C$, 'toArgb$java_awt_image_BufferedImage',  function (src) {
if (src.getType$() == 2 || src.getType$() == 3 ) {
return src;
}var dst=Clazz.new_([src.getWidth$(), src.getHeight$(), 2],$I$(3,1).c$$I$I$I);
var g=dst.createGraphics$();
g.setComposite$java_awt_Composite($I$(4).Src);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(src, 0, 0, null);
g.dispose$();
return dst;
}, 1);

Clazz.newMeth(C$, 'createImage$I$I',  function (width, height) {
var bi=Clazz.new_($I$(3,1).c$$I$I$I,[width, height, 1]);
return Clazz.new_(C$.c$$java_awt_image_BufferedImage,[bi]);
}, 1);

Clazz.newMeth(C$, 'createImage$javax_microedition_lcdui_Image',  function (source) {
var bi=Clazz.new_([source.getWidth$(), source.getHeight$(), 2],$I$(3,1).c$$I$I$I);
var g=bi.createGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(source.buf, 0, 0, null);
g.dispose$();
return Clazz.new_(C$.c$$java_awt_image_BufferedImage,[bi]);
}, 1);

Clazz.newMeth(C$, 'createImage$javax_microedition_lcdui_Image$I$I$I$I$I',  function (source, x, y, width, height, transform) {
if (transform != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["createImage transform not implemented: " + transform]);
}var sx=source.cropped ? source.cropX + x : x;
var sy=source.cropped ? source.cropY + y : y;
return Clazz.new_(C$.c$$java_awt_image_BufferedImage$I$I$I$I,[source.buf, sx, sy, width, height]);
}, 1);

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.cropped ? this.cropW : this.buf.getWidth$();
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.cropped ? this.cropH : this.buf.getHeight$();
});

Clazz.newMeth(C$, 'getGraphics$',  function () {
var g2=this.buf.createGraphics$();
return Clazz.new_($I$(5,1).c$$java_awt_Graphics2D$Z,[g2, true]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
