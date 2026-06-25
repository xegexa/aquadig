(function(){var P$=Clazz.newPackage("javax.microedition.media"),I$=[[0,'javax.sound.midi.MidiSystem','java.io.ByteArrayInputStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MidiPlayer", null, null, 'javax.microedition.media.Player');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.state=100;
},1);

C$.$fields$=[['I',['state','loopCount'],'O',['data','byte[]','sequencer','javax.sound.midi.Sequencer']]]

Clazz.newMeth(C$, 'c$$BA',  function (data) {
;C$.$init$.apply(this);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'realize$',  function () {
if (this.state == 0) {
return;
}try {
if (this.sequencer == null ) {
this.sequencer=$I$(1).getSequencer$Z(false);
if (this.sequencer == null ) {
throw Clazz.new_(Clazz.load('javax.microedition.media.MediaException').c$$S,["no MIDI sequencer"]);
}this.sequencer.open$();
var seq=$I$(1,"getSequence$java_io_InputStream",[Clazz.new_($I$(2,1).c$$BA,[this.data])]);
this.sequencer.setSequence$javax_sound_midi_Sequence(seq);
}this.state=200;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException") || Clazz.exceptionOf(e$$,"javax.sound.midi.InvalidMidiDataException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.microedition.media.MediaException').c$$S,[e.getMessage$()]);
}
} else if (Clazz.exceptionOf(e$$,"javax.sound.midi.MidiUnavailableException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.microedition.media.MediaException').c$$S,[e.getMessage$()]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'prefetch$',  function () {
if (this.state != 0) {
this.state=300;
}});

Clazz.newMeth(C$, 'start$',  function () {
if (this.state == 0) {
return;
}if (this.sequencer == null ) {
this.realize$();
}try {
if (this.loopCount == -1) {
this.sequencer.setLoopCount$I(-1);
} else {
this.sequencer.setLoopCount$I(Math.max(0, this.loopCount));
}this.sequencer.start$();
this.state=400;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('javax.microedition.media.MediaException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'stop$',  function () {
if (this.sequencer != null  && this.sequencer.isOpen$() ) {
this.sequencer.stop$();
}if (this.state == 400) {
this.state=300;
}});

Clazz.newMeth(C$, 'deallocate$',  function () {
try {
this.stop$();
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"javax.microedition.media.MediaException")){
} else {
throw ignored;
}
}
if (this.sequencer != null  && this.sequencer.isOpen$() ) {
this.sequencer.close$();
this.sequencer=null;
}this.state=200;
});

Clazz.newMeth(C$, 'close$',  function () {
try {
this.deallocate$();
} catch (ignored) {
}
this.state=0;
});

Clazz.newMeth(C$, 'setLoopCount$I',  function (count) {
this.loopCount=count;
});

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
