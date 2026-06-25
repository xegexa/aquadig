package com.vlm.redstar.client.ui;

import java.util.Vector;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Image;

public final class a {
   private static byte g;
   private static int h;
   private static int i;
   private static byte j;
   private static int k;
   private static byte l = 5;
   private static boolean m;
   static boolean a = false;
   private static int n;
   private static String o;
   private static Vector p;
   private static long q;
   private static int r;
   private static byte s;
   private static byte t;
   private static byte u;
   private static int v;
   private static int w;
   private static int x;
   private static int y;
   private static byte z = 3;
   private static boolean A = false;
   private static boolean B = false;
   private static int C;
   private static Image D;
   private static Image E;
   private static Image F;
   private static Image G;
   private static Image H;
   private static int I;
   private static Image J;
   private static com.vlm.redstar.client.ui.c K;
   public static int b = 0;
   public static int c = 1;
   public static int d = 2;
   private static long L = 400L;
   static long e;
   static boolean f = false;
   private static byte M = 0;
   private static int N = 0;
   private static String dialogTitle;
   private static String dialogBody;

   public a(com.vlm.redstar.client.ui.c var1, Image var2, Image var3, Image var4, Image var5, Image var6, int var7, int var8, int var9, byte var10) {
      E = var2;
      F = var3;
      G = var4;
      H = var5;
      J = var6;
      K = var1;
      t = (byte)E.getHeight();
      s = (byte)F.getHeight();
      u = (byte)G.getWidth();
      x = J.getWidth() >> 1;
      y = J.getHeight();
      v = var7;
      w = var8;
      I = var9;
      C = 0;
      N = 0;
      h = d();
      M = var10;
   }

   private static int d() {
      return v * 3 / 4 + N;
   }

   public static void setScreenDimensions(int width, int height) {
      v = width;
      w = height;
      if (a && dialogTitle != null && dialogBody != null) {
         B = true;
         c(dialogTitle, dialogBody);
         n = (w >> 1) - (i >> 1);
         j = 1;
         B = false;
      }
   }

   private static void c(String var0, String var1) {
      e();
      dialogTitle = var0;
      dialogBody = var1;
      o = var0.toUpperCase();
      h = d();
      int var2;
      if ((var2 = K.a(o)) > h - 6) {
         h = var2 + 6;
         if (h > v) {
            h = v;
         }
      }

      r = h - 2 * (u + z);
      p = K.a(var1, r);
      g();
      i = t + z + K.a(p) + z + s;
      D = f();
      k = w / 2 - i / 2;
      n = 0 - i - 1;
      j = 0;
      g();
      a = true;
      A = false;
   }

   public static void a(String var0, String var1) {
      c(var0, var1);
      g = 0;
   }

   public static void a(String var0, String var1, byte var2, boolean var3) {
      if (var2 != 0 && var2 != 3) {
         c(var0, var1);
         g = var2;
         m = var3;
      }
   }

   public static boolean a() {
      return a;
   }

   public static void a(Graphics var0) {
      if (var0 != null) {
         int var1 = var0.getClipX();
         int var2 = var0.getClipY();
         int var3 = var0.getClipWidth();
         int var4 = var0.getClipHeight();

         try {
            switch (j) {
               case 0:
                  n = n + l;
                  if (n > k) {
                     n = k;
                     j = 1;
                  }
               case 1:
               default:
                  break;
               case 2:
                  n = n - l * 2;
                  if (n < k) {
                     e();
                     return;
                  }
            }

            int var7 = n;
            int var6 = (v >> 1) - (h >> 1);
            a(var0, E, var6, var7, h);
            var7 = n + i - s;
            a(var0, F, var6, var7, h);
            var0.setClip(0, 0, v, w);
            var7 = n + t;
            var6 = v >> 1;
            var0.drawImage(D, var6, var7, 17);
            var7 = n + (t >> 1) - (K.g >> 1) + C;
            K.a(var0, o, var6, var7);
            h();
            var0.setClip(0, 0, v, w);
            switch (g) {
               case 0:
                  var7 = n + i - (s >> 1) - (K.g >> 1);
                  var6 = v >> 1;
                  K.a(var0, b(false), var6, var7);
                  break;
               case 1:
               case 2:
                  var7 = n + i - (s >> 1) - (K.g >> 1);
                  var6 = (v >> 1) - (h >> 1) + u + z;
                  String var8 = b(true);
                  K.a(var0, var8, var6, var7, 4);
                  if (m && f) {
                     var6 += K.a(var8) + z;
                     int var5;
                     if ((var5 = var7 = n + i - (s >> 1) - (y >> 1)) < 0) {
                        var5 = 0;
                     }

                     var0.setClip(var6, var5, x, y);
                     var0.drawImage(J, var6, var7, 20);
                  }

                  var7 = n + i - (s >> 1) - (K.g >> 1);
                  var6 = (v >> 1) + (h >> 1) - u - z;
                  var8 = b(false);
                  var0.setClip(0, 0, v, w);
                  K.a(var0, var8, var6, var7, 8);
                  if (!m && f) {
                     var6 -= K.a(var8) + z + x;
                     int var10;
                     if ((var10 = var7 = n + i - (s >> 1) - (y >> 1)) < 0) {
                        var10 = 0;
                     }

                     var0.setClip(var6, var10, x, y);
                     var0.drawImage(J, var6 - x, var7, 20);
                  }
            }

            if (System.currentTimeMillis() > q && !A && g == 3) {
               b();
            }
         } catch (Throwable var9) {
         }

         var0.setClip(var1, var2, var3, var4);
      }
   }

