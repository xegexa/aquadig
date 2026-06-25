(function(){var P$=Clazz.newPackage("javax.microedition.lcdui"),p$1={},I$=[[0,'javax.swing.SwingUtilities',['javax.microedition.lcdui.Canvas','.RequestFocusRunnable'],'java.awt.image.BufferedImage','java.awt.RenderingHints','java.awt.Color','javax.microedition.lcdui.Graphics','javax.microedition.lcdui.Canvas',['javax.microedition.lcdui.Canvas','.GamePanel'],'java.awt.Dimension',['javax.microedition.lcdui.Canvas','.CanvasKeyAdapter'],['javax.microedition.lcdui.Canvas','.CanvasMouseAdapter'],['javax.microedition.lcdui.Canvas','.CanvasFocusAdapter'],['javax.microedition.lcdui.Canvas','.PaintImmediatelyRunnable']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Canvas", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.microedition.lcdui.Displayable');
C$.$classes$=[['CanvasFocusAdapter',26],['RequestFocusRunnable',26],['GamePanel',26],['CanvasKeyAdapter',26],['CanvasMouseAdapter',26],['PaintImmediatelyRunnable',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['panel','javax.swing.JPanel','gameSurface','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.panel=Clazz.new_($I$(8,1).c$$javax_microedition_lcdui_Canvas,[this]);
this.panel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9,1).c$$I$I,[800, 600]));
this.panel.setBackground$java_awt_Color(Clazz.new_($I$(5,1).c$$I,[69928]));
this.panel.setOpaque$Z(true);
this.panel.setFocusable$Z(true);
this.panel.setDoubleBuffered$Z(!Boolean.parseBoolean$S(System.getProperty$S$S("midp.web", "false")));
this.panel.addKeyListener$java_awt_event_KeyListener(Clazz.new_($I$(10,1).c$$javax_microedition_lcdui_Canvas,[this]));
this.panel.addMouseListener$java_awt_event_MouseListener(Clazz.new_($I$(11,1).c$$javax_microedition_lcdui_Canvas,[this]));
this.panel.addFocusListener$java_awt_event_FocusListener(Clazz.new_($I$(12,1).c$$javax_microedition_lcdui_Canvas,[this]));
}, 1);

Clazz.newMeth(C$, 'mapKey$java_awt_event_KeyEvent',  function (e) {
var k=e.getKeyCode$();
switch (k) {
case 37:
return -3;
case 39:
return -4;
case 38:
return -1;
case 40:
return -2;
case 87:
return -1;
case 83:
return -2;
case 65:
return -3;
case 68:
return -4;
case 10:
return -5;
case 32:
return -5;
case 27:
return -7;
case 8:
return -7;
case 112:
return -6;
case 113:
return -7;
default:
break;
}
if (k >= 96 && k <= 105 ) {
return 48 + (k - 96);
}var ch=e.getKeyChar$();
if (ch >= "0" && ch <= "9" ) {
return ch.$c();
}if (ch == "*") {
return 42;
}if (ch == "#") {
return 35;
}return k;
}, 1);

Clazz.newMeth(C$, 'getPanel$',  function () {
return this.panel;
});

Clazz.newMeth(C$, 'requestFocus$',  function () {
this.panel.requestFocusInWindow$();
});

Clazz.newMeth(C$, 'repaint$',  function () {
this.panel.repaint$();
});

Clazz.newMeth(C$, 'serviceRepaints$',  function () {
if (Boolean.parseBoolean$S(System.getProperty$S$S("midp.web", "false"))) {
if ($I$(1).isEventDispatchThread$()) {
this.panel.paintImmediately$I$I$I$I(0, 0, this.panel.getWidth$(), this.panel.getHeight$());
} else {
this.panel.repaint$();
}return;
}var paint=Clazz.new_($I$(13,1).c$$javax_microedition_lcdui_Canvas,[this]);
if ($I$(1).isEventDispatchThread$()) {
paint.run$();
} else {
try {
$I$(1).invokeAndWait$Runnable(paint);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.panel.repaint$();
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'getGameAction$I',  function (keyCode) {
if (keyCode < 0) {
switch (keyCode) {
case -1:
return 1;
case -2:
return 6;
case -3:
return 2;
case -4:
return 5;
case -5:
return 8;
default:
return 0;
}
}switch (keyCode) {
case 50:
return 1;
case 52:
return 2;
case 54:
return 5;
case 56:
return 6;
case 53:
return 8;
default:
return 0;
}
});

Clazz.newMeth(C$, 'paintCanvas$javax_microedition_lcdui_Graphics',  function (g) {
this.paint$javax_microedition_lcdui_Graphics(g);
}, p$1);

Clazz.newMeth(C$, 'keyPressed$I',  function (keyCode) {
});

Clazz.newMeth(C$, 'keyReleased$I',  function (keyCode) {
});

Clazz.newMeth(C$, 'keyRepeated$I',  function (keyCode) {
});

Clazz.newMeth(C$, 'pointerPressed$I$I',  function (x, y) {
});

Clazz.newMeth(C$, 'pointerReleased$I$I',  function (x, y) {
});

Clazz.newMeth(C$, 'pointerDragged$I$I',  function (x, y) {
});

Clazz.newMeth(C$, 'showNotify$',  function () {
});

Clazz.newMeth(C$, 'hideNotify$',  function () {
});

Clazz.newMeth(C$, 'showNotifyInternal$',  function () {
this.showNotify$();
});

Clazz.newMeth(C$, 'hideNotifyInternal$',  function () {
this.hideNotify$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Canvas, "CanvasFocusAdapter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.event.FocusAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['canvas','javax.microedition.lcdui.Canvas']]]

Clazz.newMeth(C$, 'c$$javax_microedition_lcdui_Canvas',  function (canvas) {
Clazz.super_(C$, this);
this.canvas=canvas;
}, 1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (e.getOppositeComponent$() != null ) {
return;
}$I$(1,"invokeLater$Runnable",[Clazz.new_($I$(2,1).c$$javax_microedition_lcdui_Canvas,[this.canvas])]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Canvas, "RequestFocusRunnable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['canvas','javax.microedition.lcdui.Canvas']]]

Clazz.newMeth(C$, 'c$$javax_microedition_lcdui_Canvas',  function (canvas) {
;C$.$init$.apply(this);
this.canvas=canvas;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
this.canvas.panel.requestFocusInWindow$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Canvas, "GamePanel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['canvas','javax.microedition.lcdui.Canvas']]]

Clazz.newMeth(C$, 'c$$javax_microedition_lcdui_Canvas',  function (canvas) {
Clazz.super_(C$, this);
this.canvas=canvas;
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (awt) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [awt]);
if (this.canvas.gameSurface == null  || this.canvas.gameSurface.getWidth$() != 800  || this.canvas.gameSurface.getHeight$() != 600 ) {
this.canvas.gameSurface=Clazz.new_($I$(3,1).c$$I$I$I,[800, 600, 1]);
}var buf=this.canvas.gameSurface.createGraphics$();
try {
buf.scale$D$D(2, 2);
buf.setClip$I$I$I$I(0, 0, 400, 300);
buf.setRenderingHint$java_awt_RenderingHints_Key$O($I$(4).KEY_ANTIALIASING, $I$(4).VALUE_ANTIALIAS_OFF);
buf.setColor$java_awt_Color(Clazz.new_($I$(5,1).c$$I,[69928]));
buf.fillRect$I$I$I$I(0, 0, 400, 300);
var g=Clazz.new_($I$(6,1).c$$java_awt_Graphics2D$Z,[buf, false]);
p$1.paintCanvas$javax_microedition_lcdui_Graphics.apply(this.canvas, [g]);
} finally {
buf.dispose$();
}
var screen=awt;
screen.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.canvas.gameSurface, 0, 0, null);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Canvas, "CanvasKeyAdapter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.event.KeyAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['canvas','javax.microedition.lcdui.Canvas']]]

Clazz.newMeth(C$, 'c$$javax_microedition_lcdui_Canvas',  function (canvas) {
Clazz.super_(C$, this);
this.canvas=canvas;
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
this.canvas.keyPressed$I(-6);
this.canvas.keyPressed$I(-5);
return;
}this.canvas.keyPressed$I($I$(7).mapKey$java_awt_event_KeyEvent(e));
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
this.canvas.keyReleased$I(-5);
this.canvas.keyReleased$I(-6);
return;
}this.canvas.keyReleased$I($I$(7).mapKey$java_awt_event_KeyEvent(e));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Canvas, "CanvasMouseAdapter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['canvas','javax.microedition.lcdui.Canvas']]]

Clazz.newMeth(C$, 'c$$javax_microedition_lcdui_Canvas',  function (canvas) {
Clazz.super_(C$, this);
this.canvas=canvas;
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.canvas.requestFocus$();
this.canvas.pointerPressed$I$I((e.getX$()/2|0), (e.getY$()/2|0));
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.canvas.pointerReleased$I$I((e.getX$()/2|0), (e.getY$()/2|0));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Canvas, "PaintImmediatelyRunnable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['canvas','javax.microedition.lcdui.Canvas']]]

Clazz.newMeth(C$, 'c$$javax_microedition_lcdui_Canvas',  function (canvas) {
;C$.$init$.apply(this);
this.canvas=canvas;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
this.canvas.panel.paintImmediately$I$I$I$I(0, 0, this.canvas.panel.getWidth$(), this.canvas.panel.getHeight$());
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
