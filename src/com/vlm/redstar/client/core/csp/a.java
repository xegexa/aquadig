package com.vlm.redstar.client.core.csp;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Random;
import java.util.Vector;
import javax.microedition.io.Connector;
import javax.microedition.io.HttpConnection;
import javax.microedition.midlet.MIDlet;
import javax.microedition.rms.RecordEnumeration;
import javax.microedition.rms.RecordStore;
import javax.microedition.rms.RecordStoreException;
import javax.microedition.rms.RecordStoreFullException;
import javax.microedition.rms.RecordStoreNotFoundException;

public final class a implements Runnable {
   boolean a = false;
   String b = null;
   static String c = "Test";
   static String d = "&c=" + c;
   public Vector e = null;
   public Vector f = null;
   public Vector g = null;
   static Hashtable h = null;
   private String t = null;
   Vector i = new Vector();
   private static String u = "http://";
   byte[] j = null;
   String k = null;
   int l = -1;
   byte[] m = null;
   String n = null;
   static String o = "/ServletMPG?t=csp" + d + "&p=LG" + "&d=";
   HttpConnection p = null;
   DataInputStream q = null;
   private int v = -1;
   private Thread w = null;
   private static int x = 0;
   private int y = 0;
   static com.vlm.redstar.client.core.csp.a r = null;
   String s = null;

   public static com.vlm.redstar.client.core.csp.a a(MIDlet var0, String var1) {
      try {
         if (r == null && var0 != null) {
            r = new com.vlm.redstar.client.core.csp.a(var0, var1);
         }
      } catch (Exception var3) {
      }

      return r;
   }

   public static void a() {
      if (r != null) {
         r = null;
         System.gc();
      }
   }

   private a(MIDlet var1, String var2) throws Exception {
      this.s = var2;
      this.a(var1);
   }

   private static String b(MIDlet var0, String var1) throws Exception {
      Object var2 = null;

      try {
         return var0.getAppProperty(var1);
      } catch (Exception var4) {
         throw new Exception("NetworkManager() - Error\n" + var1 + " is missing from the JAD!");
      }
   }

   private void a(MIDlet var1) throws Exception {
      String var2;
      if ((var2 = b(var1, "Redstar-CarrierId")) != null) {
         c = var2;
         d = "&c=" + c;
         o = "/ServletMPG?t=csp" + d + "&p=LG" + "&d=";
      }
   }

   private static void a(int var0, StringBuffer var1) {
      if (var0 < 16 && var0 >= 0) {
         var1.append('0');
      }

      var1.append(Integer.toHexString(var0 & 0xFF));
   }

   public final int b() {
      return this.y;
   }

   public static int c() {
      return x;
   }

   public final boolean d() {
      if (x != 1) {
         this.y = 0;
         x = 0;
         return true;
      } else {
         return false;
      }
   }

   private boolean f() {
      boolean var1 = false;
      if (!this.i()) {
         var1 = true;
         if (!this.j()) {
            x = 4;
            return false;
         }
      }

      this.g();
      if (this.b == null) {
         if (var1) {
            x = 4;
            return false;
         }

         if (!this.j()) {
            x = 4;
            return false;
         }

         this.g();
      }

      if (this.b != null) {
         this.a = true;
         return true;
      } else {
         x = 4;
         return false;
      }
   }

