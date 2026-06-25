package com.vlm.redstar.client.ui;

import java.io.IOException;
import java.util.Vector;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Image;

public final class c {
   Image a;
   short[] b;
   String c;
   int d;
   int e;
   public int f;
   public int g;
   int h = 0;
   int i;
   int j;
   int k;
   int l;
   int m = 0;
   int n = 0;
   int o = 0;
   int p = 0;
   int q;
   int r;
   int s;
   int t;
   static Vector u;
   static int v;
   static int w;
   static boolean x = false;
   private static boolean D;
   static int y;
   private static int E;
   private static int F;
   private static int G;
   private static int H;
   static int z;
   static byte A;
   private static Image I;
   private static long J = 400L;
   static long B;
   static boolean C = false;
   private boolean K = false;

   /** Updates clip dimensions when the logical screen size changes (dynamic resolution). */
   public void setScreenDimensions(int width, int height) {
      this.i = width;
      this.j = height;
      this.l = this.j;
      this.o = width;
      this.p = height;
   }

   public c(Image var1, Image var2, String var3, short[] var4, int var5, int var6, int var7, int var8) throws IllegalArgumentException, IOException, NullPointerException {
      this.e = var5;
      this.f = var6;
      this.c = var3;
      this.a = var1;
      this.g = this.a.getHeight();
      this.d = this.a.getWidth();
      this.b = var4;
      this.i = var7;
      this.j = var8;
      I = var2;
      B = System.currentTimeMillis();
      C = true;
      this.k = 0;
      this.l = this.j;
      var2.getWidth();
      A = (byte)(var2.getHeight() >> 1);
      if (this.b.length != var3.length()) {
         throw new IllegalArgumentException(
            "The length of the 'charOffset' array (" + var4.length + ") does not match the length of the 'charOrder' String (" + var3.length() + ")"
         );
      } else {
         this.d();
         this.o = var7;
         this.p = var8;
      }
   }

   public final int a(Graphics var1, char var2, int var3, int var4) throws IllegalArgumentException {
      this.b(var1);
      int var6 = 0;
      int var7 = 0;
      if ((var7 = this.c.indexOf(var2)) > -1) {
         if (var7 != this.b.length - 1) {
            var6 = this.b[var7 + 1] - this.b[var7];
         } else {
            var6 = this.d - this.b[var7];
         }

         var1.setClip(var3, var4, var6, this.g);
         var1.clipRect(this.m, this.n, this.o, this.p);
         var1.drawImage(this.a, var3 - this.b[var7], var4, 20);
         var1.setClip(0, 0, this.i, this.j);
         this.c(var1);
         return var6 + this.e;
      } else if (var2 == ' ') {
         this.c(var1);
         return this.f + this.e;
      } else if (var2 != '\n' && var2 != '\r') {
         throw new IllegalArgumentException("The character '" + var2 + "' (" + var2 + ") is not supported by this font");
      } else {
         this.c(var1);
         return 0;
      }
   }

   public final int a(Graphics var1, String var2, int var3, int var4, int var5) throws IllegalArgumentException {
      if ("" != var2 && this.a(var3, var4)) {
         int var7;
         int var8;
         int var11;
         label45: {
            this.b(var1);
            var7 = var2.length();
            var8 = var3;
            boolean var9 = false;
            boolean var10 = false;
            var11 = this.a(var2);
            int var10000;
            int var10001;
            if (var5 == 8) {
               var10000 = var3;
               var10001 = var11;
            } else {
               if (var5 != 1) {
                  break label45;
               }

               var10000 = var3;
               var10001 = var11 >> 1;
            }

            var8 = var10000 - var10001;
         }

         for (int var12 = 0; var12 < var7; var12++) {
            char var6 = var2.charAt(var12);
            int var15;
            int var16;
            int var17;
            if ((var15 = this.c.indexOf(var6)) > -1) {
               int var14 = (var15 != this.b.length - 1 ? this.b[var15 + 1] : this.d) - this.b[var15];
               var1.setClip(var8, var4, var14, this.g);
               var1.clipRect(this.m, this.n, this.o, this.p);
               var1.drawImage(this.a, var8 - this.b[var15], var4, 20);
               int var13;
               var16 = var13 = var8 + var14;
               var17 = this.e;
            } else {
               if (var6 == '\n' || var6 == '\r') {
                  continue;
               }

               var16 = var8;
               var17 = this.f;
            }

            var8 = var16 + var17;
         }

         this.c(var1);
         return var11;
      } else {
         return 0;
      }
   }

