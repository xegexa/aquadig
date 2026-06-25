package aquadig;

import java.util.Vector;
import javax.microedition.lcdui.Graphics;

public class e {
   private static Vector a = new Vector();
   private static int b = 0;
   int Q;
   int R;
   int S;
   int T;
   int U;
   boolean V;
   int W;
   int X;
   boolean Y = false;
   boolean Z = false;
   boolean aa = false;

   protected e(int var1, int var2) {
      this.Q = var1;
      this.R = var2;
      this.V = true;
      this.U = 6;
      a.addElement(this);
      b++;
   }

   static void o() {
      if (a != null) {
         a.removeAllElements();
      }

      b = 0;
   }

   public static void a(e var0) {
      var0.V = false;
      a.removeElement(var0);
      b--;
   }

   public void a(Graphics var1) {
      int var2 = this.Q + g.l;
      int var3 = this.R + g.m;
      var1.setClip(0, 0, d.bw, d.bh);
      var1.setColor(0, 0, 255);
      var1.fillArc(var2 - this.U, var3 - this.U, this.U * 2, this.U * 2, 0, 360);
   }

   public void a() {
   }

   public static void p() {
      for (int var1 = 0; var1 < b; var1++) {
         e var0 = (e)a.elementAt(var1);

         try {
            var0.a();
         } catch (Throwable var3) {
            a(var0);
         }
      }
   }

   public static void b(Graphics var0) {
      for (int var2 = 0; var2 < b; var2++) {
         e var1 = (e)a.elementAt(var2);

         try {
            var1.a(var0);
         } catch (Throwable var4) {
            a(var1);
         }
      }
   }

   public void c() {
      this.S = this.Q / 32;
      this.T = this.R / 32;
   }

   final boolean q() {
      int var1;
      if ((var1 = this.T - 1) < 0) {
         return false;
      } else {
         for (int var2 = this.S - 1; var2 < this.S + 2; var2++) {
            if (var2 < -1) {
               return false;
            }

            if (!g.d(var2, var1) && Mid.a(this.Q - this.U, this.R - this.U, this.U * 2, this.U * 2, var2 * 32, var1 * 32, 32, 32)) {
               return true;
            }
         }

         return false;
      }
   }

   final boolean r() {
      int var1 = this.T + 1;
      boolean var2 = false;

      try {
         for (int var5 = this.S - 1; var5 < this.S + 2; var5++) {
            if (var5 < -1) {
               return false;
            }

            if (var5 >= 32 && var1 >= 900) {
               return true;
            }

            if (!g.d(var5, var1) && Mid.a(this.Q - this.U, this.R - this.U, this.U * 2, this.U * 2, var5 * 32, var1 * 32, 32, 32)) {
               return true;
            }
         }
      } catch (Throwable var4) {
      }

      return false;
   }

   final boolean s() {
      int var1 = this.S - 1;

      for (int var2 = Math.max(0, this.T - 1); var2 < this.T + (this.Y ? 1 : 2); var2++) {
         if (!g.d(var1, var2) && Mid.a(this.Q - this.U, this.R - this.U, this.U * 2, this.U * 2, var1 * 32, var2 * 32, 32, 32)) {
            return true;
         }
      }

      return false;
   }

   final boolean t() {
      int var1 = this.S + 1;
      boolean var2 = false;

      try {
         for (int var5 = Math.max(0, this.T - 1); var5 < this.T + (this.Y ? 1 : 2); var5++) {
            if (var1 >= 32 && var5 >= 900) {
               return true;
            }

            if (!g.d(var1, var5) && Mid.a(this.Q - this.U, this.R - this.U, this.U * 2, this.U * 2, var1 * 32, var5 * 32, 32, 32)) {
               return true;
            }
         }
      } catch (Throwable var4) {
      }

      return false;
   }

   static int c(int var0) {
      return var0 >> 16;
   }

   static int d(int var0) {
      return var0 << 16;
   }

   static int a(int var0, int var1) {
      return (int)((long)var0 * var1 >> 16);
   }

   static int b(int var0, int var1) {
      return var1 == 0 ? Integer.MAX_VALUE : (int)(((long)var0 << 32) / var1 >> 16);
   }

   static int e(int var0) {
      if ((var0 = var0 % 411774) < 0) {
         var0 += 411774;
      }

      byte var1 = 1;
      if (var0 > 102943 && var0 <= 205887) {
         var0 = 205887 - var0;
      } else {
         label37: {
            int var10000;
            int var10001;
            if (var0 > 205887 && var0 <= 308830) {
               var10000 = var0;
               var10001 = 205887;
            } else {
               if (var0 <= 308830) {
                  break label37;
               }

               var10000 = 411774;
               var10001 = var0;
            }

            var0 = var10000 - var10001;
            var1 = -1;
         }
      }

      int var2 = a(var0, var0);
      int var3 = 0;
      var3 = a(498, var2);
      var3 -= 10882;
      var3 = a(a(var3, var2) + 65536, var0);
      return var1 * var3;
   }

   static int f(int var0) {
      if ((var0 = var0 % 411774) < 0) {
         var0 += 411774;
      }

      byte var1 = 1;
      if (var0 > 102943 && var0 <= 205887) {
         var0 = 205887 - var0;
         var1 = -1;
      } else if (var0 > 102943 && var0 <= 308830) {
         var0 -= 205887;
         var1 = -1;
      } else if (var0 > 308830) {
         var0 = 411774 - var0;
      }

      int var2 = a(var0, var0);
      int var3 = 0;
      var3 = a(2328, var2);
      var3 -= 32551;
      return (a(var3, var2) + 65536) * var1;
   }
}