   private void g() {
      Object var1 = null;
      int var2 = 0;
      Vector var3 = a(this.i);

      while (var2 < var3.size()) {
         try {
            var1 = (String)var3.elementAt(var2);
            var2++;
            byte[] var4 = null;
            if (this.t != null) {
               ByteArrayOutputStream var5 = new ByteArrayOutputStream();
               new DataOutputStream(var5).writeUTF(this.t);
               var4 = var5.toByteArray();
            }

            StringBuffer var15;
            (var15 = new StringBuffer(u.length() + ((String)var1).length() + o.length() + 2 + "&r=n".length() + (var4 != null ? var4.length * 2 : 0))).append(u);
            var15.append((String)var1);
            var15.append(o);
            a(1, var15);
            if (this.t != null) {
               for (int var6 = 0; var6 < var4.length; var6++) {
                  a(var4[var6], var15);
               }
            }

            var15.append("&r=n");
            this.c(var15.toString());
            if (this.l == 200 && this.j != null && this.j.length > 0) {
               ByteArrayInputStream var16 = new ByteArrayInputStream(this.j);
               DataInputStream var7 = new DataInputStream(var16);
               if (1 == var7.readByte()) {
                  com.vlm.redstar.client.core.csp.a var10000;
                  StringBuffer var10001;
                  if (var7.readByte() == 1) {
                     String var9 = var7.readUTF();
                     int var10;
                     byte[] var11 = new byte[var10 = var7.readInt()];

                     for (int var12 = 0; var12 < var10; var12++) {
                        var11[var12] = var7.readByte();
                     }

                     this.a(var9, new String(var11));
                     var10000 = this;
                     var10001 = new StringBuffer();
                  } else {
                     var10000 = this;
                     var10001 = new StringBuffer();
                  }

                  var10000.b = var10001.append(u).append((String)var1).toString();
                  this.h();
                  return;
               }
            }
         } catch (Throwable var13) {
         }
      }
   }

   private void h() {
      try {
         boolean var1 = false;
         if (a("Uid") == null) {
            StringBuffer var3;
            (var3 = new StringBuffer(this.b.length() + o.length() + 2 + "&r=y".length())).append(this.b);
            var3.append(o);
            a(-28, var3);
            var3.append("&r=y");
            this.c(var3.toString());
            if (this.l == 200) {
               ByteArrayInputStream var4 = new ByteArrayInputStream(this.j);
               DataInputStream var5;
               if ((var5 = new DataInputStream(var4)).readByte() == -28) {
                  String var7 = var5.readUTF();
                  ByteArrayOutputStream var8 = new ByteArrayOutputStream();
                  DataOutputStream var9;
                  (var9 = new DataOutputStream(var8)).writeUTF(var7);
                  a("Uid", var8.toByteArray(), true);
                  var9.close();
               }

               var5.close();
            }
         }
      } catch (Throwable var10) {
      }
   }

   private boolean b(String var1) {
      if (var1 == null) {
         return false;
      } else {
         int var2 = 0;
         int var3 = 0;
         this.i.removeAllElements();

         try {
            var1.indexOf(10, 0);

            while (var2 < var1.length()) {
               if ((var3 = var1.indexOf(10, var2)) == -1) {
                  var3 = var1.length();
               }

               String var10000;
               int var10001;
               int var10002;
               if (var1.charAt(var3 - 1) == '\r') {
                  var10000 = var1;
                  var10001 = var2;
                  var10002 = var3 - 1;
               } else {
                  var10000 = var1;
                  var10001 = var2;
                  var10002 = var3;
               }

               String var4 = var10000.substring(var10001, var10002);
               var2 = var3 + 1;
               this.i.addElement(var4);
            }

            return true;
         } catch (Throwable var6) {
            return false;
         }
      }
   }

   private boolean i() {
      try {
         DataInputStream var1;
         if ((var1 = a("srvInfo")) == null) {
            return false;
         } else {
            this.t = var1.readUTF();
            String var2 = var1.readUTF();
            return this.b(var2);
         }
      } catch (Throwable var3) {
         var3.printStackTrace();
         return false;
      }
   }

   private void a(String var1, String var2) {
      try {
         if (this.b(var2)) {
            ByteArrayOutputStream var3 = new ByteArrayOutputStream();
            DataOutputStream var4;
            (var4 = new DataOutputStream(var3)).writeUTF(var1);
            var4.writeUTF(var2);
            a("srvInfo", var3.toByteArray(), true);
            var4.close();
            var3.close();
            this.t = var1;
         }
      } catch (Throwable var5) {
      }
   }

   private boolean j() {
      this.t = null;
      byte[] var1 = d("/res/servers.txt");

      try {
         return this.b(new String(var1));
      } catch (Throwable var3) {
         return false;
      }
   }

   private boolean k() {
      if (x != 1 && x != 4) {
         x = 1;
         return !this.a && !this.f() ? false : x != 4;
      } else {
         return false;
      }
   }

   public final synchronized boolean e() {
      if (this.v == -1) {
         this.v = 3;
         this.y = 2;
         this.w = new Thread(this);
         this.w.start();
         return true;
      } else {
         return false;
      }
   }