   public final int a(String var1) {
      if ("" == var1) {
         return 0;
      } else {
         int var2 = -this.e;
         int var3 = 0;
         int var4 = var1.length();

         for (int var5 = 0; var5 < var4; var5++) {
            int var7;
            int var8;
            if ((var3 = this.c.indexOf(var1.charAt(var5))) > -1) {
               if (var3 != this.b.length - 1) {
                  var7 = var2;
                  var8 = this.b[var3 + 1];
               } else {
                  var7 = var2;
                  var8 = this.d;
               }

               var7 += var8 - this.b[var3];
               var8 = this.e;
            } else {
               var7 = var2;
               var8 = this.f;
            }

            var2 = var7 + var8;
         }

         return var2;
      }
   }

   public final int a(char var1) {
      if (var1 == ' ') {
         return this.f + this.e;
      } else {
         int var2 = 0;
         int var3 = 0;
         if ((var2 = this.c.indexOf(var1)) > -1) {
            byte var10000;
            int var10001;
            if (var2 != this.b.length - 1) {
               var10000 = 0;
               var10001 = this.b[var2 + 1];
            } else {
               var10000 = 0;
               var10001 = this.d;
            }

            var3 = var10000 + (var10001 - this.b[var2]) + this.e;
         }

         return var3;
      }
   }

   private void d() {
      for (int var2 = 0; var2 < this.c.length(); var2++) {
         int var1;
         if ((var1 = this.a(this.c.charAt(var2))) > this.h) {
            this.h = var1;
         }
      }
   }

   public final Vector a(String var1, int var2) {
      StringBuffer var3 = new StringBuffer(128);
      int var5 = 0;
      int var6 = var1.length();
      Vector var7 = new Vector();
      int var8 = 0;
      int var9 = 0;

      do {
         char var4;
         if ((var4 = var1.charAt(var5)) != '\r') {
            if (var4 != '\n') {
               var3.append(var4);
               if (var4 == ' ') {
                  var8 = var5;
               }

               if (this.a(var3.toString()) > var2) {
                  if (var8 != 0 && var8 == var5) {
                     var7.addElement(var3.toString());
                     var3.delete(0, 128);
                     var8 = 0;
                     var9 = var5 + 1;
                  } else if (var8 != 0 && var8 > var9) {
                     var7.addElement(var3.toString().substring(0, var8 - var9));
                     var3.delete(0, 128);
                     var5 = var8;
                     var9 = var8 + 1;
                     var8 = 0;
                  } else {
                     String var10 = var3.toString();
                     var7.addElement(var10.substring(0, var10.length() - 1));
                     var3.delete(0, 128);
                     var8 = 0;
                     var9 = var5--;
                  }

                  if (var1.charAt(var9) == '\n' || var1.charAt(var9) == '\r') {
                     var5++;
                     var9++;
                  }
               }
            } else {
               var7.addElement(var3.toString());
               var3.delete(0, 128);
               var8 = 0;
               var9 = var5 + 1;
            }
         }
      } while (++var5 < var6);

      if (var3.length() > 0) {
         var7.addElement(var3.toString());
      }

      return var7;
   }

   public final void a(Graphics var1, Vector var2, int var3, int var4, int var5) {
      if (!var2.isEmpty()) {
         this.b(var1);
         int var6 = var2.size();

         for (int var7 = 0; var7 < var6; var7++) {
            if (var5 == 1) {
               this.a(var1, (String)var2.elementAt(var7), var3, var4 + var7 * this.g);
            } else {
               this.a(var1, (String)var2.elementAt(var7), var3, var4 + var7 * this.g, var5);
            }
         }

         this.c(var1);
      }
   }