   public static void b() {
      if (a) {
         if (j == 1 || g == 3) {
            k = 0 - i - 1;
            j = 2;
         }

         A = true;
      }
   }

   private static void e() {
      if (!B) {
         a = false;
         A = true;
         o = null;
         p = null;
         dialogTitle = null;
         dialogBody = null;
      }
   }

   public static byte a(int var0) {
      if (g == 3) {
         return 2;
      } else if (j != 1) {
         return 2;
      } else if (var0 == d) {
         if (g == 0) {
            return 0;
         } else {
            return (byte)(m ? 0 : 1);
         }
      } else {
         boolean var10000;
         if (var0 == b) {
            var10000 = true;
         } else {
            if (var0 != c) {
               return 2;
            }

            var10000 = false;
         }

         a(var10000);
         return 2;
      }
   }

   private static void a(boolean var0) {
      m = var0;
      g();
   }

   private static Image f() {
      Image var0;
      Graphics var1;
      (var1 = (var0 = Image.createImage(h, i - (t + s))).getGraphics()).setColor(I);
      var1.fillRect(0, 0, var0.getWidth(), var0.getHeight());
      if (p != null) {
         K.a(var1, p, var0.getWidth() >> 1, z, 1);
      }

      int var2 = 0;
      int var10000 = 0;

      while (true) {
         int var3 = var10000;
         if (var10000 >= var0.getHeight()) {
            return var0;
         }

         var1.setClip(0, var3, var0.getWidth(), G.getHeight());
         var1.drawImage(G, 0, var3, 20);
         var2 = var0.getWidth();
         var1.drawImage(H, var2, var3, 24);
         var10000 = var3 + G.getHeight();
      }
   }

   private static void a(Graphics var0, Image var1, int var2, int var3, int var4) {
      int var8 = var1.getWidth() / 3;
      int var7 = var1.getHeight();
      int var6 = var3;
      int var9 = var3;
      if (var3 < 0) {
         var9 = 0;
      }

      var0.setClip(var2, var9, var8, var7);
      var0.drawImage(var1, var2, var3, 20);
      int var5;
      int var10000 = var5 = var2 + var8;

      while (true) {
         int var10 = var10000;
         if (var10000 >= var2 + var4 - var8) {
            var5 = var2 + var4;
            var0.setClip(var5 - var8, var9, var8, var7);
            var0.drawImage(var1, var5, var6, 24);
            return;
         }

         var0.setClip(var10, var9, var8, var7);
         var0.drawImage(var1, var10 - var8, var6, 20);
         var10000 = var10 + var8;
      }
   }

   private static void g() {
      e = System.currentTimeMillis();
      f = true;
   }

   private static void h() {
      if (System.currentTimeMillis() - e > L) {
         f = !f;
         e = System.currentTimeMillis();
      }
   }

   public static void a(byte var0) {
      if (var0 > 1 && var0 < 30) {
         l = var0;
      }
   }

   private static String b(boolean var0) {
      switch (g) {
         case 0:
            switch (M) {
               case 0:
                  return "OK";
               case 1:
                  return "OK";
               case 2:
                  return "OK";
               case 3:
                  return "OK";
               case 4:
                  return "ACEP.";
               default:
                  return "";
            }
         case 1:
            if (var0) {
               switch (M) {
                  case 0:
                     return "OK";
                  case 1:
                     return "OK";
                  case 2:
                     return "OK";
                  case 3:
                     return "OK";
                  case 4:
                     return "ACEP.";
               }
            } else {
               switch (M) {
                  case 0:
                     return "CANCEL";
                  case 1:
                     return "ELIMINA";
                  case 2:
                     return "ANNULER";
                  case 3:
                     return "ABBRUCH";
                  case 4:
                     return "OK";
               }
            }
         case 2:
            if (var0) {
               switch (M) {
                  case 0:
                     return "YES";
                  case 1:
                     return "SI";
                  case 2:
                     return "OUI";
                  case 3:
                     return "YA";
                  case 4:
                     return "SI";
               }
            } else {
               switch (M) {
                  case 0:
                     return "NO";
                  case 1:
                     return "NO";
                  case 2:
                     return "NON";
                  case 3:
                     return "NEIN";
                  case 4:
                     return "NO";
               }
            }
      }

      return "";
   }

   public static void c() {
      e();
      a = false;
      D = null;
      E = null;
      F = null;
      G = null;
      H = null;
      J = null;
      K = null;
      System.gc();
   }

   public static void b(String var0, String var1) {
      if (a()) {
         g = 0;
         B = true;
         c(var0, var1);
         n = (w >> 1) - (i >> 1);
         j = 1;
         B = false;
      }
   }

   public static void a(String var0, String var1, boolean var2) {
      if (a()) {
         g = (byte)(var2 ? 1 : 2);
         B = true;
         c(var0, var1);
         n = (w >> 1) - (i >> 1);
         j = 1;
         B = false;
      }
   }

   public static void a(String var0, String var1, int var2) {
      if (a()) {
         g = 3;
         q = var2 != 0 ? System.currentTimeMillis() + 1000 * var2 : Long.MAX_VALUE;
         B = true;
         c(var0, var1);
         n = (w >> 1) - (i >> 1);
         j = 1;
         B = false;
      }
   }
}