   public final synchronized boolean a(int var1, int var2, int var3) {
      if (this.v != -1) {
         return false;
      } else {
         this.v = 5;
         this.y = 4;
         ByteArrayOutputStream var4 = new ByteArrayOutputStream();
         DataOutputStream var5 = new DataOutputStream(var4);

         try {
            var5.writeInt(var1);
            var5.writeByte(var3);
            var5.writeInt(var2);
         } catch (Throwable var9) {
            x = 3;
            return true;
         }

         byte[] var6 = var4.toByteArray();
         StringBuffer var7;
         (var7 = new StringBuffer(o.length() + "&r=y".length() + 2 + var6.length * 2 + "&g=".length() + this.s.length())).append(o);
         a(-50, var7);

         for (int var8 = 0; var8 < var6.length; var8++) {
            a(var6[var8], var7);
         }

         var7.append("&r=y");
         var7.append("&g=");
         var7.append(this.s);
         this.n = var7.toString();
         this.w = new Thread(this);
         this.w.start();
         return true;
      }
   }

   public final synchronized boolean a(String var1, byte[] var2) {
      if (this.v == -1) {
         this.v = 6;
         this.y = 5;
         if (var1 == null) {
            x = 3;
            return false;
         } else if (var2 == null) {
            x = 3;
            return false;
         } else {
            try {
               ByteArrayOutputStream var3 = new ByteArrayOutputStream();
               DataOutputStream var4;
               (var4 = new DataOutputStream(var3)).writeUTF(var1);
               var4.write(var2);
               this.m = var3.toByteArray();
            } catch (Throwable var5) {
               x = 3;
               return true;
            }

            this.w = new Thread(this);
            this.w.start();
            return true;
         }
      } else {
         return false;
      }
   }

   private void l() {
      if (!this.k()) {
         x = 3;
      } else if (a("Uid") == null) {
         x = 3;
      } else {
         StringBuffer var2;
         (var2 = new StringBuffer(this.b.length() + o.length() + "&r=y".length() + 2 + "&g=".length() + this.s.length())).append(this.b);
         var2.append(o);
         a(-25, var2);
         var2.append("&g=");
         var2.append(this.s);
         this.k = var2.toString();
         this.c(this.k);
         if (this.l != 200) {
            this.j = null;
            x = 3;
         } else {
            try {
               ByteArrayInputStream var3 = new ByteArrayInputStream(this.j);
               DataInputStream var4;
               (var4 = new DataInputStream(var3)).readByte();
               short var5 = var4.readShort();
               this.g = new Vector(var5);

               for (int var6 = 0; var6 < var5; var6++) {
                  this.g.addElement(var4.readUTF());
               }

               x = 2;
            } catch (Throwable var7) {
               x = 3;
            }
         }
      }
   }

   private void m() {
      if (!this.k()) {
         x = 3;
      } else {
         this.k = this.b + this.n;
         this.c(this.k);
         if (this.l != 200) {
            this.j = null;
            x = 3;
         } else {
            try {
               DataInputStream var2;
               String var3;
               String var4;
               Integer var5;
               byte var6;
               Integer var7;
               Object var8;
               label39: {
                  ByteArrayInputStream var1 = new ByteArrayInputStream(this.j);
                  (var2 = new DataInputStream(var1)).readByte();
                  var3 = var2.readUTF();
                  var4 = var2.readUTF();
                  var5 = new Integer(var2.readInt());
                  var6 = var2.readByte();
                  var7 = new Integer(var2.readInt());
                  var8 = null;
                  Object var10000;
                  if (var6 == 0) {
                     var10000 = new Integer(var2.readInt());
                  } else {
                     if (var6 != 1) {
                        break label39;
                     }

                     var10000 = var2.readUTF();
                  }

                  var8 = var10000;
               }

               byte var9 = var2.readByte();
               int var10 = var2.readInt();
               if (this.e == null) {
                  this.e = new Vector();
               } else {
                  this.e.removeAllElements();
               }

               this.e.addElement(var5);
               this.e.addElement(new Byte(var6));
               this.e.addElement(var7);
               this.e.addElement(var8);
               this.e.addElement(var3);
               this.e.addElement(var4);
               if (var9 > 0) {
                  char[] var11 = new char[2];

                  for (int var12 = 0; var12 < var9; var12++) {
                     this.e.addElement(new Integer(var12 + var10));
                     String var13 = var2.readUTF();
                     this.e.addElement(var13);
                     int var14 = var2.readInt();
                     this.e.addElement(new Integer(var14));
                     var11[0] = (char)var2.readByte();
                     var11[1] = (char)var2.readByte();
                     this.e.addElement(new String(var11));
                  }
               }

               x = 2;
            } catch (Throwable var15) {
               x = 3;
            }
         }
      }
   }

