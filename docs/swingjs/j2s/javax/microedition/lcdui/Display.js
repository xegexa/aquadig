(function(){var P$=Clazz.newPackage("javax.microedition.lcdui"),I$=[[0,'javax.swing.JFrame','javax.microedition.lcdui.GameDimensions','java.awt.event.WindowAdapter','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Display");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['frame','javax.swing.JFrame','current','javax.microedition.lcdui.Displayable']]
,['O',['instance','javax.microedition.lcdui.Display']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.frame=Clazz.new_($I$(1,1).c$$S,["AquaDig"]);
this.frame.setDefaultCloseOperation$I(3);
this.frame.setResizable$Z($I$(2).isDynamic$());
this.frame.setUndecorated$Z(true);
this.frame.addWindowFocusListener$java_awt_event_WindowFocusListener(((P$.Display$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Display$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowGainedFocus$java_awt_event_WindowEvent',  function (e) {
if (Clazz.instanceOf(this.b$['javax.microedition.lcdui.Display'].current, "javax.microedition.lcdui.Canvas")) {
(this.b$['javax.microedition.lcdui.Display'].current).requestFocus$();
}});
})()
), Clazz.new_($I$(3,1),[this, null],P$.Display$1)));
this.frame.addWindowListener$java_awt_event_WindowListener(((P$.Display$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Display$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent',  function (e) {
if (Clazz.instanceOf(this.b$['javax.microedition.lcdui.Display'].current, "javax.microedition.lcdui.Canvas")) {
(this.b$['javax.microedition.lcdui.Display'].current).requestFocus$();
}});
})()
), Clazz.new_($I$(3,1),[this, null],P$.Display$2)));
}, 1);

Clazz.newMeth(C$, 'getDisplay$javax_microedition_midlet_MIDlet',  function (m) {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'shutdown$',  function () {
if (C$.instance != null  && C$.instance.frame != null  ) {
C$.instance.frame.dispose$();
C$.instance=null;
}}, 1);

Clazz.newMeth(C$, 'setCurrent$javax_microedition_lcdui_Displayable',  function (d) {
if (Clazz.instanceOf(this.current, "javax.microedition.lcdui.Canvas")) {
(this.current).hideNotifyInternal$();
}this.current=d;
this.frame.getContentPane$().removeAll$();
if (Clazz.instanceOf(d, "javax.microedition.lcdui.Canvas")) {
var c=d;
this.frame.add$java_awt_Component(c.getPanel$());
this.frame.pack$();
this.frame.setLocationRelativeTo$java_awt_Component(null);
this.frame.setVisible$Z(true);
c.showNotifyInternal$();
c.requestFocus$();
}});

Clazz.newMeth(C$, 'getCurrent$',  function () {
return this.current;
});

Clazz.newMeth(C$, 'vibrate$I',  function (durationMs) {
$I$(4).getDefaultToolkit$().beep$();
});
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
