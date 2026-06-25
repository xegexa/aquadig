(function(){var P$=Clazz.newPackage("javax.microedition.rms"),I$=[[0,'java.util.ArrayList','java.util.Collections','java.util.Comparator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RecordEnumerationImpl", null, null, 'javax.microedition.rms.RecordEnumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['cursor'],'O',['store','javax.microedition.rms.RecordStore','ids','java.util.List']]]

Clazz.newMeth(C$, 'c$$javax_microedition_rms_RecordStore$javax_microedition_rms_RecordFilter$javax_microedition_rms_RecordComparator$Z',  function (store, filter, comparator, keepUpdated) {
;C$.$init$.apply(this);
this.store=store;
this.ids=Clazz.new_($I$(1,1));
var n=store.getNumRecords$();
for (var i=1; i <= n; i++) {
var rec=store.getRecord$I(i);
if (filter == null  || filter.matches$BA(rec) ) {
this.ids.add$O(Integer.valueOf$I(i));
}}
if (comparator != null ) {
$I$(2,"sort$java_util_List$java_util_Comparator",[this.ids, $I$(3,"comparing$java_util_function_Function$java_util_Comparator",[((P$.RecordEnumerationImpl$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RecordEnumerationImpl$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$Integer','apply$O'],  function (id) { return (this.$finals$.store.getRecord$I((id).$c()));});
})()
), Clazz.new_(P$.RecordEnumerationImpl$lambda1.$init$,[this, {store:store}])), ((P$.RecordEnumerationImpl$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "RecordEnumerationImpl$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$BA$BA','compare$O$O'],  function (a, b) { return (this.$finals$.comparator.compare$BA$BA(a, b));});
})()
), Clazz.new_(P$.RecordEnumerationImpl$lambda2.$init$,[this, {comparator:comparator}]))])]);
}if (keepUpdated) {
}this.cursor=0;
}, 1);

Clazz.newMeth(C$, 'numRecords$',  function () {
return this.ids.size$();
});

Clazz.newMeth(C$, 'hasNextElement$',  function () {
return this.cursor < this.ids.size$();
});

Clazz.newMeth(C$, 'nextRecord$',  function () {
if (!this.hasNextElement$()) {
throw Clazz.new_(Clazz.load('javax.microedition.rms.InvalidRecordIDException'));
}var id=(this.ids.get$I(this.cursor++)).$c();
return this.store.getRecord$I(id);
});

Clazz.newMeth(C$, 'nextRecordId$',  function () {
if (!this.hasNextElement$()) {
throw Clazz.new_(Clazz.load('javax.microedition.rms.InvalidRecordIDException'));
}return (this.ids.get$I(this.cursor)).$c();
});

Clazz.newMeth(C$, 'reset$',  function () {
this.cursor=0;
});

Clazz.newMeth(C$, 'rebuild$',  function () {
this.cursor=0;
});

Clazz.newMeth(C$, 'destroy$',  function () {
this.ids.clear$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2026-06-25 15:29:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