   private void n() {
      if (!this.k()) {
         x = 3;
      } else {
         StringBuffer var1;
         (var1 = new StringBuffer(this.b.length() + o.length() + "&r=y".length() + 2 + "&g=".length() + this.s.length())).append(this.b);
         var1.append(o);
         a(-51, var1);
         var1.append("&g=");
         var1.append(this.s);
         var1.append("&r=y");
         this.k = var1.toString();
         this.c(this.k);
         if (this.l != 200) {
            this.j = null;
            x = 3;
         } else {
            try {
               if (this.j != null) {
                  ByteArrayInputStream var2 = new ByteArrayInputStream(this.j);
                  DataInputStream var3;
                  (var3 = new DataInputStream(var2)).readByte();
                  this.f = new Vector();
                  short var6 = var3.readShort();
                  this.f.addElement(new Short(var6));

                  for (int var7 = 0; var7 < var6; var7++) {
                     int var5 = var3.readInt();
                     String var4 = var3.readUTF();
                     Integer var8 = new Integer(var3.readInt());
                     byte var9 = var3.readByte();
                     Integer var10 = new Integer(var3.readInt());
                     Object var11 = new Integer(var3.readInt());
                     if (var9 == 1) {
                        var11 = var3.readUTF();
                     }

                     this.f.addElement(new Integer(var5));
                     this.f.addElement(var4);
                     this.f.addElement(var8);
                     this.f.addElement(new Byte(var9));
                     this.f.addElement(var10);
                     this.f.addElement(var11);
                  }
               }

               x = 2;
            } catch (Throwable var12) {
               x = 3;
            }
         }
      }
   }

   private void o() {
      if (!this.k()) {
         x = 3;
      } else if (a("Uid") == null) {
         x = 3;
      } else {
         StringBuffer var2;
         (var2 = new StringBuffer(this.b.length() + o.length() + "&r=n".length() + 2 + this.m.length * 2 + "&g=".length() + this.s.length())).append(this.b);
         var2.append(o);
         a(-49, var2);

         for (int var3 = 0; var3 < this.m.length; var3++) {
            a(this.m[var3], var2);
         }

         var2.append("&r=n");
         var2.append("&g=");
         var2.append(this.s);
         this.k = var2.toString();
         this.c(this.k);
         byte var10000;
         if (this.l != 200) {
            this.j = null;
            var10000 = 3;
         } else {
            var10000 = 2;
         }

         x = var10000;
      }
   }

   public final void run() {
      switch (this.v) {
         case 2:
            this.l();
            break;
         case 3:
            this.n();
         case 4:
         default:
            break;
         case 5:
            this.m();
            break;
         case 6:
            this.o();
      }

      this.k = null;
      this.j = null;
      this.v = -1;
   }

   private void c(String var1) {
      this.l = 417;
      DataInputStream var2;
      if ((var2 = a("Uid")) != null) {
         try {
            String var3 = var2.readUTF();
            var1 = var1 + "&u=" + var3;
         } catch (Throwable var11) {
         }
      }

      try {
         this.p = (HttpConnection)Connector.open(var1);
         this.p.setRequestMethod("GET");
         this.p.setRequestProperty("Content-Length", "0");
         this.l = this.p.getResponseCode();
         if (this.l == 200) {
            this.q = this.p.openDataInputStream();
            int var14;
            if ((var14 = this.q.available()) > 0) {
               this.j = new byte[var14];
               this.q.readFully(this.j, 0, var14);
            } else {
               int var4 = this.q.read();
               ByteArrayOutputStream var5 = new ByteArrayOutputStream();

               for (DataOutputStream var6 = new DataOutputStream(var5); var4 != -1; var4 = this.q.read()) {
                  var6.writeByte(var4);
               }

               this.j = var5.toByteArray();
            }
         }

         this.p();
         return;
      } catch (Throwable var12) {
         var12.printStackTrace();
      } finally {
         this.p();
      }
   }