   public final void a(Graphics var1, String var2, int var3, int var4) {
      if (var2 != null && var2 != "") {
         this.b(var1);
         int var5 = this.a(var2);
         this.a(var1, var2, var3 - (var5 >> 1), var4, 4);
         this.c(var1);
      }
   }

   public final int a(Vector var1) {
      return var1 != null && var1.size() != 0 ? var1.size() * this.g : 0;
   }

   private static void e() {
      B = System.currentTimeMillis();
      C = true;
   }

   private static void f() {
      if (System.currentTimeMillis() - B > J) {
         C = !C;
         B = System.currentTimeMillis();
      }
   }

   private boolean a(int var1, int var2) {
      if (var1 > this.i) {
         return false;
      } else {
         return var2 + this.g < this.k ? false : var2 <= this.l;
      }
   }

   public final void a(String var1, int var2, int var3, int var4, int var5, boolean var6) {
      if (var1 == null || var1 == "") {
         var1 = "YOU PASSED A NULL STRING FOR YOUR TEXT REGION!";
      }

      u = this.a(var1, var4);
      e();
      int var7 = this.a(u) + 4;
      D = var6;
      G = var5;
      H = var4;
      if (var7 > var5) {
         x = true;
         var5 -= 2 * A;
         int var10000 = 0;

         while (true) {
            y = var10000;
            if (y >= u.size()) {
               break;
            }

            if (y * this.g >= var5) {
               y--;
               break;
            }

            var10000 = y + 1;
         }

         v = 0;
         w = v + y;
         int var8 = 4 + 2 * A + y * this.g;
         int var10;
         z = ((var10 = var5 + 2 * A) - var8) / 2;
         if (z < 0) {
            z = 0;
         }
      } else {
         x = false;
      }

      E = var2;
      F = var3;
   }

   public final void a(Graphics var1) {
      int var2 = F;
      if (!x) {
         if (u != null) {
            this.b(var1);
            this.a(var1, u, D ? E + (H >> 1) : E, var2, D ? 1 : 4);
         }
      } else {
         this.b(var1);
         f();
         var2 += z;
         if (v != 0 && C) {
            var1.setClip(0, var2, this.i, A);
            var1.drawImage(I, this.i / 2, var2, 17);
         }

         if (w != u.size() && C) {
            var2 = F + G - 2;
            var1.setClip(0, var2 - A, this.i, A);
            var1.drawImage(I, this.i / 2, var2, 33);
         }

         var1.setClip(this.q, this.r, this.s, this.t);
         int var3 = 0;

         for (int var4 = v; var4 < w; var4++) {
            String var5 = (String)u.elementAt(var4);
            var2 = F + z + var3 * this.g + A;
            if (D) {
               this.a(var1, var5, E + (H >> 1), var2);
            } else {
               this.a(var1, var5, E, var2, 4);
            }

            var3++;
         }

         var1.setClip(0, 0, this.i, this.j);
      }
   }

   public final void a(Graphics var1, int var2) {
      int var3 = F;
      F = var2;
      this.a(var1);
      F = var3;
   }

   public final int a() {
      if (u == null || u.size() == 0) {
         return 0;
      } else {
         return x ? y * this.g + A : this.a(u);
      }
   }

   public static boolean b() {
      return u != null && x;
   }

   public static boolean a(boolean var0) {
      if (u == null || !x) {
         return false;
      } else if (var0) {
         if (v - 1 >= 0) {
            v--;
            w--;
         }

         return true;
      } else if (!var0) {
         if (w + 1 <= u.size()) {
            v++;
            w++;
         }

         return true;
      } else {
         return false;
      }
   }

   public final void c() {
      u = null;
      G = 0;
      H = 0;
      z = 0;
      E = 0;
      F = 0;
      e();
   }

   private void b(Graphics var1) {
      if (!this.K) {
         this.q = var1.getClipX();
         this.r = var1.getClipY();
         this.s = var1.getClipWidth();
         this.t = var1.getClipHeight();
         this.m = this.q;
         this.n = this.r;
         this.o = this.s;
         this.p = this.t;
         this.K = true;
      }
   }

   private void c(Graphics var1) {
      var1.setClip(this.q, this.r, this.s, this.t);
      this.K = false;
   }
}