   private void p() {
      if (this.q != null) {
         try {
            this.q.close();
            this.q = null;
         } catch (Throwable var2) {
         }
      }

      if (this.p != null) {
         try {
            this.p.close();
            this.p = null;
            return;
         } catch (Throwable var3) {
         }
      }
   }

   public static DataInputStream a(String var0) {
      if (h == null) {
         r();
      }

      byte[] var1 = (byte[])h.get(var0);
      if (null == var1) {
         return null;
      } else {
         ByteArrayInputStream var2 = new ByteArrayInputStream(var1);
         return new DataInputStream(var2);
      }
   }

   public static void a(String var0, byte[] var1, boolean var2) throws RecordStoreFullException {
      if (h == null) {
         r();
      }

      h.put(var0, var1);
      if (var2) {
         q();
      }
   }

   private static synchronized void q() throws RecordStoreFullException {
      if (null != h) {
         synchronized (h) {
            try {
               RecordStore.deleteRecordStore("saveData");
            } catch (RecordStoreNotFoundException var9) {
            } catch (RecordStoreException var10) {
            }

            try {
               RecordStore var1 = RecordStore.openRecordStore("saveData", true);
               Enumeration var2 = h.keys();

               while (var2.hasMoreElements()) {
                  ByteArrayOutputStream var3 = new ByteArrayOutputStream();
                  DataOutputStream var4 = new DataOutputStream(var3);
                  String var5 = (String)var2.nextElement();
                  byte[] var6 = (byte[])h.get(var5);
                  var4.writeUTF(var5);
                  var4.write(var6);
                  byte[] var7 = var3.toByteArray();
                  var4.close();
                  var3.close();
                  var1.addRecord(var7, 0, var7.length);
               }

               var1.closeRecordStore();
            } catch (RecordStoreFullException var11) {
               throw var11;
            } catch (Throwable var12) {
            }
         }
      }
   }

   private static synchronized void r() {
      try {
         if (h == null) {
            h = new Hashtable();
         }

         synchronized (h) {
            RecordStore var1;
            RecordEnumeration var2 = (var1 = RecordStore.openRecordStore("saveData", false)).enumerateRecords(null, null, false);

            while (var2.hasNextElement()) {
               byte[] var5 = var2.nextRecord();
               ByteArrayInputStream var3 = new ByteArrayInputStream(var5);
               DataInputStream var4;
               String var6 = (var4 = new DataInputStream(var3)).readUTF();
               byte[] var7 = new byte[var4.available()];
               var4.readFully(var7);
               h.put(var6, var7);
               var4.close();
               var3.close();
            }

            var1.closeRecordStore();
         }
      } catch (RecordStoreNotFoundException var10) {
         return;
      } catch (Throwable var11) {
      }
   }

   private static byte[] d(String var0) {
      try {
         InputStream var1;
         if ((var1 = var0.getClass().getResourceAsStream(var0)) == null) {
            return null;
         } else {
            DataInputStream var2;
            int var3 = (var2 = new DataInputStream(var1)).available();
            int var5 = 0;
            byte[] var6 = new byte[var3];

            int var4;
            do {
               if ((var4 = var2.read()) != -1) {
                  var6[var5] = (byte)var4;
                  var5++;
               }
            } while (var4 != -1);

            return var6;
         }
      } catch (Throwable var7) {
         return null;
      }
   }

   private static final Vector a(Vector var0) {
      try {
         if (var0 == null) {
            return new Vector(0);
         } else {
            Vector var1 = new Vector(var0.size());

            for (int var2 = 0; var2 < var0.size(); var2++) {
               var1.addElement(var0.elementAt(var2));
            }

            Vector var8 = new Vector();
            Random var3 = new Random(System.currentTimeMillis());
            int var4 = var1.size();

            for (int var5 = 0; var5 < var0.size(); var5++) {
               int var6 = Math.abs(var3.nextInt() % var4);
               var8.addElement(var1.elementAt(var6));
               var1.removeElementAt(var6);
               var4--;
            }

            return var8;
         }
      } catch (Throwable var7) {
         return new Vector(0);
      }
   }
}
